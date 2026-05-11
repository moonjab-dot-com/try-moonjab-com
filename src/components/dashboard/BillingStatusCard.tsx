import { Crown, Calendar, ExternalLink, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';
import { useSubscription } from '@/hooks/useSubscription';
import { useAuthStore } from '@/store/useAuthStore';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

export function BillingStatusCard() {
  const { user, isGuestMode } = useAuthStore();
  const { subscribed, subscriptionEnd, openPortal } = useSubscription();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  if (isGuestMode) return null;

  const isPremium = user?.plan === 'premium' && subscribed;

  const handleAction = async () => {
    if (!isPremium) {
      navigate('/payment');
      return;
    }
    setLoading(true);
    try {
      await openPortal();
    } catch {
      toast.error('Error al procesar. Intenta de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  const renewalDate = subscriptionEnd
    ? new Date(subscriptionEnd).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })
    : null;

  return (
    <div className={`rounded-xl border p-4 transition-all ${isPremium ? 'border-primary/25 bg-primary/[0.03]' : 'border-border/40 bg-card'}`}>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className={`w-6 h-6 rounded-md flex items-center justify-center ${isPremium ? 'bg-primary/10' : 'bg-muted'}`}>
            <Crown className={`h-3 w-3 ${isPremium ? 'text-primary' : 'text-muted-foreground'}`} />
          </div>
          <p className="text-sm font-semibold">Plan {isPremium ? 'Pro' : 'Free'}</p>
        </div>
        <Badge
          variant={isPremium ? 'default' : 'secondary'}
          className={`text-[10px] h-5 ${isPremium ? 'bg-primary/10 text-primary border-primary/20 hover:bg-primary/10' : ''}`}
        >
          {isPremium ? 'Activo' : 'Básico'}
        </Badge>
      </div>

      {isPremium && renewalDate && (
        <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground mb-3">
          <Calendar className="h-3 w-3 flex-shrink-0" />
          <span>Renueva el {renewalDate}</span>
        </div>
      )}

      {!isPremium && (
        <p className="text-[11px] text-muted-foreground mb-3 leading-relaxed">
          CV Harvard + Entrevistas ilimitadas por $5/mes
        </p>
      )}

      <Button
        variant={isPremium ? 'outline' : 'default'}
        size="sm"
        className="w-full h-8 text-xs gap-1.5"
        onClick={handleAction}
        disabled={loading}
      >
        {loading ? (
          <Loader2 className="h-3 w-3 animate-spin" />
        ) : isPremium ? (
          <ExternalLink className="h-3 w-3" />
        ) : (
          <Crown className="h-3 w-3" />
        )}
        {isPremium ? 'Gestionar suscripción' : 'Upgrade a Pro'}
      </Button>
    </div>
  );
}
