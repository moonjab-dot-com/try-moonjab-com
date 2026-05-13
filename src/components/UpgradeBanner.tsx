import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X, Sparkles, Check } from 'lucide-react';
import { useAuthStore } from '@/store/useAuthStore';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface UpgradeBannerProps {
  onUpgrade?: () => void;
}

const PERKS = [
  'Plantilla Harvard exclusiva',
  'Entrevistas IA ilimitadas',
  'Feedback detallado con IA',
];

export const UpgradeBanner = ({ onUpgrade }: UpgradeBannerProps) => {
  const navigate = useNavigate();
  const { user } = useAuthStore();
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const wasDismissed = sessionStorage.getItem('upgrade-banner-dismissed');
    if (wasDismissed) setDismissed(true);
  }, []);

  const handleDismiss = () => {
    setDismissed(true);
    sessionStorage.setItem('upgrade-banner-dismissed', 'true');
  };

  if (user?.plan === 'premium' || dismissed) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="relative rounded-xl border border-border/50 bg-card p-4 overflow-hidden"
      >
        {/* Subtle background accent */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-primary/[0.06] rounded-full blur-2xl pointer-events-none" />

        <div className="relative flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
            <Sparkles className="h-4 w-4 text-primary" />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="text-sm font-semibold leading-tight">
                  MoonJab Pro — <span className="text-primary">$5/mes</span>
                </p>
                <p className="text-[11px] text-muted-foreground mt-0.5">
                  Desbloquea el 100% de tu potencial
                </p>
              </div>
              <button
                onClick={handleDismiss}
                className="p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors flex-shrink-0"
                aria-label="Cerrar"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>

            <ul className="mt-2.5 flex flex-wrap gap-x-4 gap-y-1">
              {PERKS.map((perk) => (
                <li key={perk} className="flex items-center gap-1.5">
                  <Check className="h-3 w-3 text-primary flex-shrink-0" />
                  <span className="text-[11px] text-muted-foreground">{perk}</span>
                </li>
              ))}
            </ul>

            <Button
              size="sm"
              className="mt-3 h-7 text-xs gap-1.5 font-medium"
              onClick={() => onUpgrade ? onUpgrade() : navigate('/payment')}
            >
              <Sparkles className="h-3 w-3" /> Ver planes Pro
            </Button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
