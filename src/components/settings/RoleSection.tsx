import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import {
  RefreshCw, History, Sparkles, CheckCircle2, RotateCcw,
  AlertTriangle, Target, Building2, Zap, BrainCircuit,
  ChevronDown, ChevronUp, Plus,
} from 'lucide-react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { useProfileStore } from '@/store/useProfileStore';
import { useAuthStore } from '@/store/useAuthStore';
import { supabase } from '@/integrations/supabase/client';
import { PROFESSIONAL_ROLES, getRoleDefinition, detectRole } from '@/lib/roleDetection';
import { RIASEC_TYPE_INFO, RIASECType } from '@/lib/riasecQuestions';
import { getCompatibleRoles } from '@/lib/riasecScoring';
import { DynamicIcon } from '@/components/DynamicIcon';
import { ProfessionalRole } from '@/types';
import { toast } from 'sonner';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const TYPE_COLORS: Record<RIASECType, string> = {
  R: '#f97316', I: '#3b82f6', A: '#a855f7',
  S: '#22c55e', E: '#eab308', C: '#06b6d4',
};

export const RoleSection = () => {
  const navigate = useNavigate();
  const { user, updateUser } = useAuthStore();
  const { profile, updateRole } = useProfileStore();
  const [isReanalyzing, setIsReanalyzing] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [showRoleSelector, setShowRoleSelector] = useState(false);
  const [showRetakeDialog, setShowRetakeDialog] = useState(false);

  // ── Empty state when no profile loaded ───────────────────────────────────
  if (!profile) {
    return (
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold">Rol Profesional</h2>
          <p className="text-muted-foreground mt-1">
            Personaliza tu experiencia según tu perfil vocacional
          </p>
        </div>
        <Separator />
        <Card className="p-10 flex flex-col items-center gap-4 text-center">
          <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
            <BrainCircuit className="w-7 h-7 text-primary" />
          </div>
          <div>
            <h3 className="font-bold text-lg">No tienes un perfil vocacional todavía</h3>
            <p className="text-muted-foreground text-sm mt-1 max-w-xs">
              Completa el diagnóstico RIASEC para descubrir tu código Holland y carreras compatibles.
            </p>
          </div>
          <Button
            className="gradient-orange text-white mt-2"
            onClick={() => navigate('/onboarding')}
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Hacer diagnóstico vocacional
          </Button>
        </Card>
      </div>
    );
  }

  const currentRoleInfo = getRoleDefinition(profile.rolActual);
  const hasRiasec = !!profile.riasecCode;
  const riasecLetters = hasRiasec ? profile.riasecCode!.split('') : [];

  // Compatible careers from RIASEC if available
  const compatibleCareers = hasRiasec ? getCompatibleRoles(profile.riasecCode!, 5) : [];

  // Profile completion score
  const completionItems = [
    { label: 'Diagnóstico RIASEC', done: hasRiasec },
    { label: 'Rol profesional', done: profile.rolActual !== 'student' && profile.rolActual !== 'other' },
    { label: 'Experiencia', done: !!profile.experience },
    { label: 'Intereses', done: (profile.interests?.length ?? 0) > 0 },
  ];
  const completionScore = Math.round(
    (completionItems.filter(i => i.done).length / completionItems.length) * 100,
  );

  // ── Handlers ─────────────────────────────────────────────────────────────
  const persistRole = async (role: ProfessionalRole) => {
    if (!user?.id) return;
    await supabase.from('profiles').update({ rol_profesional: role }).eq('id', user.id);
  };

  const handleReanalyze = () => {
    setIsReanalyzing(true);
    setTimeout(() => {
      if (profile.preferencias) {
        const suggestions = detectRole(profile.preferencias);
        if (suggestions.length > 0) {
          const newRole = suggestions[0].role;
          updateRole(newRole, suggestions[0].confidence);
          void persistRole(newRole);
          toast.success('Perfil actualizado según tus actividades recientes');
        }
      }
      setIsReanalyzing(false);
    }, 1500);
  };

  const handleSelectRole = (role: ProfessionalRole) => {
    updateRole(role, 100);
    void persistRole(role);
    toast.success('Rol profesional actualizado');
    setShowRoleSelector(false);
  };

  const handleConfirmRetake = () => {
    setShowRetakeDialog(false);
    updateUser({ onboardingCompleted: false });
    toast.info('Redirigiendo al diagnóstico…');
    setTimeout(() => navigate('/onboarding'), 800);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Rol Profesional</h2>
        <p className="text-muted-foreground mt-1">
          Tu perfil vocacional y preferencias profesionales
        </p>
      </div>

      <Separator />

      {/* ── RIASEC Profile Card ─────────────────────────────────────────── */}
      {hasRiasec && (
        <Card className="p-6 border-primary/20 bg-primary/3">
          <div className="flex items-start justify-between mb-4">
            <div>
              <Label className="text-xs text-muted-foreground uppercase tracking-wider">Código Holland</Label>
              <div className="flex items-center gap-2 mt-2">
                {riasecLetters.map((letter, i) => {
                  const info = RIASEC_TYPE_INFO[letter as RIASECType];
                  return (
                    <Badge
                      key={letter}
                      className="text-sm px-3 py-1 font-bold"
                      style={{ background: TYPE_COLORS[letter as RIASECType], color: '#fff' }}
                    >
                      {info?.emoji} {letter}
                    </Badge>
                  );
                })}
              </div>
            </div>
            <div className="flex items-center gap-1.5 bg-primary/10 rounded-full px-3 py-1">
              <Zap className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs text-primary font-medium">Perfil activo</span>
            </div>
          </div>

          {/* RIASEC bar scores */}
          {profile.riasecScores && (
            <div className="space-y-2">
              {(Object.entries(profile.riasecScores) as [RIASECType, number][])
                .sort((a, b) => b[1] - a[1])
                .map(([type, pct]) => (
                  <div key={type} className="flex items-center gap-2">
                    <span className="w-24 text-xs text-muted-foreground flex items-center gap-1">
                      <DynamicIcon name={RIASEC_TYPE_INFO[type].icon} size={11} />
                      {RIASEC_TYPE_INFO[type].name}
                    </span>
                    <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{ width: `${pct}%`, background: TYPE_COLORS[type] }}
                      />
                    </div>
                    <span className="text-xs tabular-nums text-muted-foreground w-8 text-right">
                      {pct}%
                    </span>
                  </div>
                ))}
            </div>
          )}
        </Card>
      )}

      {/* ── Current Role ────────────────────────────────────────────────── */}
      <Card className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <Label className="text-xs text-muted-foreground uppercase tracking-wider">Rol actual</Label>
            <div className="flex items-center gap-3 mt-2">
              <span className="text-4xl">{currentRoleInfo?.icon}</span>
              <div>
                <h3 className="text-xl font-bold">{currentRoleInfo?.label ?? 'Sin definir'}</h3>
                <p className="text-sm text-muted-foreground mt-0.5">
                  {currentRoleInfo?.description ?? 'Selecciona tu rol profesional'}
                </p>
                {currentRoleInfo?.category && (
                  <Badge variant="secondary" className="text-xs mt-1.5">
                    {currentRoleInfo.category}
                  </Badge>
                )}
              </div>
            </div>
          </div>
          <Badge className="gradient-orange text-white">Activo</Badge>
        </div>

        <div className="flex gap-2 mt-4">
          <Button variant="outline" onClick={handleReanalyze} disabled={isReanalyzing} className="flex-1">
            {isReanalyzing
              ? <><RefreshCw className="mr-2 h-4 w-4 animate-spin" />Analizando…</>
              : <><Sparkles className="mr-2 h-4 w-4" />Reevaluar</>
            }
          </Button>
          <Button
            variant="default"
            onClick={() => setShowRetakeDialog(true)}
            className="flex-1 gradient-orange text-white"
          >
            <RotateCcw className="mr-2 h-4 w-4" />
            Repetir diagnóstico
          </Button>
        </div>
      </Card>

      {/* ── Profile completion ───────────────────────────────────────────── */}
      <Card className="p-6">
        <h3 className="font-bold mb-3 flex items-center gap-2">
          <CheckCircle2 className="h-4 w-4 text-primary" />
          Completitud del perfil
          <span className="ml-auto text-sm font-normal text-muted-foreground">{completionScore}%</span>
        </h3>
        <Progress value={completionScore} className="h-2 mb-4" />
        <div className="grid grid-cols-2 gap-2">
          {completionItems.map(item => (
            <div
              key={item.label}
              className={cn(
                'flex items-center gap-2 text-sm rounded-lg px-3 py-2',
                item.done ? 'bg-emerald-500/10 text-emerald-700' : 'bg-muted text-muted-foreground',
              )}
            >
              <span className={item.done ? 'text-emerald-500' : 'text-muted-foreground/50'}>
                {item.done ? '✓' : '○'}
              </span>
              {item.label}
            </div>
          ))}
        </div>
      </Card>

      {/* ── Compatible careers ───────────────────────────────────────────── */}
      {compatibleCareers.length > 0 && (
        <Card className="p-6">
          <h3 className="font-bold mb-3 flex items-center gap-2">
            <Target className="h-4 w-4 text-primary" />
            Carreras compatibles con tu perfil
          </h3>
          <div className="space-y-2.5">
            {compatibleCareers.map((career, i) => (
              <div key={career.role} className="flex items-center gap-3">
                <span className="text-xs text-muted-foreground w-4 shrink-0">{i + 1}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="text-sm font-medium truncate">{career.role}</span>
                    <span className="text-xs text-muted-foreground ml-2 shrink-0">{career.compatibility}%</span>
                  </div>
                  <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-primary"
                      style={{ width: `${career.compatibility}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* ── Role history ─────────────────────────────────────────────────── */}
      <Card className="p-6">
        <div className="flex items-center justify-between">
          <h3 className="font-bold flex items-center gap-2">
            <History className="h-4 w-4" />
            Historial de roles
          </h3>
          <Button variant="ghost" size="sm" onClick={() => setShowHistory(!showHistory)}>
            {showHistory ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </Button>
        </div>

        <AnimatePresence>
          {showHistory && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 space-y-2 overflow-hidden"
            >
              {(profile.historialRol?.length ?? 0) === 0 ? (
                <p className="text-sm text-muted-foreground text-center py-4">
                  Sin historial todavía
                </p>
              ) : (
                profile.historialRol.map((entry, index) => {
                  const roleInfo = getRoleDefinition(entry.rol);
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-lg border bg-muted/30"
                    >
                      <span className="text-2xl">{roleInfo?.icon}</span>
                      <div className="flex-1">
                        <p className="font-medium text-sm">{roleInfo?.label}</p>
                        <p className="text-xs text-muted-foreground">
                          {new Date(entry.fecha).toLocaleDateString('es-ES', {
                            year: 'numeric', month: 'long', day: 'numeric',
                          })}
                        </p>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {entry.confidence}% match
                      </Badge>
                    </div>
                  );
                })
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </Card>

      {/* ── Manual role selector (collapsed) ────────────────────────────── */}
      <Card className="p-6">
        <button
          onClick={() => setShowRoleSelector(!showRoleSelector)}
          className="w-full flex items-center justify-between text-left"
        >
          <h3 className="font-bold flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Cambiar rol manualmente
          </h3>
          {showRoleSelector ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>

        <AnimatePresence>
          {showRoleSelector && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 overflow-hidden"
            >
              <p className="text-sm text-muted-foreground mb-3">
                Selecciona el rol que mejor describe tu situación actual
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5 max-h-80 overflow-y-auto pr-1">
                {PROFESSIONAL_ROLES.filter(r => r.id !== 'other').map(role => (
                  <button
                    key={role.id}
                    onClick={() => handleSelectRole(role.id)}
                    className={cn(
                      'p-3 rounded-xl border-2 transition-all text-left hover:shadow-md',
                      profile.rolActual === role.id
                        ? 'border-primary bg-primary/5'
                        : 'border-border hover:border-primary/50',
                    )}
                  >
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center justify-between">
                        <DynamicIcon name={role.icon} size={20} className="text-muted-foreground" />
                        {profile.rolActual === role.id && (
                          <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                        )}
                      </div>
                      <p className="font-medium text-xs leading-snug">{role.label}</p>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>

      {/* ── Retake confirmation dialog ───────────────────────────────────── */}
      <AlertDialog open={showRetakeDialog} onOpenChange={setShowRetakeDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-orange-500" />
              ¿Repetir el diagnóstico?
            </AlertDialogTitle>
            <AlertDialogDescription>
              Esto reiniciará tu perfil vocacional y te llevará de vuelta al diagnóstico RIASEC.
              Tu historial de roles se conservará, pero tu código Holland actual será reemplazado
              al completar el nuevo diagnóstico.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleConfirmRetake}
              className="gradient-orange text-white"
            >
              Sí, repetir diagnóstico
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};
