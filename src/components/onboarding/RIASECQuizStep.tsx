import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Sparkles, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { RIASEC_QUESTIONS, getShuffledQuestions, RIASECQuestion } from '@/lib/riasecQuestions';
import { AnswerValue } from '@/lib/riasecScoring';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';
import { track } from '@/lib/analytics';

interface RIASECQuizStepProps {
  onComplete: (answers: Record<string, AnswerValue>) => void;
  initialAnswers?: Record<string, AnswerValue>;
}

const SCALE_OPTIONS: { value: AnswerValue; label: string; shortLabel: string; bg: string; activeBg: string; dot: string }[] = [
  { value: 0, label: 'No es para mí',  shortLabel: '1', bg: 'bg-muted/50 border-border', activeBg: 'bg-red-500/15 border-red-500 ring-red-500/30',   dot: 'bg-red-500' },
  { value: 1, label: 'Lo evito',        shortLabel: '2', bg: 'bg-muted/50 border-border', activeBg: 'bg-orange-500/15 border-orange-500 ring-orange-500/30', dot: 'bg-orange-500' },
  { value: 2, label: 'Me da igual',     shortLabel: '3', bg: 'bg-muted/50 border-border', activeBg: 'bg-yellow-500/15 border-yellow-500 ring-yellow-500/30', dot: 'bg-yellow-500' },
  { value: 3, label: 'Me gusta',        shortLabel: '4', bg: 'bg-muted/50 border-border', activeBg: 'bg-emerald-500/15 border-emerald-500 ring-emerald-500/30', dot: 'bg-emerald-500' },
  { value: 4, label: 'Me encanta',      shortLabel: '5', bg: 'bg-muted/50 border-border', activeBg: 'bg-primary/15 border-primary ring-primary/30', dot: 'bg-primary' },
];

const MILESTONE_MESSAGES = [
  { at: 0.25, text: 'Cada respuesta afina tu perfil — sigues bien.' },
  { at: 0.50, text: 'Mitad del camino. Tu perfil está tomando forma.' },
  { at: 0.75, text: 'Ya casi. Las últimas preguntas son las más reveladoras.' },
];

export function RIASECQuizStep({ onComplete, initialAnswers = {} }: RIASECQuizStepProps) {
  const [questions] = useState<RIASECQuestion[]>(() => getShuffledQuestions());
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, AnswerValue>>(initialAnswers);
  const [direction, setDirection] = useState(0);
  const [shownMilestones, setShownMilestones] = useState<Set<number>>(new Set());
  const [milestoneVisible, setMilestoneVisible] = useState(false);
  const [milestoneText, setMilestoneText] = useState('');

  useEffect(() => {
    track('diagnostic_started');
  }, []);

  const currentQuestion = questions[currentIndex] ?? questions[0];
  const answeredCount = Object.keys(answers).length;
  const progress = (answeredCount / questions.length) * 100;
  const isComplete = answeredCount === questions.length;

  // Check milestones
  useEffect(() => {
    const ratio = answeredCount / questions.length;
    for (const milestone of MILESTONE_MESSAGES) {
      if (ratio >= milestone.at && !shownMilestones.has(milestone.at)) {
        setShownMilestones(prev => new Set([...prev, milestone.at]));
        setMilestoneText(milestone.text);
        setMilestoneVisible(true);
        const t = setTimeout(() => setMilestoneVisible(false), 2500);
        return () => clearTimeout(t);
      }
    }
  }, [answeredCount, questions.length, shownMilestones]);

  const findFirstUnanswered = useCallback((): number => {
    for (let i = 0; i < questions.length; i++) {
      if (answers[questions[i].id] === undefined) return i;
    }
    return -1;
  }, [questions, answers]);

  const goTo = useCallback((idx: number) => {
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
  }, [currentIndex]);

  const handleAnswer = useCallback((value: AnswerValue) => {
    setAnswers(prev => ({ ...prev, [currentQuestion.id]: value }));
    setTimeout(() => {
      if (currentIndex < questions.length - 1) {
        setDirection(1);
        setCurrentIndex(prev => prev + 1);
      }
    }, 180);
  }, [currentQuestion.id, currentIndex, questions.length]);

  const handleTryComplete = useCallback(() => {
    if (isComplete) {
      track('diagnostic_completed');
      onComplete(answers);
    } else {
      const missing = questions.length - answeredCount;
      toast.error(`Faltan ${missing} preguntas`, {
        description: 'Respóndelas todas para ver tu perfil completo',
      });
      const firstUnanswered = findFirstUnanswered();
      if (firstUnanswered !== -1) goTo(firstUnanswered);
    }
  }, [isComplete, answers, questions.length, answeredCount, findFirstUnanswered, goTo, onComplete]);

  const slideVariants = {
    enter: (d: number) => ({ x: d > 0 ? 280 : -280, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d < 0 ? 280 : -280, opacity: 0 }),
  };

  const currentAnswer = answers[currentQuestion.id];
  const hasAnswered = currentAnswer !== undefined;

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="text-center space-y-1">
        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <Brain className="w-4 h-4 text-primary" />
          <span>Diagnóstico vocacional · {questions.length} preguntas</span>
        </div>
        <h2 className="text-xl font-bold">¿Cuánto disfrutarías esta actividad?</h2>
      </div>

      {/* Progress row */}
      <div className="space-y-1.5">
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>{currentIndex + 1} / {questions.length}</span>
          <span>{Math.round(progress)}% completado</span>
        </div>
        <Progress value={progress} className="h-1.5" />
      </div>

      {/* Milestone toast */}
      <AnimatePresence>
        {milestoneVisible && (
          <motion.div
            key="milestone"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="flex items-center gap-2 text-sm text-primary bg-primary/8 border border-primary/20 rounded-lg px-4 py-2"
          >
            <Sparkles className="w-4 h-4 shrink-0" />
            <span>{milestoneText}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Question card */}
      <div className="relative min-h-[300px] flex items-center justify-center">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentQuestion.id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="w-full"
          >
            <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-sm">
              {/* Question number badge */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-mono text-muted-foreground bg-muted rounded-full px-2 py-0.5">
                  #{currentIndex + 1}
                </span>
                {hasAnswered && (
                  <span className="text-xs text-emerald-600 font-medium">✓ respondida</span>
                )}
              </div>

              <p className="text-lg sm:text-xl font-semibold text-center leading-snug mb-2">
                {currentQuestion.text}
              </p>

              {currentQuestion.hint && (
                <p className="text-sm text-center text-muted-foreground mb-6 italic">
                  {currentQuestion.hint}
                </p>
              )}
              {!currentQuestion.hint && <div className="mb-6" />}

              {/* 5-point scale */}
              <div className="flex gap-2 justify-center flex-wrap sm:flex-nowrap">
                {SCALE_OPTIONS.map(opt => {
                  const isSelected = currentAnswer === opt.value;
                  return (
                    <button
                      key={opt.value}
                      onClick={() => handleAnswer(opt.value)}
                      className={cn(
                        'flex flex-col items-center gap-1.5 px-3 py-3 rounded-xl border-2 transition-all duration-150',
                        'min-w-[56px] flex-1 max-w-[80px]',
                        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
                        isSelected
                          ? `${opt.activeBg} ring-2 ring-offset-1 ring-offset-background scale-105 shadow-md`
                          : `${opt.bg} hover:border-muted-foreground/50 hover:bg-muted`,
                      )}
                      aria-pressed={isSelected}
                      aria-label={opt.label}
                    >
                      <span className={cn('w-2.5 h-2.5 rounded-full', isSelected ? opt.dot : 'bg-muted-foreground/30')} />
                      <span className="text-[11px] sm:text-xs font-medium text-center leading-tight text-muted-foreground">
                        {opt.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => goTo(currentIndex - 1)}
          disabled={currentIndex === 0}
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Anterior
        </Button>

        {/* Dot navigation (collapsed for many questions) */}
        <div className="flex gap-1 max-w-[180px] overflow-hidden">
          {questions.slice(Math.max(0, currentIndex - 4), currentIndex + 5).map((q, relIdx) => {
            const absIdx = Math.max(0, currentIndex - 4) + relIdx;
            return (
              <button
                key={q.id}
                onClick={() => goTo(absIdx)}
                className={cn(
                  'rounded-full transition-all duration-200 shrink-0',
                  absIdx === currentIndex
                    ? 'w-5 h-2 bg-primary'
                    : answers[q.id] !== undefined
                    ? 'w-2 h-2 bg-primary/50'
                    : 'w-2 h-2 bg-muted-foreground/30',
                )}
                aria-label={`Ir a pregunta ${absIdx + 1}`}
              />
            );
          })}
        </div>

        {currentIndex === questions.length - 1 ? (
          <Button
            onClick={handleTryComplete}
            size="sm"
            className={!isComplete ? 'opacity-80' : ''}
          >
            {isComplete ? 'Ver mi perfil →' : `Ver perfil (${answeredCount}/${questions.length})`}
          </Button>
        ) : (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => goTo(currentIndex + 1)}
            disabled={!hasAnswered}
          >
            Siguiente
            <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        )}
      </div>

      {/* Quick stats */}
      <div className="flex justify-center gap-6 text-xs text-muted-foreground pt-1">
        <span className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-primary inline-block" />
          {Object.values(answers).filter(v => v >= 3).length} que disfruto
        </span>
        <span className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-muted-foreground/40 inline-block" />
          {questions.length - answeredCount} sin responder
        </span>
      </div>
    </div>
  );
}
