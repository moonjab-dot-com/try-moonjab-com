import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const logStep = (step: string, details?: unknown) => {
  const detailsStr = details ? ` - ${JSON.stringify(details)}` : "";
  console.log(`[SEND-LEAD-MAGNET] ${step}${detailsStr}`);
};

const GUIDE_HTML = `
  <div style="font-family: -apple-system, sans-serif; max-width: 560px; margin: 0 auto; color: #18181b;">
    <h1 style="font-size: 20px;">Guía rápida: CV que pasa el ATS</h1>
    <p>Gracias por tu interés en MoonJab. Aquí tienes 6 reglas concretas para que tu CV pase los filtros automáticos (ATS) que usan la mayoría de empresas en LATAM:</p>
    <ol style="line-height: 1.7;">
      <li><strong>Formato simple:</strong> sin tablas, columnas ni imágenes. Los ATS no las leen bien.</li>
      <li><strong>Palabras clave del puesto:</strong> copia términos exactos de la oferta laboral (ej. "React", no solo "desarrollo frontend").</li>
      <li><strong>Nombres de sección estándar:</strong> "Experiencia", "Educación", "Habilidades" — no uses títulos creativos.</li>
      <li><strong>Fechas consistentes:</strong> mismo formato en todo el documento (MM/AAAA).</li>
      <li><strong>Archivo .docx o PDF con texto seleccionable</strong> — nunca una imagen escaneada.</li>
      <li><strong>Logros cuantificados:</strong> "Aumenté ventas 20%" pesa más que "Responsable de ventas".</li>
    </ol>
    <p>¿Quieres que la IA revise y optimice tu CV automáticamente?</p>
    <p style="margin-top: 24px;">
      <a href="https://moonjab.com/registro" style="background: #18181b; color: #fff; padding: 10px 20px; border-radius: 8px; text-decoration: none; font-weight: 600;">Crear mi CV gratis</a>
    </p>
    <p style="color: #71717a; font-size: 12px; margin-top: 32px;">MoonJab — career platform para estudiantes en LATAM.</p>
  </div>
`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, source_page } = await req.json();
    if (!email || typeof email !== "string") {
      throw new Error("Missing or invalid email");
    }

    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (!resendApiKey) {
      logStep("RESEND_API_KEY not set — skipping send", { email, source_page });
      return new Response(JSON.stringify({ sent: false, reason: "email_not_configured" }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      });
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "MoonJab <onboarding@resend.dev>",
        to: [email],
        subject: "Tu guía de CV que pasa el ATS",
        html: GUIDE_HTML,
      }),
    });

    if (!res.ok) {
      const errBody = await res.text();
      throw new Error(`Resend API error ${res.status}: ${errBody}`);
    }

    logStep("Email sent", { email, source_page });
    return new Response(JSON.stringify({ sent: true }), {
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
