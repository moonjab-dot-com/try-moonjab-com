import { Card } from '@/components/ui/card';
import { FileText, Mic } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface ProgressBarProps {
  cvCompleted: number;
  interviewsPracticed: number;
}

export function ProgressBar({ cvCompleted = 0, interviewsPracticed = 0 }: ProgressBarProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  const metrics = [
    { icon: FileText, label: 'CV Completado', value: cvCompleted, max: 100, suffix: '%' },
    { icon: Mic, label: 'Entrevistas', value: interviewsPracticed, max: 10, suffix: '/10' },
  ];

  return (
    <Card ref={ref} className="p-5 border-border/50 bg-card">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-sm">Tu Progreso</h3>
        <span className="text-[10px] text-muted-foreground uppercase tracking-wide font-medium">Esta semana</span>
      </div>
      <div className="space-y-4">
        {metrics.map((metric, i) => {
          const Icon = metric.icon;
          const percentage = Math.min((metric.value / metric.max) * 100, 100);

          return (
            <div key={metric.label} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-primary/8 flex items-center justify-center flex-shrink-0">
                    <Icon className="h-3 w-3 text-primary" />
                  </div>
                  <span className="text-xs font-medium">{metric.label}</span>
                </div>
                <span className="text-xs font-semibold tabular-nums text-foreground/70">
                  {metric.value}{metric.suffix}
                </span>
              </div>
              <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-muted">
                <motion.div
                  className="h-full rounded-full bg-primary"
                  initial={{ width: 0 }}
                  animate={{ width: inView ? `${percentage}%` : 0 }}
                  transition={{ duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
