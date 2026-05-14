import { SEOHead } from '@/components/SEOHead';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Eye, EyeOff, ArrowRight, FileText, Mic, Compass } from 'lucide-react';
import { useAuthStore } from '@/store/useAuthStore';
import { toast } from 'sonner';
import { OfficialLogo } from '@/components/OfficialLogo';
import { Separator } from '@/components/ui/separator';
import { z } from 'zod';
import { verifyEmailExists } from '@/lib/verifyEmail';

const registerSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  password: z.string()
    .min(8, 'Mínimo 8 caracteres')
    .regex(/[A-Z]/, 'Debe contener al menos una mayúscula')
    .regex(/[0-9]/, 'Debe contener al menos un número'),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Las contraseñas no coinciden',
  path: ['confirmPassword'],
});

const Register = () => {
  const navigate = useNavigate();
  const { register } = useAuthStore();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [formData, setFormData] = useState({
    name: '', email: '', password: '', confirmPassword: '', acceptTerms: false, newsletter: true,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const getPasswordStrength = () => {
    const p = formData.password;
    let s = 0;
    if (p.length >= 8) s++;
    if (/[a-z]/.test(p) && /[A-Z]/.test(p)) s++;
    if (/\d/.test(p)) s++;
    if (/[^a-zA-Z\d]/.test(p)) s++;
    return s;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    if (!formData.acceptTerms) { toast.error('Debes aceptar los términos'); return; }
    try { registerSchema.parse(formData); } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => { if (err.path[0]) newErrors[err.path[0].toString()] = err.message; });
        setErrors(newErrors);
        toast.error(error.errors[0].message);
        return;
      }
    }
    setLoading(true);
    try {
      const emailCheck = await verifyEmailExists(formData.email);
      if (!emailCheck.valid) {
        toast.error(emailCheck.reason || 'El correo ingresado no es válido');
        setErrors({ email: emailCheck.reason || 'Correo inválido' });
        setLoading(false);
        return;
      }
      await register(formData.name, formData.email, formData.password);
      toast.success('Cuenta creada. Revisa tu correo para verificarla.');
      navigate('/verify-email', { state: { email: formData.email } });
    } catch (error: unknown) {
      const msg = error instanceof Error ? error.message : '';
      if (msg.includes('already registered')) {
        toast.error('Este email ya está registrado.');
      } else {
        toast.error(msg || 'Error al crear la cuenta');
      }
    } finally { setLoading(false); }
  };

  const strength = getPasswordStrength();
  const strengthColors = ['bg-destructive', 'bg-destructive', 'bg-primary/60', 'bg-primary'];
  const strengthLabels = ['Débil', 'Regular', 'Buena', 'Fuerte'];

  const features = [
    { icon: FileText, text: 'CV con IA que pasa el ATS automáticamente' },
    { icon: Mic, text: 'Simulador de entrevistas con feedback en tiempo real' },
    { icon: Compass, text: 'Diagnóstico vocacional personalizado con IA' },
  ];

  return (
    <div className="min-h-screen flex bg-background">
      <SEOHead
        title="Registro Gratis — Crea tu Cuenta MoonJab"
        description="Regístrate gratis en MoonJab. Crea tu CV profesional con IA, practica entrevistas laborales y descubre tu perfil vocacional RIASEC. Sin tarjeta de crédito."
        path="/registro"
        keywords="registro moonjab, crear cuenta moonjab, registrarse moonjab gratis, moonjab estudiantes"
      />

      {/* ── Brand panel ── */}
      <div className="hidden lg:flex lg:w-[42%] relative flex-col justify-between p-12 overflow-hidden cta-gradient">
        <div className="absolute inset-0 bg-dot-grid opacity-[0.08] pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-white/[0.04] blur-3xl pointer-events-none" />

        <OfficialLogo size="lg" className="relative z-10 brightness-0 invert" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 space-y-7"
        >
          <div>
            <h2 className="text-balance text-3xl font-bold text-white leading-[1.15] tracking-tight">
              Más de 10,000 estudiantes<br />
              <span className="text-white/75">ya encontraron trabajo.</span>
            </h2>
            <p className="mt-3 text-white/60 text-sm leading-relaxed">
              Crea tu cuenta gratis y accede a herramientas de IA diseñadas para el mercado laboral de LATAM.
            </p>
          </div>

          <ul className="space-y-3">
            {features.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-white/12 flex items-center justify-center flex-shrink-0 border border-white/10 mt-0.5">
                  <Icon className="h-3.5 w-3.5 text-white/80" />
                </div>
                <span className="text-white/75 text-sm leading-relaxed">{text}</span>
              </li>
            ))}
          </ul>

          {/* Testimonial */}
          <div className="bg-white/[0.07] rounded-xl p-4 border border-white/10">
            <p className="text-white/80 text-sm italic leading-relaxed">
              "Conseguí mi primer trabajo en UX a los 3 meses de usar MoonJab. El simulador de entrevistas fue clave."
            </p>
            <p className="text-white/45 text-[11px] mt-2">— Valentina R., UX Designer · Buenos Aires</p>
          </div>
        </motion.div>

        <p className="relative z-10 text-white/35 text-[11px]">© 2025 MoonJab · Para LATAM</p>
      </div>

      {/* ── Form panel ── */}
      <div className="flex-1 flex items-center justify-center p-6 lg:p-12 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-sm py-6"
        >
          {/* Mobile logo */}
          <div className="flex items-center justify-between mb-8 lg:hidden">
            <Link to="/" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              ← Volver
            </Link>
            <OfficialLogo size="md" />
          </div>

          <div className="mb-6">
            <h1 className="text-2xl font-bold tracking-tight">Crea tu cuenta</h1>
            <p className="text-sm text-muted-foreground mt-1.5">Gratis para siempre en el plan básico</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div className="space-y-1.5">
              <Label htmlFor="name" className="text-xs font-medium">Nombre completo</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Ana García"
                className={`h-10 bg-muted/40 border-border/60 focus:bg-background transition-colors ${errors.name ? 'border-destructive' : ''}`}
              />
              {errors.name && <p className="text-[11px] text-destructive">{errors.name}</p>}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="email" className="text-xs font-medium">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="ana@ejemplo.com"
                className={`h-10 bg-muted/40 border-border/60 focus:bg-background transition-colors ${errors.email ? 'border-destructive' : ''}`}
              />
              {errors.email && <p className="text-[11px] text-destructive">{errors.email}</p>}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="password" className="text-xs font-medium">Contraseña</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  placeholder="••••••••"
                  className={`h-10 pr-10 bg-muted/40 border-border/60 focus:bg-background transition-colors ${errors.password ? 'border-destructive' : ''}`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              {formData.password && (
                <div className="space-y-1 mt-1.5">
                  <div className="flex gap-1">
                    {[0, 1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className={`h-1 flex-1 rounded-full transition-all duration-300 ${i < strength ? strengthColors[strength - 1] : 'bg-muted'}`}
                      />
                    ))}
                  </div>
                  {strength > 0 && (
                    <p className="text-[10px] text-muted-foreground">{strengthLabels[strength - 1]}</p>
                  )}
                </div>
              )}
              {errors.password && <p className="text-[11px] text-destructive">{errors.password}</p>}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="confirmPassword" className="text-xs font-medium">Confirmar contraseña</Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  type={showConfirm ? 'text' : 'password'}
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  placeholder="••••••••"
                  className={`h-10 pr-10 bg-muted/40 border-border/60 focus:bg-background transition-colors ${errors.confirmPassword ? 'border-destructive' : ''}`}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={showConfirm ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                >
                  {showConfirm ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              {errors.confirmPassword && <p className="text-[11px] text-destructive">{errors.confirmPassword}</p>}
            </div>

            <div className="flex items-start gap-2 pt-0.5">
              <Checkbox
                id="terms"
                checked={formData.acceptTerms}
                onCheckedChange={(checked) => setFormData({ ...formData, acceptTerms: checked as boolean })}
                className="mt-0.5"
              />
              <label htmlFor="terms" className="text-[11px] leading-relaxed text-muted-foreground cursor-pointer">
                Acepto los{' '}
                <Link to="/terms" className="text-primary hover:underline">términos</Link>
                {' '}y la{' '}
                <Link to="/privacy" className="text-primary hover:underline">política de privacidad</Link>
              </label>
            </div>

            <Button type="submit" className="w-full h-10 text-sm gap-2 font-medium" disabled={loading}>
              {loading ? (
                <>
                  <div className="h-4 w-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                  Creando cuenta...
                </>
              ) : (
                <>Crear cuenta gratis <ArrowRight className="h-4 w-4" /></>
              )}
            </Button>

            <div className="flex items-center gap-3">
              <Separator className="flex-1" />
              <span className="text-xs text-muted-foreground">o</span>
              <Separator className="flex-1" />
            </div>

            <Button
              type="button"
              variant="outline"
              className="w-full h-10 text-sm gap-2 border-border/60 hover:bg-muted/50"
              disabled={loading}
              onClick={async () => {
                try { await useAuthStore.getState().signInWithGoogle(); }
                catch { toast.error('Error al conectar con Google'); }
              }}
            >
              <svg className="h-4 w-4 flex-shrink-0" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Continuar con Google
            </Button>
          </form>

          <p className="text-center text-xs text-muted-foreground mt-5">
            ¿Ya tienes cuenta?{' '}
            <Link to="/login" className="text-primary hover:underline font-medium">Inicia sesión</Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Register;
