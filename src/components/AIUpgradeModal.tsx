import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Sparkles, Zap, Brain, TrendingUp, X } from 'lucide-react';
import { useSubscription } from '@/hooks/useSubscription';
import { useState } from 'react';

interface AIUpgradeModalProps {
  open: boolean;
  onClose: () => void;
}

const perks = [
  {
    icon: Brain,
    title: 'IA entrenada para LATAM',
    desc: 'Mejoras pensadas para el mercado laboral de tu país',
  },
  {
    icon: TrendingUp,
    title: 'Más entrevistas, más ofertas',
    desc: 'CVs optimizados con IA consiguen 3× más respuestas',
  },
  {
    icon: Zap,
    title: 'Mejoras en segundos',
    desc: 'Resumen, logros y bullets pulidos al instante',
  },
];

export function AIUpgradeModal({ open, onClose }: AIUpgradeModalProps) {
  const { openCheckout } = useSubscription();
  const [loading, setLoading] = useState(false);

  const handleUpgrade = async () => {
    setLoading(true);
    try {
      await openCheckout();
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md p-0 overflow-hidden border-0 shadow-2xl" onPointerDownOutside={(e) => e.preventDefault()}>
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full p-1 text-white/70 hover:text-white transition-colors"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Header */}
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-6 text-white">
          <div className="flex items-center gap-2 mb-3">
            <div className="rounded-full bg-white/20 p-2">
              <Sparkles className="h-5 w-5" />
            </div>
            <span className="text-sm font-medium opacity-90">MoonJab Pro</span>
          </div>
          <h2 className="text-xl font-bold leading-tight mb-1">
            Esta función usa inteligencia artificial avanzada
          </h2>
          <p className="text-sm text-white/80 leading-relaxed">
            Mantener modelos de IA de alta calidad tiene un costo real de infraestructura.
            Por eso la mejora con IA es parte del plan Pro.
          </p>
        </div>

        {/* Perks */}
        <div className="p-6 space-y-4">
          {perks.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex items-start gap-3">
              <div className="rounded-lg bg-orange-50 dark:bg-orange-950/40 p-2 shrink-0">
                <Icon className="h-4 w-4 text-orange-500" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{title}</p>
                <p className="text-xs text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}

          {/* Pricing */}
          <div className="rounded-xl border border-orange-200 dark:border-orange-900 bg-orange-50 dark:bg-orange-950/30 p-4 text-center">
            <p className="text-2xl font-bold text-orange-600">
              $5<span className="text-sm font-normal text-muted-foreground">/mes</span>
            </p>
            <p className="text-xs text-muted-foreground mt-0.5">Cancela cuando quieras · Sin permanencia</p>
          </div>

          <Button
            className="w-full font-semibold bg-orange-500 hover:bg-orange-600 text-white"
            onClick={handleUpgrade}
            disabled={loading}
          >
            <Sparkles className="mr-2 h-4 w-4" />
            {loading ? 'Redirigiendo...' : 'Activar MoonJab Pro'}
          </Button>

          <p className="text-center text-xs text-muted-foreground">
            ¿Ya tienes Pro?{' '}
            <button onClick={onClose} className="text-orange-500 hover:underline">
              Volver al editor
            </button>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
