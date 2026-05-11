import { SEOHead } from '@/components/SEOHead';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Eye, EyeOff, ArrowRight, TrendingUp, Star, Users } from 'lucide-react';
import { useAuthStore } from '@/store/useAuthStore';
import { toast } from 'sonner';
import { OfficialLogo } from '@/components/OfficialLogo';
import { Separator } from '@/components/ui/separator';
import { z } from 'zod';

const loginSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres'),
});

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuthStore();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '', remember: false });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try { loginSchema.parse(formData); } catch (error) {
      if (error instanceof z.ZodError) { toast.error(error.errors[0].message); return; }
    }
    setLoading(true);
    try {
      await login(formData.email, formData.password);
      toast.success('Bienvenido de vuelta');
      navigate('/dashboard');
    } catch (error: unknown) {
      const msg = error instanceof Error ? error.message : '';
      if (msg.includes('Email not confirmed')) {
        toast.error('Tu email aún no ha sido verificado. Revisa tu correo.');
      } else {
        toast.error(msg || 'Credenciales incorrectas');
      }
    } finally { setLoading(false); }
  };

  return (
    <div className="min-h-screen flex bg-background">
      <SEOHead
        title="Iniciar Sesión"
        description="Accede a tu cuenta MoonJab para gestionar tu CV y practicar entrevistas con IA."
        path="/login"
      />

      {/* Left brand panel — hidden on mobile */}
      <div className="hidden lg:flex lg:w-[45%] relative flex-col justify-between p-12 overflow-hidden gradient-primary">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 20% 80%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />

        <OfficialLogo size="lg" className="relative z-10 brightness-0 invert" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative z-10 space-y-6"
        >
          <div>
            <h2 className="text-3xl font-bold text-white leading-tight">
              Tu carrera profesional<br />
              <span className="opacity-80">empieza aquí.</span>
            </h2>
            <p className="mt-3 text-white/70 text-sm leading-relaxed">
              CVs que pasan el ATS. Entrevistas que practicas con IA.<br />
              La plataforma que los estudiantes de LATAM necesitaban.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {[
              { icon: Users, value: '10K+', label: 'Profesionales' },
              { icon: TrendingUp, value: '87%', label: 'Consiguen trabajo' },
              { icon: Star, value: '4.9', label: 'Satisfacción' },
            ].map(({ icon: Icon, value, label }) => (
              <div key={label} className="bg-white/10 rounded-xl p-3 backdrop-blur-sm border border-white/10">
                <Icon className="h-4 w-4 text-white/80 mb-1.5" />
                <p className="text-white font-bold text-lg leading-none">{value}</p>
                <p className="text-white/60 text-[11px] mt-0.5 leading-tight">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <p className="relative z-10 text-white/40 text-xs">
          © 2025 MoonJab · Hecho para LATAM
        </p>
      </div>

      {/* Right form panel */}
      <div className="flex-1 flex items-center justify-center p-6 lg:p-12">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="w-full max-w-sm"
        >
          {/* Mobile logo */}
          <div className="flex items-center justify-between mb-8 lg:hidden">
            <Link to="/" className="text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
              ← Volver
            </Link>
            <OfficialLogo size="md" />
          </div>

          <div className="mb-7">
            <h1 className="text-2xl font-bold tracking-tight">Iniciar sesión</h1>
            <p className="text-sm text-muted-foreground mt-1">Continúa tu camino profesional</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="email" className="text-xs font-medium">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="tu@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="h-10 bg-muted/40 border-border/60 focus:bg-background transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="password" className="text-xs font-medium">Contraseña</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                  className="h-10 pr-10 bg-muted/40 border-border/60 focus:bg-background transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Checkbox
                  id="remember"
                  checked={formData.remember}
                  onCheckedChange={(checked) => setFormData({ ...formData, remember: checked as boolean })}
                />
                <label htmlFor="remember" className="text-xs text-muted-foreground cursor-pointer">Recordarme</label>
              </div>
              <Link to="/forgot-password" className="text-xs text-primary hover:underline">
                Olvidé mi contraseña
              </Link>
            </div>

            <Button type="submit" className="w-full h-10 text-sm gap-2 font-medium" disabled={loading}>
              {loading ? (
                <>
                  <div className="h-4 w-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                  Iniciando sesión...
                </>
              ) : (
                <>
                  Iniciar sesión
                  <ArrowRight className="h-4 w-4" />
                </>
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
                try {
                  await useAuthStore.getState().signInWithGoogle();
                } catch {
                  toast.error('Error al conectar con Google');
                }
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
            ¿No tienes cuenta?{' '}
            <Link to="/registro" className="text-primary hover:underline font-medium">
              Regístrate gratis
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
