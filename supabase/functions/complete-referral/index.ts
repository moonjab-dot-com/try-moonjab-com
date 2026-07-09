import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from 'stripe';
import { createClient } from "npm:@supabase/supabase-js@2.57.2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const logStep = (step: string, details?: unknown) => {
  const detailsStr = details ? ` - ${JSON.stringify(details)}` : "";
  console.log(`[COMPLETE-REFERRAL] ${step}${detailsStr}`);
};

// Called after a referred user's first successful Stripe checkout.
// Marks the referral complete and credits the referrer's Stripe balance
// by one month of Pro ($5) as a reward.
serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  const supabaseClient = createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_ANON_KEY") ?? ""
  );

  try {
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) throw new Error("No authorization header provided");

    const token = authHeader.replace("Bearer ", "");
    const { data: authData, error: authError } = await supabaseClient.auth.getUser(token);
    if (authError) throw new Error(`Authentication error: ${authError.message}`);

    const user = authData.user;
    if (!user) throw new Error("User not authenticated");

    const supabaseAdmin = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    const { data: referral, error: referralError } = await supabaseAdmin
      .from("referrals")
      .select("id, referrer_id, status")
      .eq("referred_id", user.id)
      .maybeSingle();

    if (referralError) throw referralError;
    if (!referral) {
      logStep("No referral found for user", { userId: user.id });
      return new Response(JSON.stringify({ completed: false }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      });
    }

    if (referral.status === "completed") {
      return new Response(JSON.stringify({ completed: true, alreadyRewarded: true }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      });
    }

    const { data: referrerProfile, error: profileError } = await supabaseAdmin
      .from("profiles")
      .select("email")
      .eq("id", referral.referrer_id)
      .single();

    if (profileError) throw profileError;

    const stripeKey = Deno.env.get("STRIPE_SECRET_KEY");
    if (!stripeKey) throw new Error("STRIPE_SECRET_KEY is not set");
    const stripe = new Stripe(stripeKey, { apiVersion: "2025-08-27.basil" });

    const customers = await stripe.customers.list({ email: referrerProfile.email, limit: 1 });
    const referrerCustomer = customers.data[0];

    if (referrerCustomer) {
      await stripe.customers.createBalanceTransaction(referrerCustomer.id, {
        amount: -500, // credits $5.00 (one month of Pro) toward their next invoice
        currency: "usd",
        description: "Recompensa por referido MoonJab",
      });
      logStep("Reward credited", { referrerCustomerId: referrerCustomer.id });
    } else {
      logStep("Referrer has no Stripe customer yet — reward will show as pending, credit on next checkout");
    }

    await supabaseAdmin
      .from("referrals")
      .update({ status: "completed", reward_granted_at: new Date().toISOString() })
      .eq("id", referral.id);

    return new Response(JSON.stringify({ completed: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    logStep("ERROR", { message: errorMessage });
    return new Response(JSON.stringify({ error: errorMessage }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
