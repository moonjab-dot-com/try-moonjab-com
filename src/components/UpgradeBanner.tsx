import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X, FileText, Mic, Sparkles } from 'lucide-react';
import { useAuthStore } from '@/store/useAuthStore';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

interface UpgradeBannerProps {
  onUpgrade?: () => void;
}


export const UpgradeBanner = ({ onUpgrade }: UpgradeBannerProps) => {
  const { user } = useAuthStore();
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('upgrade-banner-dismissed')) setDismissed(true);
  }, []);

  const handleDismiss = () => {
    setDismissed(true);
    sessionStorage.setItem('upgrade-banner-dismissed', 'true');
  };

  if (user?.plan === 'premium' || dismissed) return null;

  const perks = [
    { icon: FileText, label: 'Plantilla Harvard CV' },
    { icon: Mic, label: 'Entrevistas IA ilimitadas' },
    { icon: Sparkles, label: 'Coach IA 24/7' },
  ];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="rounded-xl border border-border/60 bg-card p-4 relative"
      >
        <button
          onClick={handleDismiss}
          className="absolute top-3 right-3 p-1 rounded-md hover:bg-muted/60 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Cerrar"
        >
          <X className="h-3.5 w-3.5" />
        </button>

        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-foreground pr-6">
              Sigue avanzando con MoonJab Pro
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1.5">
              {perks.map(({ icon: Icon, label }) => (
                <span key={label} className="flex items-center gap-1 text-[11px] text-muted-foreground">
                  <Icon className="h-3 w-3 text-primary flex-shrink-0" />
                  {label}
                </span>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <Link to="/pricing">
              <Button size="sm" variant="outline" className="h-8 text-xs">
                Ver detalles
              </Button>
            </Link>
            <Button size="sm" className="h-8 text-xs" onClick={onUpgrade}>
              Probar Pro · $5/mes
            </Button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
