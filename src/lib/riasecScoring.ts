// Holland RIASEC Scoring — 5-point scale (0–4), 50 questions
import { RIASECType, RIASEC_TYPE_INFO, RIASEC_QUESTIONS, MAX_ANSWER_VALUE } from './riasecQuestions';

export interface RIASECScores {
  R: number;
  I: number;
  A: number;
  S: number;
  E: number;
  C: number;
}

export interface CareerMatch {
  role: string;
  compatibility: number;
  description: string;
  industries: string[];
}

export interface RIASECResult {
  scores: RIASECScores;
  percentages: RIASECScores;
  hollandCode: string;
  topTypes: { type: RIASECType; score: number; percentage: number }[];
  compatibleRoles: CareerMatch[];
  interpretation: string;
  strengths: string[];
  workEnvironment: string[];
  industries: string[];
}

// Answer values: 0=No es para mí, 1=Lo evito, 2=Me da igual, 3=Me gusta, 4=Me encanta
export type AnswerValue = 0 | 1 | 2 | 3 | 4;

function getQuestionsPerType(): Record<RIASECType, number> {
  const counts: Record<RIASECType, number> = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };
  RIASEC_QUESTIONS.forEach(q => { counts[q.type]++; });
  return counts;
}

export function calculateRIASECScores(answers: Record<string, AnswerValue>): RIASECScores {
  const scores: RIASECScores = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };
  Object.entries(answers).forEach(([questionId, value]) => {
    const type = questionId.charAt(0) as RIASECType;
    if (type in scores) scores[type] += value;
  });
  return scores;
}

export function scoresToPercentages(scores: RIASECScores): RIASECScores {
  const questionsPerType = getQuestionsPerType();
  return {
    R: Math.round((scores.R / (questionsPerType.R * MAX_ANSWER_VALUE)) * 100),
    I: Math.round((scores.I / (questionsPerType.I * MAX_ANSWER_VALUE)) * 100),
    A: Math.round((scores.A / (questionsPerType.A * MAX_ANSWER_VALUE)) * 100),
    S: Math.round((scores.S / (questionsPerType.S * MAX_ANSWER_VALUE)) * 100),
    E: Math.round((scores.E / (questionsPerType.E * MAX_ANSWER_VALUE)) * 100),
    C: Math.round((scores.C / (questionsPerType.C * MAX_ANSWER_VALUE)) * 100),
  };
}

export function getHollandCode(scores: RIASECScores): string {
  return (Object.entries(scores) as [RIASECType, number][])
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([type]) => type)
    .join('');
}

// ── Role database with richer data ───────────────────────────────────────────

interface RoleEntry {
  codes: string[];
  description: string;
  industries: string[];
}

export const ROLE_RIASEC_MAP: Record<string, RoleEntry> = {
  // Tech
  'Software Engineer':        { codes: ['IRC','IRA','ICR'], description: 'Diseña y desarrolla sistemas de software', industries: ['Tecnología','Fintech','Startups'] },
  'Data Scientist':           { codes: ['IAS','IAC','IRC'], description: 'Extrae insights de datos con ML y estadística', industries: ['Tecnología','Salud','Finanzas'] },
  'Product Designer':         { codes: ['AIE','AIS','ASE'], description: 'Diseña experiencias de usuario end-to-end', industries: ['Tecnología','Diseño','UX/UI'] },
  'UX Researcher':            { codes: ['ISA','IAS','SAI'], description: 'Investiga necesidades y comportamientos de usuarios', industries: ['Tecnología','Consultoría','Agencias'] },
  'DevOps Engineer':          { codes: ['IRC','RIC','ICR'], description: 'Automatiza pipelines y gestiona infraestructura cloud', industries: ['Tecnología','Nube','Startups'] },
  'Frontend Developer':       { codes: ['IAR','AIR','ARI'], description: 'Construye interfaces interactivas y accesibles', industries: ['Tecnología','Media','E-commerce'] },
  'Backend Developer':        { codes: ['IRC','ICR','RIC'], description: 'Desarrolla APIs, servidores y lógica de negocio', industries: ['Tecnología','Fintech','SaaS'] },
  'Mobile Developer':         { codes: ['IRA','AIR','RAI'], description: 'Crea aplicaciones nativas para iOS y Android', industries: ['Tecnología','Salud','Retail'] },
  'QA Engineer':              { codes: ['CIR','ICR','RCI'], description: 'Garantiza calidad mediante testing manual y automatizado', industries: ['Tecnología','Banca','Seguros'] },
  'Machine Learning Engineer':{ codes: ['IRA','IAR','RIA'], description: 'Implementa y despliega modelos de inteligencia artificial', industries: ['Tecnología','Salud','Finanzas'] },
  'Cybersecurity Analyst':    { codes: ['IRC','ICR','CIR'], description: 'Protege sistemas e información crítica', industries: ['Gobierno','Finanzas','Telecomunicaciones'] },
  'UI Designer':              { codes: ['AIC','AIR','IAC'], description: 'Diseña interfaces visuales consistentes y atractivas', industries: ['Tecnología','Agencias','Media'] },

  // Business
  'Product Manager':          { codes: ['EIS','ESI','SEI'], description: 'Define la visión, estrategia y roadmap del producto', industries: ['Tecnología','Retail','SaaS'] },
  'Project Manager':          { codes: ['ESC','SEC','CES'], description: 'Planifica y ejecuta proyectos complejos con equipos', industries: ['Consultoría','Construcción','IT'] },
  'Business Analyst':         { codes: ['ICE','EIC','CEI'], description: 'Traduce necesidades de negocio en requerimientos claros', industries: ['Consultoría','Banca','Retail'] },
  'Marketing Manager':        { codes: ['ESA','EAS','AES'], description: 'Lidera estrategias de marketing digital y de marca', industries: ['Retail','Media','Tecnología'] },
  'Strategy Consultant':      { codes: ['EIA','IEA','AEI'], description: 'Asesora a organizaciones en decisiones estratégicas', industries: ['Consultoría','Finanzas','Gobierno'] },
  'Operations Manager':       { codes: ['ECS','CES','SEC'], description: 'Optimiza procesos y operaciones empresariales', industries: ['Logística','Manufactura','Retail'] },

  // Creative
  'Graphic Designer':         { codes: ['AIR','ARI','RAI'], description: 'Crea identidades visuales y piezas de diseño gráfico', industries: ['Publicidad','Media','Agencias'] },
  'Content Creator':          { codes: ['AES','ASE','SAE'], description: 'Produce contenido digital para múltiples plataformas', industries: ['Media','Marketing','Entretenimiento'] },
  'Copywriter':               { codes: ['AIS','ASI','SAI'], description: 'Escribe textos persuasivos para marcas y campañas', industries: ['Publicidad','Marketing','E-commerce'] },
  'Art Director':             { codes: ['AES','ASE','EAS'], description: 'Dirige la visión creativa de proyectos y campañas', industries: ['Publicidad','Entretenimiento','Moda'] },
  'Video Producer':           { codes: ['AER','ARE','EAR'], description: 'Produce y dirige contenido audiovisual de impacto', industries: ['Media','Publicidad','Entretenimiento'] },
  'Brand Manager':            { codes: ['AES','EAS','SAE'], description: 'Construye y gestiona la identidad de marca', industries: ['Retail','FMCG','Tecnología'] },

  // Social/People
  'Customer Success Manager': { codes: ['SEC','ESC','CSE'], description: 'Asegura el éxito y retención de clientes', industries: ['SaaS','Tecnología','Consultoría'] },
  'HR Manager':               { codes: ['SEC','ESC','CSE'], description: 'Gestiona talento, cultura y desarrollo organizacional', industries: ['Todas las industrias'] },
  'Training Specialist':      { codes: ['SAI','SIA','ASI'], description: 'Diseña y facilita programas de aprendizaje y desarrollo', industries: ['Educación','Corporativo','Consultoría'] },
  'Recruiter':                { codes: ['ESC','SEC','CES'], description: 'Identifica y atrae talento estratégico', industries: ['RRHH','Tecnología','Consultoría'] },
  'Community Manager':        { codes: ['SAE','ASE','ESA'], description: 'Construye y gestiona comunidades digitales', industries: ['Media','Tecnología','ONGs'] },

  // Research
  'Research Scientist':       { codes: ['IAR','IRA','AIR'], description: 'Realiza investigación científica avanzada y publica hallazgos', industries: ['Academia','Salud','Tecnología'] },
  'Data Analyst':             { codes: ['ICE','IEC','CIE'], description: 'Analiza datos para generar insights de negocio', industries: ['Tecnología','Retail','Finanzas'] },
  'Market Researcher':        { codes: ['IEC','ICE','EIC'], description: 'Estudia mercados, consumidores y tendencias', industries: ['Consultoría','Marketing','FMCG'] },

  // Finance
  'Financial Analyst':        { codes: ['CIE','ICE','ECI'], description: 'Analiza estados financieros y evalúa inversiones', industries: ['Banca','Finanzas','Consultoría'] },
  'Startup Founder':          { codes: ['EIA','EAI','IEA'], description: 'Crea, lidera y escala startups desde cero', industries: ['Tecnología','Startups','Innovación'] },
  'Growth Hacker':            { codes: ['EIA','IEA','AEI'], description: 'Diseña experimentos para acelerar el crecimiento', industries: ['Startups','Tecnología','E-commerce'] },
};

function calculateCompatibility(userCode: string, roleCodes: string[]): number {
  let max = 0;
  for (const roleCode of roleCodes) {
    let score = 0;
    const u = userCode.split('');
    const r = roleCode.split('');
    if (u[0] === r[0]) score += 50; else if (u.includes(r[0])) score += 30;
    if (u[1] === r[1]) score += 30; else if (u.includes(r[1])) score += 20;
    if (u[2] === r[2]) score += 20; else if (u.includes(r[2])) score += 10;
    max = Math.max(max, score);
  }
  return max;
}

export function getCompatibleRoles(hollandCode: string, limit = 10): CareerMatch[] {
  return Object.entries(ROLE_RIASEC_MAP)
    .map(([role, entry]) => ({
      role,
      compatibility: calculateCompatibility(hollandCode, entry.codes),
      description: entry.description,
      industries: entry.industries,
    }))
    .filter(r => r.compatibility > 0)
    .sort((a, b) => b.compatibility - a.compatibility)
    .slice(0, limit);
}

// ── Rich interpretation helpers ───────────────────────────────────────────────

const STRENGTHS_BY_TYPE: Record<RIASECType, string[]> = {
  R: ['Ejecutas con precisión técnica', 'Resuelves problemas concretos', 'Eres autosuficiente y práctico', 'Tienes alta tolerancia al trabajo físico'],
  I: ['Piensas de forma sistemática y rigurosa', 'Investigas antes de actuar', 'Detectas patrones donde otros ven ruido', 'Aprendes continuamente'],
  A: ['Generas ideas genuinamente originales', 'Comunicas con impacto visual y narrativo', 'Piensas fuera de los marcos establecidos', 'Tienes alta sensibilidad estética'],
  S: ['Construyes relaciones de confianza', 'Escuchas activamente y sin juicio', 'Motivas a otros de forma natural', 'Medias conflictos con empatía'],
  E: ['Tomas decisiones con convicción', 'Inspiras y movilizas equipos', 'Identifies oportunidades que otros ignoran', 'Negocias resultados favorables'],
  C: ['Ejecutas con máxima precisión', 'Creas sistemas que otros pueden escalar', 'Mantienes altos estándares de calidad', 'Gestionas información con confiabilidad'],
};

const WORK_ENV_BY_TYPE: Record<RIASECType, string[]> = {
  R: ['Entornos prácticos con herramientas reales', 'Trabajo en campo o laboratorio', 'Resultados medibles y tangibles', 'Autonomía técnica'],
  I: ['Libertad para investigar sin interrupciones', 'Acceso a datos y recursos analíticos', 'Colegas intelectualmente estimulantes', 'Proyectos complejos y abiertos'],
  A: ['Cultura que valora la originalidad', 'Libertad creativa real', 'Espacios de trabajo estéticos e inspiradores', 'Sin micromanagement'],
  S: ['Equipos colaborativos y horizontales', 'Misión con impacto humano', 'Comunicación abierta y frecuente', 'Cultura de apoyo mutuo'],
  E: ['Alta autonomía para tomar decisiones', 'Métricas claras de éxito', 'Cultura de alto rendimiento', 'Recursos para ejecutar ideas propias'],
  C: ['Procesos claros y bien documentados', 'Expectativas definidas desde el inicio', 'Herramientas y sistemas de orden', 'Cultura de excelencia operativa'],
};

const INDUSTRIES_BY_CODE: Record<string, string[]> = {
  IR: ['Ingeniería', 'Manufactura', 'Tecnología', 'Ciencia'],
  IA: ['Investigación', 'Academia', 'Tecnología', 'Diseño de sistemas'],
  IS: ['Salud', 'Psicología', 'Educación', 'Ciencias sociales'],
  IE: ['Consultoría', 'Fintech', 'Startups', 'Innovación'],
  IC: ['Finanzas', 'Auditoría', 'Ciencias de datos', 'IT'],
  AI: ['UX/Diseño', 'Medios', 'Publicidad', 'Gaming'],
  AS: ['Educación artística', 'ONGs', 'Comunicación', 'Cultura'],
  AE: ['Publicidad', 'Entretenimiento', 'Moda', 'Marketing'],
  AC: ['Diseño editorial', 'Arquitectura', 'Diseño de sistemas'],
  SI: ['Psicología', 'Salud mental', 'Educación', 'Investigación social'],
  SA: ['Educación', 'Trabajo social', 'ONGs', 'Comunicación'],
  SE: ['RRHH', 'Ventas', 'Consultoría', 'Gestión'],
  SC: ['Administración', 'Salud', 'Servicios sociales', 'Educación'],
  EI: ['Consultoría estratégica', 'Startups', 'Capital de riesgo'],
  EA: ['Marketing', 'Media', 'Publicidad', 'Entretenimiento'],
  ES: ['Gestión', 'Ventas', 'RRHH', 'Liderazgo'],
  EC: ['Finanzas', 'Operaciones', 'Banca', 'Gobierno'],
  CI: ['Tecnología de datos', 'Finanzas', 'Análisis', 'Auditoría'],
  CA: ['Diseño de sistemas', 'Arquitectura', 'Diseño editorial'],
  CS: ['Administración', 'Recursos Humanos', 'Servicios'],
  CE: ['Banca', 'Contabilidad', 'Gestión operativa'],
};

function getIndustriesForCode(hollandCode: string): string[] {
  const pair = hollandCode.slice(0, 2);
  return INDUSTRIES_BY_CODE[pair] || ['Tecnología', 'Consultoría', 'Emprendimiento'];
}

export function getStrengths(hollandCode: string): string[] {
  const types = hollandCode.split('') as RIASECType[];
  const result: string[] = [];
  types.slice(0, 3).forEach(t => {
    const s = STRENGTHS_BY_TYPE[t];
    if (s) result.push(s[0], s[1]);
  });
  return [...new Set(result)].slice(0, 5);
}

export function getWorkEnvironment(hollandCode: string): string[] {
  const types = hollandCode.split('') as RIASECType[];
  const result: string[] = [];
  types.slice(0, 2).forEach(t => {
    const w = WORK_ENV_BY_TYPE[t];
    if (w) result.push(...w.slice(0, 2));
  });
  return [...new Set(result)].slice(0, 4);
}

export function getHollandCodeInterpretation(hollandCode: string): string {
  const types = hollandCode.split('') as RIASECType[];
  const [p, s, t] = types.map(tp => RIASEC_TYPE_INFO[tp]);
  if (!p || !s || !t) return '';
  return (
    `Tu perfil combina tres dimensiones poderosas: eres principalmente **${p.name}** — ${p.description.toLowerCase()}. ` +
    `Esto se complementa con un perfil **${s.name}** (${s.description.toLowerCase()}), ` +
    `y rasgos **${t.name}** (${t.description.toLowerCase()}). ` +
    `Esta combinación única te hace especialmente valioso en roles que integren estas tres dimensiones a la vez.`
  );
}

// ── Main analyzer ─────────────────────────────────────────────────────────────

export function analyzeRIASECResults(answers: Record<string, AnswerValue>): RIASECResult {
  const scores = calculateRIASECScores(answers);
  const percentages = scoresToPercentages(scores);
  const hollandCode = getHollandCode(scores);

  const topTypes = (Object.entries(scores) as [RIASECType, number][])
    .sort((a, b) => b[1] - a[1])
    .map(([type, score]) => ({ type, score, percentage: percentages[type] }));

  return {
    scores,
    percentages,
    hollandCode,
    topTypes,
    compatibleRoles: getCompatibleRoles(hollandCode, 12),
    interpretation: getHollandCodeInterpretation(hollandCode),
    strengths: getStrengths(hollandCode),
    workEnvironment: getWorkEnvironment(hollandCode),
    industries: getIndustriesForCode(hollandCode),
  };
}
