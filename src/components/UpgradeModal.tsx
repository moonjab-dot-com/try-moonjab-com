import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Sparkles, FileText, Mic, MessageSquare, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

interface UpgradeModalProps {
  open: boolean;
  onClose: () => void;
  feature?: string;
  onStartTrial?: () => void;
}

const PRO_FEATURES = [
  { icon: FileText, label: 'Plantilla Harvard CV exclusiva', desc: 'La plantilla favorita de recruiters en LATAM' },
  { icon: FileText, label: 'Todas las plantillas premium', desc: 'Harvard, Moderno, Minimalista y más' },
  { icon: Mic, label: 'Entrevistas IA ilimitadas', desc: 'Practica todas las veces que necesites' },
  { icon: MessageSquare, label: 'Coach IA 24/7', desc: 'Orientación personalizada en tiempo real' },
  { icon: Download, label: 'Exportación PDF ilimitada', desc: 'Descarga tu CV cuándo quieras' },
  { icon: Sparkles, label: 'Diagnóstico completo RIASEC', desc: 'Análisis profundo de tu perfil profesional' },
];

export const UpgradeModal = ({ open, onClose, feature }: UpgradeModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader className="pb-2">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <Sparkles className="h-4 w-4 text-primary" />
            </div>
            <Badge className="text-[10px] h-5 bg-primary/10 text-primary border-primary/20 font-medium">
              MoonJab Pro
            </Badge>
          </div>
          <DialogTitle className="text-xl font-bold leading-tight">
            Todo lo que necesitas para conseguir trabajo
          </DialogTitle>
          <p className="text-sm text-muted-foreground mt-1">
            Únete a miles de estudiantes LATAM que usaron MoonJab para conseguir su primer empleo.
          </p>
        </DialogHeader>

        <div className="space-y-5 pt-2">
          {feature && (
            <div className="rounded-lg bg-amber-50 dark:bg-amber-950/20 p-3 border border-amber-200/60 dark:border-amber-800/30">
              <p className="text-sm text-amber-800 dark:text-amber-200">
                <strong>{feature}</strong> es una función exclusiva de Pro.
              </p>
            </div>
          )}

          <ul className="space-y-2.5">
            {PRO_FEATURES.map(({ icon: Icon, label, desc }) => (
              <li key={label} className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-md bg-primary/8 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon className="h-3.5 w-3.5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <Check className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                    <span className="text-sm font-medium">{label}</span>
                  </div>
                  <p className="text-[11px] text-muted-foreground mt-0.5 ml-5">{desc}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="rounded-xl border-2 border-primary/20 bg-primary/[0.03] p-4">
            <div className="flex items-baseline gap-1 mb-1">
              <span className="text-3xl font-bold text-primary">$5</span>
              <span className="text-sm text-muted-foreground">/mes · cancela cuando quieras</span>
            </div>
            <p className="text-xs text-muted-foreground mb-3">Sin compromisos. Sin permanencia.</p>
            <Link to="/payment" onClick={onClose} className="block">
              <Button className="w-full font-semibold gap-2">
                <Sparkles className="h-4 w-4" /> Suscribirse por $5/mes
              </Button>
            </Link>
            <Link to="/pricing" onClick={onClose} className="block mt-2">
              <Button variant="ghost" className="w-full text-xs h-8 text-muted-foreground">
                Ver comparación completa de planes
              </Button>
            </Link>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
