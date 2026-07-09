import { useEffect, useState } from 'react';
import { Gift, Copy, Check, Loader2, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useAuthStore } from '@/store/useAuthStore';
import { supabase } from '@/integrations/supabase/client';
import { buildReferralLink } from '@/lib/referral';
import { track } from '@/lib/analytics';
import { toast } from 'sonner';

interface ReferralRow {
  id: string;
  status: 'pending' | 'completed';
  created_at: string;
}

export function ReferralSection() {
  const { user } = useAuthStore();
  const [referralCode, setReferralCode] = useState<string | null>(null);
  const [referrals, setReferrals] = useState<ReferralRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!user || user.id.startsWith('guest_')) {
      setLoading(false);
      return;
    }

    (async () => {
      const [{ data: profile }, { data: referralRows }] = await Promise.all([
        supabase.from('profiles').select('referral_code').eq('id', user.id).maybeSingle(),
        supabase.from('referrals').select('id, status, created_at').eq('referrer_id', user.id),
      ]);

      setReferralCode(profile?.referral_code ?? null);
      setReferrals(referralRows ?? []);
      setLoading(false);
    })();
  }, [user]);

  const completedCount = referrals.filter((r) => r.status === 'completed').length;

  const handleCopy = () => {
    if (!referralCode) return;
    navigator.clipboard.writeText(buildReferralLink(referralCode));
    track('referral_link_copied');
    setCopied(true);
    toast.success('Enlace copiado');
    setTimeout(() => setCopied(false), 2000);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-16">
        <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Gift className="h-4 w-4 text-primary" />
            <CardTitle>Invita y gana</CardTitle>
          </div>
          <CardDescription>
            Comparte tu enlace. Cuando un amigo se suscribe a Pro, ambos ganan un mes gratis.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {referralCode ? (
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="flex-1 rounded-lg border border-border/60 bg-muted/40 px-4 py-2.5 text-sm font-mono truncate">
                {buildReferralLink(referralCode)}
              </div>
              <Button onClick={handleCopy} variant="outline" className="gap-2 shrink-0">
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                {copied ? 'Copiado' : 'Copiar enlace'}
              </Button>
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">Tu enlace de invitación se está generando, intenta de nuevo en unos segundos.</p>
          )}

          <div className="flex items-center gap-6 pt-2">
            <div>
              <div className="flex items-center gap-1.5 text-2xl font-bold">
                <Users className="h-4 w-4 text-muted-foreground" />
                {referrals.length}
              </div>
              <p className="text-xs text-muted-foreground mt-0.5">Invitados registrados</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">{completedCount}</div>
              <p className="text-xs text-muted-foreground mt-0.5">Meses gratis ganados</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {referrals.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Tus referidos</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {referrals.map((r) => (
              <div key={r.id} className="flex items-center justify-between py-2 border-b border-border/30 last:border-0">
                <span className="text-sm text-muted-foreground">
                  {new Date(r.created_at).toLocaleDateString('es', { year: 'numeric', month: 'short', day: 'numeric' })}
                </span>
                <Badge variant={r.status === 'completed' ? 'default' : 'secondary'} className="text-xs">
                  {r.status === 'completed' ? 'Recompensa otorgada' : 'Pendiente'}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
