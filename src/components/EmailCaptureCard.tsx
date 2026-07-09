import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, Loader2, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { track } from '@/lib/analytics';

interface EmailCaptureCardProps {
  sourcePage: string;
  title?: string;
  description?: string;
}

export function EmailCaptureCard({
  sourcePage,
  title = 'Descarga la guía gratuita de CVs que pasan el ATS',
  description = 'Te la enviamos por correo. Sin spam, solo lo esencial para conseguir tu próxima entrevista.',
}: EmailCaptureCardProps) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes('@')) {
      toast.error('Ingresa un email válido');
      return;
    }
    setLoading(true);
    try {
      const { error } = await supabase.from('leads').insert({ email, source_page: sourcePage });
      if (error) throw error;
      track('lead_captured', { source_page: sourcePage });
      setDone(true);
    } catch {
      toast.error('No pudimos guardar tu email, intenta de nuevo');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
      className="rounded-2xl border border-primary/20 bg-primary/[0.03] p-6 sm:p-8"
    >
      {done ? (
        <div className="flex items-center gap-3 justify-center text-center py-2">
          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
          <p className="text-sm font-medium">Listo, revisa tu correo en unos minutos.</p>
        </div>
      ) : (
        <>
          <div className="flex items-center gap-2 mb-2">
            <Mail className="h-4 w-4 text-primary" />
            <h3 className="font-bold text-base sm:text-lg">{title}</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-4">{description}</p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              className="h-11 bg-background"
              disabled={loading}
            />
            <Button type="submit" className="h-11 px-6 gap-2 font-medium whitespace-nowrap" disabled={loading}>
              {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <>Enviarme la guía <ArrowRight className="h-4 w-4" /></>}
            </Button>
          </form>
        </>
      )}
    </motion.div>
  );
}
