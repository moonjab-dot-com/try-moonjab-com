// Holland RIASEC Vocational Assessment — 50 scenario-based questions
// 5-point scale: 0=No es para mí, 1=Lo evito, 2=Me da igual, 3=Me gusta, 4=Me encanta

export type RIASECType = 'R' | 'I' | 'A' | 'S' | 'E' | 'C';

export const MAX_ANSWER_VALUE = 4;

export interface RIASECQuestion {
  id: string;
  text: string;
  type: RIASECType;
  // optional subtitle/context shown below the question
  hint?: string;
}

export const RIASEC_TYPE_INFO: Record<RIASECType, {
  name: string;
  description: string;
  icon: string;
  color: string;
  traits: string[];
  emoji: string;
}> = {
  R: {
    name: 'Realista',
    description: 'Práctico, concreto, trabaja con herramientas y sistemas físicos',
    icon: 'wrench',
    color: 'text-orange-500',
    traits: ['Práctico', 'Concreto', 'Mecánico', 'Independiente'],
    emoji: '🔧',
  },
  I: {
    name: 'Investigador',
    description: 'Analítico, curioso, resuelve problemas complejos con rigor',
    icon: 'microscope',
    color: 'text-blue-500',
    traits: ['Analítico', 'Curioso', 'Metódico', 'Autónomo'],
    emoji: '🔬',
  },
  A: {
    name: 'Artístico',
    description: 'Creativo, expresivo, valora la originalidad y la libertad',
    icon: 'palette',
    color: 'text-purple-500',
    traits: ['Creativo', 'Expresivo', 'Innovador', 'Sensible'],
    emoji: '🎨',
  },
  S: {
    name: 'Social',
    description: 'Empático, comunicativo, disfruta ayudar y trabajar con personas',
    icon: 'users',
    color: 'text-green-500',
    traits: ['Empático', 'Colaborativo', 'Comunicativo', 'Solidario'],
    emoji: '🤝',
  },
  E: {
    name: 'Emprendedor',
    description: 'Líder, persuasivo, orientado a metas y resultados',
    icon: 'briefcase',
    color: 'text-yellow-500',
    traits: ['Líder', 'Persuasivo', 'Ambicioso', 'Decisivo'],
    emoji: '🚀',
  },
  C: {
    name: 'Convencional',
    description: 'Organizado, preciso, trabaja bien con datos y estructuras',
    icon: 'bar-chart-3',
    color: 'text-cyan-500',
    traits: ['Organizado', 'Preciso', 'Estructurado', 'Detallista'],
    emoji: '📊',
  },
};

export const RIASEC_QUESTIONS: RIASECQuestion[] = [
  // ── Realistic (R) — 8 questions ──────────────────────────────────────────
  {
    id: 'R1',
    text: 'Construir, reparar o armar algo con mis propias manos',
    hint: 'Muebles, aparatos, código físico, hardware…',
    type: 'R',
  },
  {
    id: 'R2',
    text: 'Trabajar directamente con herramientas, maquinaria o equipos técnicos',
    type: 'R',
  },
  {
    id: 'R3',
    text: 'Ver al final del día un resultado físico y concreto de lo que hice',
    hint: 'Algo tangible, no solo un informe o una reunión',
    type: 'R',
  },
  {
    id: 'R4',
    text: 'Hacer trabajo en exteriores o en entornos físicos variados',
    type: 'R',
  },
  {
    id: 'R5',
    text: 'Descubrir cómo funcionan internamente los sistemas, aparatos o máquinas',
    hint: 'Desarmar algo para entenderlo y volver a armarlo',
    type: 'R',
  },
  {
    id: 'R6',
    text: 'Instalar, calibrar o configurar tecnología, redes o dispositivos',
    type: 'R',
  },
  {
    id: 'R7',
    text: 'Aprender habilidades prácticas haciéndolas, no leyendo sobre ellas',
    hint: 'Prueba y error > teoría',
    type: 'R',
  },
  {
    id: 'R8',
    text: 'Un trabajo donde me muevo físicamente en lugar de estar siempre sentado',
    type: 'R',
  },

  // ── Investigative (I) — 9 questions ──────────────────────────────────────
  {
    id: 'I1',
    text: 'Analizar datos o información compleja para encontrar patrones que otros no ven',
    type: 'I',
  },
  {
    id: 'I2',
    text: 'Investigar a fondo un problema hasta encontrar la causa raíz real',
    hint: 'No las causas superficiales — la causa de las causas',
    type: 'I',
  },
  {
    id: 'I3',
    text: 'Leer sobre ciencia, tecnología, filosofía o investigación en mi tiempo libre',
    type: 'I',
  },
  {
    id: 'I4',
    text: 'Resolver acertijos, rompecabezas o problemas lógicos y matemáticos',
    type: 'I',
  },
  {
    id: 'I5',
    text: 'Poner a prueba hipótesis o suposiciones para ver si realmente se sostienen',
    hint: 'Cuestionar lo que se da por hecho',
    type: 'I',
  },
  {
    id: 'I6',
    text: 'Preguntar constantemente "¿por qué funciona así?" sobre casi cualquier cosa',
    type: 'I',
  },
  {
    id: 'I7',
    text: 'Trabajar en proyectos de investigación que no tienen una respuesta inmediata',
    type: 'I',
  },
  {
    id: 'I8',
    text: 'Detectar errores, inconsistencias o vacíos en información o argumentos',
    hint: 'El placer de encontrar lo que falla',
    type: 'I',
  },
  {
    id: 'I9',
    text: 'Profundizar en temas completamente nuevos aunque nadie me lo pida',
    type: 'I',
  },

  // ── Artistic (A) — 9 questions ────────────────────────────────────────────
  {
    id: 'A1',
    text: 'Crear contenido visual: diseños, ilustraciones, fotografías o video',
    type: 'A',
  },
  {
    id: 'A2',
    text: 'Escribir de forma creativa — historias, artículos, guiones o contenido',
    type: 'A',
  },
  {
    id: 'A3',
    text: 'Expresarme a través del arte, música, actuación, danza o diseño',
    type: 'A',
  },
  {
    id: 'A4',
    text: 'Proponer soluciones originales e inesperadas que rompan lo convencional',
    hint: 'Pensar fuera del molde no es la excepción — es el hábito',
    type: 'A',
  },
  {
    id: 'A5',
    text: 'Trabajar en proyectos donde tengo libertad creativa real',
    hint: 'Sin que alguien defina exactamente cómo debe verse el resultado',
    type: 'A',
  },
  {
    id: 'A6',
    text: 'Diseñar experiencias, espacios o interfaces que impacten estética y emocionalmente',
    type: 'A',
  },
  {
    id: 'A7',
    text: 'Mezclar ideas de campos distintos para crear algo completamente nuevo',
    type: 'A',
  },
  {
    id: 'A8',
    text: 'Apreciar y analizar obras de arte, diseño, arquitectura o música',
    hint: 'No solo como hobby — como forma de ver el mundo',
    type: 'A',
  },
  {
    id: 'A9',
    text: 'Trabajar en entornos donde la innovación y la originalidad son valores reales',
    type: 'A',
  },

  // ── Social (S) — 9 questions ──────────────────────────────────────────────
  {
    id: 'S1',
    text: 'Ayudar a otras personas a superar problemas personales o profesionales',
    type: 'S',
  },
  {
    id: 'S2',
    text: 'Enseñar, mentorear o capacitar a alguien en algo que yo domino',
    hint: 'Ver a alguien crecer gracias a tu guía',
    type: 'S',
  },
  {
    id: 'S3',
    text: 'Trabajar en equipo donde el éxito es colectivo, no individual',
    type: 'S',
  },
  {
    id: 'S4',
    text: 'Notar cuando alguien necesita apoyo y ofrecerlo sin que me lo pidan',
    type: 'S',
  },
  {
    id: 'S5',
    text: 'Facilitar conversaciones difíciles o mediar entre personas en conflicto',
    hint: 'Ser el puente cuando nadie sabe cómo hablar con el otro',
    type: 'S',
  },
  {
    id: 'S6',
    text: 'Participar en causas sociales o proyectos con impacto real en la comunidad',
    type: 'S',
  },
  {
    id: 'S7',
    text: 'Conectar con personas de distintos orígenes y entender sus perspectivas',
    type: 'S',
  },
  {
    id: 'S8',
    text: 'Escuchar activamente y dar retroalimentación útil a quienes lo necesitan',
    type: 'S',
  },
  {
    id: 'S9',
    text: 'Crear ambientes donde las personas se sientan cómodas, valoradas y escuchadas',
    type: 'S',
  },

  // ── Enterprising (E) — 9 questions ───────────────────────────────────────
  {
    id: 'E1',
    text: 'Liderar un equipo o proyecto hacia una meta ambiciosa',
    hint: 'No solo ejecutar — definir el rumbo',
    type: 'E',
  },
  {
    id: 'E2',
    text: 'Persuadir a otros de una idea o visión en la que creo genuinamente',
    type: 'E',
  },
  {
    id: 'E3',
    text: 'Tomar decisiones importantes incluso cuando la información es incompleta',
    hint: 'Actuar con convicción, no esperar certeza perfecta',
    type: 'E',
  },
  {
    id: 'E4',
    text: 'Negociar acuerdos, alianzas o contratos entre partes distintas',
    type: 'E',
  },
  {
    id: 'E5',
    text: 'Construir algo nuevo desde cero — un proyecto, negocio o iniciativa propia',
    type: 'E',
  },
  {
    id: 'E6',
    text: 'Presentar ideas ante una audiencia y defender mis propuestas con energía',
    type: 'E',
  },
  {
    id: 'E7',
    text: 'Asumir riesgos calculados cuando el potencial de éxito lo justifica',
    type: 'E',
  },
  {
    id: 'E8',
    text: 'Competir para superar mis propios límites o los de otros',
    hint: 'La presión te activa, no te paraliza',
    type: 'E',
  },
  {
    id: 'E9',
    text: 'Conectar personas y recursos para que un plan ambicioso se materialice',
    type: 'E',
  },

  // ── Conventional (C) — 6 questions ───────────────────────────────────────
  {
    id: 'C1',
    text: 'Organizar archivos, bases de datos o sistemas de información de forma impecable',
    type: 'C',
  },
  {
    id: 'C2',
    text: 'Seguir procedimientos establecidos y garantizar que se cumplan con precisión',
    hint: 'El orden no es limitación — es la base de la escala',
    type: 'C',
  },
  {
    id: 'C3',
    text: 'Trabajar con hojas de cálculo, registros financieros o datos contables',
    type: 'C',
  },
  {
    id: 'C4',
    text: 'Revisar documentos, contratos o reportes buscando errores o inconsistencias',
    type: 'C',
  },
  {
    id: 'C5',
    text: 'Crear cronogramas, procesos o estructuras claras que otros puedan seguir',
    type: 'C',
  },
  {
    id: 'C6',
    text: 'Mantener registros actualizados y garantizar que la información sea confiable',
    type: 'C',
  },
];

// Shuffle questions for a natural flow that mixes all types
export function getShuffledQuestions(): RIASECQuestion[] {
  const shuffled = [...RIASEC_QUESTIONS];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
