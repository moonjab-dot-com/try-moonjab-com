import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
  Sparkles, TrendingUp, Target, Lightbulb, Award, Lock,
  CheckCircle2, Building2, Zap, ArrowRight,
} from 'lucide-react';
import { DynamicIcon } from '@/components/DynamicIcon';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, Cell, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { RIASECResult } from '@/lib/riasecScoring';
import { RIASEC_TYPE_INFO, RIASECType } from '@/lib/riasecQuestions';
import { useAuthStore } from '@/store/useAuthStore';

interface ResultsStepProps {
  onComplete: () => void;
  riasecResult: RIASECResult | null;
  values?: string[];
  experience?: string;
}

const LOADING_MESSAGES = [
  'Procesando tus 50 respuestas…',
  'Calculando tu código Holland…',
  'Mapeando carreras compatibles…',
  'Analizando tus fortalezas únicas…',
  'Generando tu perfil personalizado…',
];

const TYPE_COLORS: Record<RIASECType, string> = {
  R: '#f97316',
  I: '#3b82f6',
  A: '#a855f7',
  S: '#22c55e',
  E: '#eab308',
  C: '#06b6d4',
};

export const ResultsStep = ({ onComplete, riasecResult, values = [], experience = '' }: ResultsStepProps) => {
  const { user } = useAuthStore();
  const isPremium = user?.plan === 'premium';

  const [loading, setLoading] = useState(true);
  const [messageIndex, setMessageIndex] = useState(0);
  const [loadProgress, setLoadProgress] = useState(0);
  const [activeTab, setActiveTab] = useState<'profile' | 'careers' | 'insights'>('profile');

  const radarData = riasecResult
    ? Object.entries(riasecResult.percentages).map(([type, value]) => ({
        skill: RIASEC_TYPE_INFO[type as RIASECType].emoji + ' ' + RIASEC_TYPE_INFO[type as RIASECType].name,
        value,
        fullMark: 100,
      }))
    : [];

  const barData = riasecResult
    ? riasecResult.topTypes.map(item => ({
        name: RIASEC_TYPE_INFO[item.type].name,
        value: item.percentage,
        fill: TYPE_COLORS[item.type],
        emoji: RIASEC_TYPE_INFO[item.type].emoji,
      }))
    : [];

  useEffect(() => {
    let msgInterval: ReturnType<typeof setInterval>;
    let progInterval: ReturnType<typeof setInterval>;

    msgInterval = setInterval(() => {
      setMessageIndex(prev => (prev + 1) % LOADING_MESSAGES.length);
    }, 600);

    progInterval = setInterval(() => {
      setLoadProgress(prev => {
        if (prev >= 100) {
          clearInterval(progInterval);
          clearInterval(msgInterval);
          setTimeout(() => setLoading(false), 200);
          return 100;
        }
        return prev + 3;
      });
    }, 50);

    return () => {
      clearInterval(msgInterval);
      clearInterval(progInterval);
    };
  }, []);

  if (loading) {
    return (
      <div className="text-center space-y-8 py-12">
        <motion.div
          animate={{ scale: [1, 1.08, 1], rotate: [0, 5, -5, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
          className="w-24 h-24 mx-auto rounded-full gradient-orange flex items-center justify-center shadow-2xl"
        >
          <Sparkles className="h-12 w-12 text-white" />
        </motion.div>

        <div className="space-y-4 max-w-sm mx-auto">
          <AnimatePresence mode="wait">
            <motion.h2
              key={messageIndex}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="text-xl font-bold"
            >
              {LOADING_MESSAGES[messageIndex]}
            </motion.h2>
          </AnimatePresence>
          <Progress value={loadProgress} className="h-2" />
          <p className="text-sm text-muted-foreground">{loadProgress}%</p>
        </div>
      </div>
    );
  }

  if (!riasecResult) {
    return (
      <div className="text-center space-y-4 py-12">
        <h2 className="text-2xl font-bold">No se pudieron cargar los resultados</h2>
        <Button onClick={onComplete}>Continuar al dashboard</Button>
      </div>
    );
  }

  const topType = riasecResult.topTypes[0];
  const typeInfo = RIASEC_TYPE_INFO[topType.type];
  const confidenceScore = Math.round(
    (riasecResult.topTypes[0].percentage + riasecResult.topTypes[1]?.percentage ?? 0) / 2,
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* ── Hero: Holland Code ─────────────────────────────────────────── */}
      <div className="text-center space-y-4">
        <div className="flex justify-center gap-2 flex-wrap">
          {riasecResult.hollandCode.split('').map((letter, i) => {
            const info = RIASEC_TYPE_INFO[letter as RIASECType];
            return (
              <motion.div
                key={letter}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: i * 0.12, type: 'spring', stiffness: 260 }}
              >
                <Badge
                  className="text-base px-4 py-1.5 font-bold shadow-md"
                  style={{ background: TYPE_COLORS[letter as RIASECType], color: '#fff' }}
                >
                  {info.emoji} {letter} · {info.name}
                </Badge>
              </motion.div>
            );
          })}
        </div>

        <div>
          <h1 className="text-3xl md:text-4xl font-bold">
            Tu código Holland: <span className="gradient-text">{riasecResult.hollandCode}</span>
          </h1>
          <p className="text-muted-foreground mt-2 max-w-lg mx-auto leading-relaxed">
            {typeInfo.emoji} Perfil dominante: <strong>{typeInfo.name}</strong> — {typeInfo.description}
          </p>
        </div>

        {/* Confidence badge */}
        <div className="inline-flex items-center gap-2 bg-primary/8 border border-primary/20 rounded-full px-4 py-1.5">
          <Zap className="w-3.5 h-3.5 text-primary" />
          <span className="text-sm text-primary font-medium">
            Confianza del diagnóstico: {confidenceScore}%
          </span>
        </div>
      </div>

      {/* ── Tab selector ─────────────────────────────────────────────── */}
      <div className="flex gap-1 bg-muted rounded-xl p-1">
        {(['profile', 'careers', 'insights'] as const).map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={cn(
              'flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all',
              activeTab === tab
                ? 'bg-background shadow text-foreground'
                : 'text-muted-foreground hover:text-foreground',
            )}
          >
            {tab === 'profile' ? '🧠 Perfil' : tab === 'careers' ? '🎯 Carreras' : '💡 Insights'}
          </button>
        ))}
      </div>

      {/* ── TAB: Profile ─────────────────────────────────────────────── */}
      {activeTab === 'profile' && (
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            {/* Radar chart */}
            <Card className="p-5">
              <h3 className="font-bold text-base mb-3 flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-primary" />
                Mapa de dimensiones RIASEC
              </h3>
              <ResponsiveContainer width="100%" height={240}>
                <RadarChart data={radarData}>
                  <PolarGrid stroke="hsl(var(--border))" />
                  <PolarAngleAxis
                    dataKey="skill"
                    tick={{ fill: 'hsl(var(--foreground))', fontSize: 10 }}
                  />
                  <Radar
                    dataKey="value"
                    stroke="hsl(var(--primary))"
                    fill="hsl(var(--primary))"
                    fillOpacity={0.25}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </Card>

            {/* Bar scores */}
            <Card className="p-5">
              <h3 className="font-bold text-base mb-3 flex items-center gap-2">
                <Award className="h-4 w-4 text-primary" />
                Tu puntuación por dimensión
              </h3>
              <div className="space-y-2.5">
                {riasecResult.topTypes.map(item => (
                  <div key={item.type} className="space-y-0.5">
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-1.5">
                        <DynamicIcon name={RIASEC_TYPE_INFO[item.type].icon} size={14} />
                        {RIASEC_TYPE_INFO[item.type].name}
                      </span>
                      <span className="font-semibold tabular-nums">{item.percentage}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${item.percentage}%` }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className="h-full rounded-full"
                        style={{ background: TYPE_COLORS[item.type] }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Interpretation */}
          <Card className="p-5">
            <h3 className="font-bold text-base mb-3 flex items-center gap-2">
              <Lightbulb className="h-4 w-4 text-primary" />
              Qué dice tu perfil sobre ti
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {riasecResult.interpretation}
            </p>

            {/* Traits */}
            <div className="mt-4 flex flex-wrap gap-2">
              {riasecResult.hollandCode.split('').flatMap(l =>
                RIASEC_TYPE_INFO[l as RIASECType].traits.slice(0, 2)
              ).map(trait => (
                <Badge key={trait} variant="secondary" className="text-xs">
                  {trait}
                </Badge>
              ))}
            </div>
          </Card>

          {/* Strengths */}
          <Card className="p-5">
            <h3 className="font-bold text-base mb-3 flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              Tus fortalezas principales
            </h3>
            <ul className="space-y-2">
              {riasecResult.strengths.map((s, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-primary mt-0.5 font-bold shrink-0">✓</span>
                  {s}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      )}

      {/* ── TAB: Careers ─────────────────────────────────────────────── */}
      {activeTab === 'careers' && (
        <div className="space-y-4">
          <Card className="p-5">
            <h3 className="font-bold text-base mb-4 flex items-center gap-2">
              <Target className="h-4 w-4 text-primary" />
              Carreras más compatibles con tu perfil
            </h3>
            <div className="space-y-3">
              {riasecResult.compatibleRoles.slice(0, isPremium ? 12 : 5).map((career, i) => (
                <motion.div
                  key={career.role}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="p-3.5 rounded-xl border bg-card hover:shadow-sm transition-shadow"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-base font-semibold text-foreground">{career.role}</span>
                      {i === 0 && (
                        <Badge className="text-xs bg-primary/15 text-primary border-0">
                          ⭐ Mejor match
                        </Badge>
                      )}
                    </div>
                    <span
                      className={cn(
                        'text-xs font-bold px-2 py-0.5 rounded-full',
                        career.compatibility >= 80 ? 'bg-emerald-500/15 text-emerald-600' :
                        career.compatibility >= 60 ? 'bg-primary/15 text-primary' :
                        'bg-muted text-muted-foreground',
                      )}
                    >
                      {career.compatibility}%
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">{career.description}</p>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {career.industries.slice(0, 3).map(ind => (
                      <span
                        key={ind}
                        className="text-[10px] bg-muted text-muted-foreground rounded px-1.5 py-0.5 flex items-center gap-0.5"
                      >
                        <Building2 className="w-2.5 h-2.5 shrink-0" />
                        {ind}
                      </span>
                    ))}
                  </div>
                  <div className="mt-2 h-1.5 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${career.compatibility}%` }}
                      transition={{ duration: 0.5, delay: i * 0.05 }}
                      className="h-full rounded-full bg-primary"
                    />
                  </div>
                </motion.div>
              ))}

              {/* Pro gate for more careers */}
              {!isPremium && (
                <div className="relative">
                  <div className="blur-sm pointer-events-none">
                    {riasecResult.compatibleRoles.slice(5, 8).map(career => (
                      <div key={career.role} className="p-3.5 rounded-xl border bg-card mt-3">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-semibold">{career.role}</span>
                          <span className="text-xs">{career.compatibility}%</span>
                        </div>
                        <p className="text-xs text-muted-foreground">{career.description}</p>
                      </div>
                    ))}
                  </div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/70 rounded-xl">
                    <Lock className="w-5 h-5 text-primary mb-2" />
                    <p className="text-sm font-semibold">+7 carreras en plan Premium</p>
                    <p className="text-xs text-muted-foreground mt-0.5">Desbloquea el análisis completo</p>
                  </div>
                </div>
              )}
            </div>
          </Card>

          {/* Industries */}
          <Card className="p-5">
            <h3 className="font-bold text-base mb-3 flex items-center gap-2">
              <Building2 className="h-4 w-4 text-primary" />
              Industrias donde más brillarías
            </h3>
            <div className="flex flex-wrap gap-2">
              {riasecResult.industries.map(ind => (
                <Badge key={ind} variant="outline" className="text-sm py-1 px-3">
                  {ind}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      )}

      {/* ── TAB: Insights ────────────────────────────────────────────── */}
      {activeTab === 'insights' && (
        <div className="space-y-4">
          {/* Work environment */}
          <Card className="p-5">
            <h3 className="font-bold text-base mb-3 flex items-center gap-2">
              <Building2 className="h-4 w-4 text-primary" />
              Tu entorno de trabajo ideal
            </h3>
            <ul className="space-y-2">
              {riasecResult.workEnvironment.map((env, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="w-5 h-5 rounded-full bg-primary/15 text-primary text-xs flex items-center justify-center font-bold shrink-0">
                    {i + 1}
                  </span>
                  {env}
                </li>
              ))}
            </ul>
          </Card>

          {/* Pro locked: detailed insight */}
          {!isPremium ? (
            <Card className="p-5 border-primary/30 bg-primary/5 relative overflow-hidden">
              <div className="blur-[3px] pointer-events-none space-y-3">
                <h3 className="font-bold text-base">Análisis de estilo de trabajo</h3>
                <p className="text-sm text-muted-foreground">
                  Tu perfil {riasecResult.hollandCode} sugiere que trabajas mejor cuando...
                  [contenido bloqueado]
                </p>
                <h3 className="font-bold text-base mt-4">Áreas de crecimiento recomendadas</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  {[1, 2, 3].map(n => <li key={n}>• Área de desarrollo {n}</li>)}
                </ul>
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/75 rounded-xl">
                <Lock className="w-6 h-6 text-primary mb-2" />
                <p className="font-bold text-base">Insights avanzados — Premium</p>
                <p className="text-xs text-muted-foreground mt-1 text-center max-w-[240px]">
                  Análisis de estilo de trabajo, áreas de crecimiento y plan de acción personalizado
                </p>
              </div>
            </Card>
          ) : (
            <Card className="p-5">
              <h3 className="font-bold text-base mb-3">Análisis premium de tu perfil</h3>
              <p className="text-sm text-muted-foreground">
                Tu perfil <strong>{riasecResult.hollandCode}</strong> es particularmente fuerte en roles que combinan{' '}
                {riasecResult.topTypes.slice(0, 2).map(t => RIASEC_TYPE_INFO[t.type].name).join(' y ')}.
              </p>
            </Card>
          )}

          {/* Values */}
          {values.length > 0 && (
            <Card className="p-5">
              <h3 className="font-bold text-base mb-3">Tus valores declarados</h3>
              <div className="flex flex-wrap gap-2">
                {values.map(v => (
                  <Badge key={v} variant="secondary">{v}</Badge>
                ))}
              </div>
            </Card>
          )}
        </div>
      )}

      {/* ── Next Steps ───────────────────────────────────────────────── */}
      <Card className="p-5 bg-primary/5 border-primary/20">
        <h3 className="font-bold text-base mb-3 flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-primary" />
          Tus próximos pasos
        </h3>
        <ul className="space-y-2 mb-5">
          <li className="flex items-start gap-2.5 text-sm">
            <span className="w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-bold shrink-0">1</span>
            <span>
              Crea tu CV optimizado para{' '}
              <strong>{riasecResult.compatibleRoles[0]?.role}</strong>
            </span>
          </li>
          <li className="flex items-start gap-2.5 text-sm">
            <span className="w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-bold shrink-0">2</span>
            <span>Practica entrevistas para roles compatibles con tu código <strong>{riasecResult.hollandCode}</strong></span>
          </li>
          <li className="flex items-start gap-2.5 text-sm">
            <span className="w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-bold shrink-0">3</span>
            <span>Explora las industrias que mejor encajan: <strong>{riasecResult.industries[0]}</strong> y <strong>{riasecResult.industries[1]}</strong></span>
          </li>
        </ul>

        <Button size="lg" className="w-full gradient-orange text-white" onClick={onComplete}>
          Ir a mi dashboard
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </Card>
    </motion.div>
  );
};

function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(' ');
}
