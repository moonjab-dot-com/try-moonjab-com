export type QuestionCategory = 'conductual' | 'tecnica' | 'situacional' | 'motivacional';
export type Difficulty = 'básica' | 'intermedia' | 'avanzada';

export interface InterviewQuestion {
  question: string;
  category: QuestionCategory;
  difficulty: Difficulty;
  hint: string;
}

export interface InterviewRole {
  slug: string;
  title: string;
  emoji: string;
  category: string;
  description: string;
  metaTitle: string;
  metaDesc: string;
  keywords: string;
  questions: InterviewQuestion[];
  tips: { title: string; body: string }[];
  commonMistakes: string[];
  relatedRoles: string[];
  faqs: { q: string; a: string }[];
}

export const INTERVIEW_ROLES: Record<string, InterviewRole> = {
  'desarrollador-web': {
    slug: 'desarrollador-web',
    title: 'Desarrollador Web',
    emoji: '💻',
    category: 'Tecnología',
    description: 'Preguntas de entrevista para posiciones de desarrollo web front-end, back-end y full-stack.',
    metaTitle: 'Preguntas de Entrevista Desarrollador Web 2025 — Con Respuestas',
    metaDesc: 'Las 30 preguntas más frecuentes en entrevistas para desarrolladores web en LATAM. Con consejos de respuesta y guía de preparación para 2025.',
    keywords: 'preguntas entrevista desarrollador web, interview web developer LATAM, preguntas JavaScript entrevista, preguntas React entrevista, entrevista programador web',
    questions: [
      { question: '¿Cuál es la diferencia entre == y === en JavaScript?', category: 'tecnica', difficulty: 'básica', hint: 'Explica coerción de tipos. == convierte tipos antes de comparar; === compara valor y tipo sin conversión.' },
      { question: 'Explica qué es el DOM y cómo se manipula con JavaScript.', category: 'tecnica', difficulty: 'básica', hint: 'Document Object Model — árbol de nodos HTML. Usa métodos como getElementById, querySelector, addEventListener.' },
      { question: '¿Qué es el modelo de caja (box model) en CSS?', category: 'tecnica', difficulty: 'básica', hint: 'Content, padding, border, margin. Diferencia entre box-sizing: content-box y border-box.' },
      { question: '¿Cómo funciona el event loop en JavaScript?', category: 'tecnica', difficulty: 'intermedia', hint: 'Call stack, callback queue, microtask queue. Cómo JavaScript es single-threaded pero maneja asincronía.' },
      { question: '¿Qué son los Promises y async/await?', category: 'tecnica', difficulty: 'intermedia', hint: 'Promesas para manejar asincronía. async/await es azúcar sintáctica sobre Promises para código más legible.' },
      { question: '¿Cuál es la diferencia entre var, let y const?', category: 'tecnica', difficulty: 'básica', hint: 'Scope: var (función), let/const (bloque). Hoisting. Const no se puede reasignar (pero sí mutar si es objeto).' },
      { question: '¿Qué es React y por qué se usa?', category: 'tecnica', difficulty: 'básica', hint: 'Librería para UI con componentes reutilizables, Virtual DOM para performance, ecosistema enorme.' },
      { question: 'Explica el ciclo de vida de un componente en React.', category: 'tecnica', difficulty: 'intermedia', hint: 'Con hooks: useEffect cubre mounting ([] dep), updating (con dep), unmounting (return cleanup).' },
      { question: '¿Qué es REST y cómo diferencia GET, POST, PUT, DELETE?', category: 'tecnica', difficulty: 'básica', hint: 'Arquitectura para APIs HTTP. Verbos con semántica específica. Stateless, recursos identificados por URL.' },
      { question: '¿Cómo optimizarías el rendimiento de una página web lenta?', category: 'tecnica', difficulty: 'avanzada', hint: 'Lazy loading, code splitting, compression, CDN, image optimization, caching, debounce, memoization.' },
      { question: 'Cuéntame de un proyecto técnico del que estés orgulloso.', category: 'conductual', difficulty: 'básica', hint: 'Usa estructura STAR (Situación, Tarea, Acción, Resultado). Enfócate en tu contribución específica y el impacto.' },
      { question: '¿Cómo manejas los bugs difíciles que no puedes resolver rápido?', category: 'conductual', difficulty: 'básica', hint: 'Muestra proceso: documentar, aislar, buscar en docs/Stack Overflow, preguntar a colegas, no bloquearse solo.' },
      { question: 'Describe una vez que tuviste que aprender algo nuevo muy rápido.', category: 'conductual', difficulty: 'intermedia', hint: 'Muestra capacidad de aprendizaje autónomo. Recursos usados, tiempo de rampa, resultado final.' },
      { question: '¿Cómo trabajas en un equipo con diferentes niveles de experiencia?', category: 'conductual', difficulty: 'básica', hint: 'Empatía, documentación, code reviews constructivos, mentoría. No juzgar sino enseñar.' },
      { question: '¿Por qué quieres trabajar en esta empresa específicamente?', category: 'motivacional', difficulty: 'básica', hint: 'Investiga la empresa: producto, tecnología, cultura, retos técnicos. Conecta con tus intereses profesionales.' },
      { question: '¿Dónde te ves en 3 años como desarrollador?', category: 'motivacional', difficulty: 'básica', hint: 'Metas concretas de crecimiento técnico. Muestra ambición equilibrada con realismo y compromiso con la empresa.' },
      { question: 'Si tuvieras que construir una feature urgente con poco tiempo, ¿cómo lo abordarías?', category: 'situacional', difficulty: 'intermedia', hint: 'Priorización, MVP vs solución perfecta, comunicación de trade-offs con el equipo, deuda técnica documentada.' },
      { question: 'Un cliente reporta un bug crítico en producción. ¿Qué haces?', category: 'situacional', difficulty: 'intermedia', hint: 'Reproducir el bug, evaluar impacto, comunicar al equipo, hotfix vs rollback, post-mortem.' },
      { question: '¿Qué es el CORS y cómo lo manejas?', category: 'tecnica', difficulty: 'intermedia', hint: 'Cross-Origin Resource Sharing — política de seguridad del navegador. Configuración en back-end con headers apropiados.' },
      { question: '¿Cuál es tu proceso de code review y qué buscas en el código de otros?', category: 'conductual', difficulty: 'avanzada', hint: 'Legibilidad, correctitud, performance, seguridad, tests. Tono constructivo, no personal. Preguntar antes que asumir.' },
    ],
    tips: [
      { title: 'Practica coding en voz alta', body: 'En entrevistas técnicas, narrar tu proceso de pensamiento mientras codeas es tan importante como la solución. Los entrevistadores evalúan cómo piensas, no solo si llegas al resultado correcto.' },
      { title: 'Prepara 3 proyectos que puedas explicar en detalle', body: 'Elige proyectos donde hayas tenido responsabilidad real. Debes poder explicar el problema, tu decisión técnica, los trade-offs y el resultado. Tener el código en GitHub para mostrar es un plus enorme.' },
      { title: 'Investiga el stack técnico de la empresa antes', body: 'Revisa el sitio web de la empresa, su GitHub, las job descriptions y blogs técnicos. Adaptar tus ejemplos a las tecnologías que ellos usan demuestra preparación y motivación real.' },
      { title: 'Pregunta sobre el trabajo real del equipo', body: 'Al final de la entrevista, pregunta sobre el mayor reto técnico actual del equipo, el proceso de onboarding y cómo se toman las decisiones de arquitectura. Esto muestra interés genuino y te da información para decidir si el rol es bueno para ti.' },
    ],
    commonMistakes: [
      'No narrar el proceso de pensamiento en el ejercicio técnico',
      'Decir "no sé" sin intentar razonar en voz alta',
      'No preguntar si hay dudas sobre el ejercicio antes de empezar',
      'Inventar conocimiento técnico que no se tiene',
      'No tener proyectos en GitHub para mostrar',
    ],
    relatedRoles: ['desarrollador-software', 'diseñador-ux-ui', 'analista-de-datos'],
    faqs: [
      { q: '¿Cuánto dura típicamente un proceso de selección para desarrollador web en LATAM?', a: 'En empresas tech (startups, fintechs), el proceso suele ser de 2-3 semanas con 3-4 etapas: screening HR, evaluación técnica (take-home o live coding), entrevista técnica con el equipo y entrevista cultural/fit. Empresas más grandes (banca, retail) pueden tardar 4-6 semanas con más etapas.' },
      { q: '¿Qué tipo de ejercicio técnico me pueden poner en una entrevista?', a: 'Las más comunes: algoritmos y estructuras de datos (LeetCode-style), take-home projects (construir una mini app en 48-72h), live coding en plataformas como CoderPad o directamente en el IDE del entrevistador. Cada vez más empresas en LATAM usan pair programming como formato de evaluación.' },
      { q: '¿Cómo me preparo para una entrevista técnica de JavaScript?', a: 'Cubre los fundamentos: closures, prototypes, async/await, event loop, scope, hoisting. Practica en plataformas como LeetCode (fáciles y medios), Frontend Mentor para proyectos UI, y Excercism.io para algoritmos. Revisa las preguntas frecuentes de la empresa específica en Glassdoor.' },
      { q: '¿Es necesario saber algoritmos avanzados para entrar a una empresa de tecnología en LATAM?', a: 'Para empresas como MercadoLibre, Globant o Rappi, sí esperan conocimientos básicos de algoritmos y complejidad O(n). Para la mayoría de startups y empresas medianas en LATAM, lo más importante es poder construir features reales, trabajar con APIs, conocer el stack que usan y comunicarse bien con el equipo.' },
    ],
  },

  'analista-de-datos': {
    slug: 'analista-de-datos',
    title: 'Analista de Datos',
    emoji: '📊',
    category: 'Datos e IA',
    description: 'Preguntas frecuentes en entrevistas para roles de data analyst, business intelligence y data science.',
    metaTitle: 'Preguntas de Entrevista Analista de Datos 2025 — Con Consejos',
    metaDesc: 'Las 25 preguntas más frecuentes en entrevistas para analistas de datos en LATAM. SQL, Python, estadística y preguntas conductuales con guía de respuesta.',
    keywords: 'preguntas entrevista analista datos, interview data analyst, preguntas SQL entrevista, entrevista data science LATAM, preguntas Power BI entrevista',
    questions: [
      { question: '¿Cuál es la diferencia entre JOIN, LEFT JOIN y INNER JOIN en SQL?', category: 'tecnica', difficulty: 'básica', hint: 'INNER: solo filas que coinciden en ambas tablas. LEFT: todas las de la izquierda + coincidencias. Dibuja el diagrama Venn.' },
      { question: 'Explica la diferencia entre GROUP BY y HAVING en SQL.', category: 'tecnica', difficulty: 'básica', hint: 'GROUP BY agrupa filas. HAVING filtra sobre grupos (como WHERE pero post-agregación). Ejemplo con COUNT y SUM.' },
      { question: '¿Qué es un índice en base de datos y cuándo usarlo?', category: 'tecnica', difficulty: 'intermedia', hint: 'Mejora velocidad de búsqueda. Trade-off: más espacio y escrituras más lentas. Úsalo en columnas con alta cardinalidad y consultas frecuentes.' },
      { question: '¿Cuál es la diferencia entre media, mediana y moda?', category: 'tecnica', difficulty: 'básica', hint: 'Media: promedio aritmético. Mediana: valor central (resistente a outliers). Moda: valor más frecuente. Ejemplo con distribuciones sesgadas.' },
      { question: 'Explica qué es una distribución normal y por qué importa en análisis.', category: 'tecnica', difficulty: 'intermedia', hint: 'Distribución simétrica en forma de campana. Muchos test estadísticos asumen normalidad. Teorema del límite central.' },
      { question: '¿Cómo manejas valores nulos en un dataset?', category: 'tecnica', difficulty: 'básica', hint: 'Identificar causa (MCAR, MAR, MNAR), luego decidir: eliminar, imputar (media/mediana/moda/modelo), o crear categoría especial.' },
      { question: '¿Cómo detectas y manejas outliers en datos?', category: 'tecnica', difficulty: 'intermedia', hint: 'IQR (1.5×), Z-score, visualización con boxplots. Decisión depende del contexto: ¿error de datos o evento real?' },
      { question: '¿Cuál es la diferencia entre correlación y causalidad?', category: 'tecnica', difficulty: 'intermedia', hint: 'Correlación: relación estadística. Causalidad: una variable causa la otra. Ejemplo clásico: helados y ahogamientos en verano.' },
      { question: 'Cuéntame de un análisis que hiciste que cambió una decisión de negocio.', category: 'conductual', difficulty: 'básica', hint: 'STAR: contexto del negocio, qué datos analizaste, insight que encontraste, decisión que cambió y cuantificó el impacto.' },
      { question: '¿Cómo presentas datos complejos a una audiencia no técnica?', category: 'conductual', difficulty: 'básica', hint: 'Simplicidad visual, metáforas, enfocarse en implicaciones de negocio no en metodología, preguntar qué necesitan saber ellos.' },
      { question: '¿Cómo priorizas cuando tienes múltiples solicitudes de análisis?', category: 'situacional', difficulty: 'básica', hint: 'Impacto de negocio + urgencia + esfuerzo estimado. Comunicar la priorización activamente a los stakeholders.' },
      { question: 'Un stakeholder pide un análisis urgente con datos que sabes que están incompletos. ¿Qué haces?', category: 'situacional', difficulty: 'intermedia', hint: 'Comunicar limitaciones claramente, dar análisis con caveats explícitos, no presentar como definitivo, proponer plan para datos limpios.' },
      { question: '¿Por qué quieres trabajar en análisis de datos y no en otro campo?', category: 'motivacional', difficulty: 'básica', hint: 'Conecta con curiosidad genuina por datos, impacto tangible en decisiones, combinación de técnica y comunicación.' },
      { question: 'Explica qué es un p-value y cómo lo interpretarías en un experimento A/B.', category: 'tecnica', difficulty: 'avanzada', hint: 'Probabilidad de ver los resultados dado que H0 es verdadera. p < 0.05 convención. No significa que el efecto sea grande.' },
      { question: '¿Qué es la normalización vs estandarización de datos?', category: 'tecnica', difficulty: 'intermedia', hint: 'Normalización: escala a [0,1]. Estandarización: media 0, desviación 1 (Z-score). Cuándo usar cada una.' },
    ],
    tips: [
      { title: 'Practica SQL con datos reales antes de la entrevista', body: 'Plataformas como Mode Analytics, Kaggle y LeetCode tienen problemas de SQL de distintos niveles. Resuelve al menos 20-30 problemas intermedios antes de cualquier entrevista. Los ejercicios con JOINs múltiples, CTEs y funciones de ventana son los más frecuentes.' },
      { title: 'Prepara un análisis completo para mostrar en tu portfolio', body: 'Un notebook de Jupyter en GitHub con un análisis completo — limpieza, exploración, visualización, insights y recomendaciones — vale más que cualquier certificado. Usa datos públicos de Kaggle o de datos abiertos de gobierno de tu país.' },
      { title: 'Entiende el negocio, no solo los datos', body: 'Los mejores analistas de datos en LATAM son los que conectan el análisis con decisiones de negocio concretas. Prepárate para hablar del impacto de los datos en revenue, retención, costos. Los entrevistadores valoran el business sense tanto como las habilidades técnicas.' },
      { title: 'Lleva visualizaciones que puedas explicar', body: 'Si tienes acceso a un dashboard en Power BI, Tableau o Looker Studio que hayas construido, muéstralo. La capacidad de crear visualizaciones claras que cuenten una historia es uno de los skills más diferenciadores para analistas en LATAM.' },
    ],
    commonMistakes: [
      'No poder explicar las decisiones metodológicas tomadas en el análisis',
      'Confundir correlación con causalidad al presentar insights',
      'No tener ejemplos concretos de impacto de negocio generado',
      'Presentar análisis sin mencionar las limitaciones de los datos',
      'Memorizar fórmulas sin entender cuándo y por qué aplicarlas',
    ],
    relatedRoles: ['desarrollador-software', 'cientifico-de-datos', 'marketing-digital'],
    faqs: [
      { q: '¿Qué lenguaje es más valorado en entrevistas de datos: Python o R?', a: 'Python domina ampliamente el mercado LATAM en 2025. La mayoría de empresas — desde startups hasta corporativos — prefieren Python con pandas, numpy y scikit-learn. R sigue siendo usado en investigación académica y algunas empresas farmacéuticas y financieras. Si sabes Python, estás cubierto para el 90% de las vacantes.' },
      { q: '¿Cuántas preguntas de SQL suelen hacer en una entrevista de datos?', a: 'Típicamente 2-4 problemas de SQL de complejidad creciente. Los más comunes involucran JOINs múltiples, GROUP BY con HAVING, funciones de ventana (ROW_NUMBER, RANK, LAG/LEAD) y CTEs. Plataformas como LeetCode (sección SQL), Mode Analytics SQL School y SQLZoo son las mejores para prepararse.' },
      { q: '¿Qué herramienta de BI debo aprender para entrevistas en LATAM?', a: 'Power BI es la más demandada en LATAM por la penetración de Microsoft en empresas medianas y grandes. Looker (Google) está creciendo en empresas tech y startups. Tableau sigue fuerte en corporativos multinacionales. Aprende Power BI primero — tiene más vacantes y certificación oficial de Microsoft reconocida.' },
      { q: '¿Qué tipo de caso de negocio me pueden dar en una entrevista de datos?', a: 'Los casos típicos son: análisis de churn de usuarios, optimización de campañas de marketing, análisis de embudo de conversión, o detección de anomalías en transacciones. La clave es estructurar el análisis: definir la pregunta, identificar los datos necesarios, proponer el análisis y anticipar los insights posibles.' },
    ],
  },

  'marketing-digital': {
    slug: 'marketing-digital',
    title: 'Marketing Digital',
    emoji: '📱',
    category: 'Marketing',
    description: 'Preguntas de entrevista para roles de especialista en marketing digital, performance marketing, SEO y growth.',
    metaTitle: 'Preguntas de Entrevista Marketing Digital 2025 — LATAM',
    metaDesc: 'Las 25 preguntas más frecuentes en entrevistas de marketing digital en LATAM. Google Ads, SEO, redes sociales y preguntas conductuales con consejos de respuesta.',
    keywords: 'preguntas entrevista marketing digital, interview marketing LATAM, preguntas SEO entrevista, preguntas Google Ads entrevista, entrevista community manager',
    questions: [
      { question: '¿Cuál es la diferencia entre SEO y SEM?', category: 'tecnica', difficulty: 'básica', hint: 'SEO: posicionamiento orgánico (tiempo, contenido, links). SEM: búsqueda pagada (inmediato, costo por clic). Complementarios.' },
      { question: 'Explica qué es el CTR, CPC, CPM y ROAS.', category: 'tecnica', difficulty: 'básica', hint: 'CTR: % de clics sobre impresiones. CPC: costo por clic. CPM: costo por mil impresiones. ROAS: ingreso por cada sol/peso invertido.' },
      { question: '¿Qué es un funnel de conversión y cómo lo optimizarías?', category: 'tecnica', difficulty: 'intermedia', hint: 'Awareness → Interés → Decisión → Acción. Medir tasas de conversión en cada etapa y optimizar el cuello de botella.' },
      { question: '¿Cómo estructurarías una campaña de Google Ads desde cero?', category: 'tecnica', difficulty: 'intermedia', hint: 'Objetivo, audiencia, keywords (match types), grupos de anuncios, anuncios con extensiones, landing page, bidding strategy.' },
      { question: '¿Qué es el Quality Score en Google Ads?', category: 'tecnica', difficulty: 'básica', hint: 'Puntuación 1-10 de relevancia: CTR esperado, relevancia del anuncio, experiencia en landing page. Afecta el costo real.' },
      { question: 'Explica cómo funciona el algoritmo de Facebook/Meta Ads.', category: 'tecnica', difficulty: 'intermedia', hint: 'Subasta por valor total: bid × relevance score × estimated action rate. Importancia del aprendizaje del píxel.' },
      { question: '¿Cómo mides el éxito de una estrategia de contenido en redes sociales?', category: 'tecnica', difficulty: 'básica', hint: 'KPIs según objetivo: alcance, engagement rate, clicks, conversiones, share of voice. Evitar vanity metrics.' },
      { question: 'Cuéntame de una campaña de la que estés orgulloso/a y por qué.', category: 'conductual', difficulty: 'básica', hint: 'STAR con métricas. Objetivo inicial → acciones → resultado medible. Si el resultado no fue positivo, qué aprendiste.' },
      { question: '¿Cómo manejas un presupuesto de marketing limitado?', category: 'situacional', difficulty: 'intermedia', hint: 'Priorizar canales con mejor ROI demostrado, pruebas rápidas con mínimo viable, analítica constante para redistribuir.' },
      { question: 'Una campaña de Meta Ads está dando resultados por debajo del objetivo. ¿Qué revisas?', category: 'situacional', difficulty: 'intermedia', hint: 'Frecuencia, CPM, CTR, conversión en landing, audiencia size, creative fatigue, tracking del píxel, oferta del producto.' },
      { question: '¿Qué es el inbound marketing y cómo difiere del outbound?', category: 'tecnica', difficulty: 'básica', hint: 'Inbound: atraer con contenido de valor (SEO, blogs, RRSS). Outbound: interrumpir (ads, cold calls). Buyer journey.' },
      { question: '¿Por qué quieres trabajar en marketing y no en ventas?', category: 'motivacional', difficulty: 'básica', hint: 'Conecta con la creatividad estratégica, impacto escalable, combinación de datos y creatividad, construcción de marca.' },
      { question: '¿Cómo te mantienes actualizado/a en marketing digital?', category: 'motivacional', difficulty: 'básica', hint: 'Blogs (Search Engine Journal, Marketing Land), podcasts, certificaciones Google/Meta, comunidades, experimentación propia.' },
      { question: '¿Qué es el email marketing y cómo mejoras la tasa de apertura?', category: 'tecnica', difficulty: 'básica', hint: 'Canal directo de comunicación. Para apertura: asunto personalizado, segmentación, timing, sender name, limpieza de lista.' },
      { question: '¿Cuál es tu proceso para hacer un análisis de competencia en marketing?', category: 'tecnica', difficulty: 'intermedia', hint: 'SimilarWeb para tráfico, SEMrush/Ahrefs para SEO, seguir sus redes y ads, suscribirse a sus emails, análisis de keywords.' },
    ],
    tips: [
      { title: 'Lleva métricas concretas de campañas anteriores', body: 'Los números venden en entrevistas de marketing. En lugar de "mejoré el CTR", di "mejoré el CTR de 0.8% a 2.3% en 6 semanas al cambiar el copy y las creatividades, reduciendo el CPA en 35%". Las métricas concretas demuestran impacto real y capacidad analítica.' },
      { title: 'Conoce las plataformas que usa la empresa antes de la entrevista', body: 'Si la empresa usa principalmente Meta Ads, profundiza en eso. Si es B2B, entiende LinkedIn Ads. Revisa sus anuncios activos en la Meta Ad Library, su posicionamiento SEO con SEMrush gratis, y sus redes sociales para entender su voz de marca.' },
      { title: 'Demuestra que piensas en datos, no solo en creatividad', body: 'El marketer moderno en LATAM debe equilibrar creatividad con analítica. Muestra que defines KPIs antes de cada acción, que tienes un proceso de reporte regular, y que tomas decisiones basadas en datos. Esto diferencia a los mejores candidatos.' },
      { title: 'Prepara tu propio análisis del marketing de la empresa', body: 'Lleva a la entrevista una revisión rápida del SEO, redes sociales o campañas de la empresa con 1-2 observaciones concretas. No tiene que ser exhaustivo — solo demuestra que investigaste y piensas estratégicamente. Pocos candidatos hacen esto y causa una impresión muy positiva.' },
    ],
    commonMistakes: [
      'Hablar de estrategia sin poder respaldar con métricas reales',
      'Confundir alcance con impacto (vanity metrics)',
      'No conocer las diferencias entre plataformas de ads',
      'No poder explicar cómo atribuyes conversiones a canales',
      'Hablar de tendencias sin haberlas aplicado en un proyecto real',
    ],
    relatedRoles: ['analista-de-datos', 'diseñador-ux-ui', 'product-manager'],
    faqs: [
      { q: '¿Qué certificaciones de marketing digital son más valoradas en LATAM?', a: 'Google Ads (Search, Display, YouTube) y Google Analytics son prácticamente obligatorias. Meta Blueprint para social media. HubSpot para inbound e email marketing. Semrush Academy para SEO. Estas certificaciones son gratuitas o de bajo costo y reconocidas por la mayoría de empresas en LATAM.' },
      { q: '¿Es más fácil conseguir trabajo en agencia o empresa directa para marketing?', a: 'Las agencias son más accesibles para perfiles junior porque buscan constantemente por rotación alta. Las empresas directas suelen pagar más pero buscan experiencia más específica. La estrategia recomendada: agencia 1-2 años para construir portfolio en múltiples cuentas, luego migrar a empresa directa.' },
      { q: '¿Debo especializarme en un canal o ser generalista de marketing?', a: 'Al inicio, la especialización paga mejor y es más fácil de posicionar. Performance marketing (paid media), SEO técnico o email marketing son especialidades con alta demanda en LATAM. Después de 3-5 años, la visión integral del funnel digital te posiciona para roles de liderazgo.' },
      { q: '¿Qué portfolio debo tener para una entrevista de marketing digital?', a: 'Lo ideal: casos de estudio documentados de campañas con métricas reales (objetivo, estrategia, resultado), capturas o acceso a dashboards de Analytics/Ads, ejemplos de contenido propio que hayas creado y distribuido, y si tienes tu propio blog o proyecto donde hayas aplicado SEO, muéstralo — demuestra iniciativa.' },
    ],
  },

  'diseñador-ux-ui': {
    slug: 'diseñador-ux-ui',
    title: 'Diseñador UX/UI',
    emoji: '🎨',
    category: 'Diseño',
    description: 'Preguntas de entrevista para roles de diseño UX, UI, product design y diseño de experiencia.',
    metaTitle: 'Preguntas de Entrevista Diseñador UX/UI 2025 — Con Guía',
    metaDesc: 'Las 20 preguntas más frecuentes en entrevistas para diseñadores UX/UI en LATAM. Proceso de diseño, herramientas, portfolio review y preguntas conductuales.',
    keywords: 'preguntas entrevista UX UI designer, interview diseñador LATAM, preguntas Figma entrevista, portafolio UX entrevista, entrevista product designer',
    questions: [
      { question: 'Explica tu proceso de diseño de principio a fin.', category: 'tecnica', difficulty: 'básica', hint: 'Discovery (research, entrevistas) → Define (pain points, personas) → Ideate (sketches, flujos) → Prototype → Test → Iterate.' },
      { question: '¿Cómo defines si una interfaz es "buena"?', category: 'tecnica', difficulty: 'básica', hint: 'Usabilidad (puede usarse), utilidad (resuelve el problema), accesibilidad (para todos), deseo (querer usarla), eficiencia.' },
      { question: '¿Cuál es la diferencia entre UX y UI?', category: 'tecnica', difficulty: 'básica', hint: 'UX: experiencia completa del usuario (flujo, pain points, research). UI: interfaz visual (colores, tipografía, componentes). UX sin UI es un esqueleto, UI sin UX es una pintura bonita pero confusa.' },
      { question: 'Cuéntame sobre un caso de diseño donde tus suposiciones iniciales estuvieron equivocadas.', category: 'conductual', difficulty: 'intermedia', hint: 'Muestra apertura a iteración y datos. Qué asumiste, qué dijo el testing, cómo pivotaste. Humildad intelectual es valorada.' },
      { question: '¿Cómo manejas el feedback de stakeholders que contradice tu diseño?', category: 'conductual', difficulty: 'intermedia', hint: 'Escuchar el problema detrás del feedback (no la solución que proponen), mostrar datos que respalden tus decisiones, iterar.' },
      { question: '¿Qué es un design system y para qué sirve?', category: 'tecnica', difficulty: 'intermedia', hint: 'Librería de componentes reutilizables + reglas de diseño (tokens, patrones). Consistencia, velocidad, escala. Ejemplos: Material Design, Carbon.' },
      { question: '¿Cómo haces investigación de usuarios con presupuesto limitado?', category: 'situacional', difficulty: 'intermedia', hint: 'Entrevistas de 30 min con 5 usuarios, guerrilla testing, análisis de datos existentes (analytics, soporte), hallazgos de competidores.' },
      { question: '¿Qué métricas usas para medir el éxito de un diseño?', category: 'tecnica', difficulty: 'intermedia', hint: 'Task completion rate, tiempo en tarea, error rate, NPS/CSAT, conversión, reducción de soporte tickets relacionados.' },
      { question: 'Explica un caso donde el testing de usabilidad cambió tu diseño radicalmente.', category: 'conductual', difficulty: 'avanzada', hint: 'Detalla el hallazgo específico, por qué te sorprendió, qué cambios hiciste y cuál fue el impacto medible después.' },
      { question: '¿Por qué quieres trabajar como diseñador/a UX/UI?', category: 'motivacional', difficulty: 'básica', hint: 'Conecta empatía por usuarios, combinación creativa-analítica, impacto tangible en experiencias de millones de personas.' },
      { question: '¿Cómo colaboras con desarrolladores para asegurar que el diseño se implemente correctamente?', category: 'conductual', difficulty: 'básica', hint: 'Especificaciones en Figma, dev handoff, estar disponible para preguntas, aceptar constraints técnicos, iteración rápida.' },
      { question: '¿Cuál es tu proceso para definir las personas de usuario?', category: 'tecnica', difficulty: 'intermedia', hint: 'Basado en datos reales (entrevistas, analytics, encuestas), no en suposiciones. Objetivo, comportamiento, pain points, contexto.' },
    ],
    tips: [
      { title: 'Tu portfolio lo es todo — presenta proceso, no solo resultado final', body: 'Los entrevistadores de UX/UI en LATAM quieren ver el proceso: el brief inicial, los wireframes, las iteraciones, los hallazgos del testing y el resultado final con métricas. Un caso de estudio bien documentado de 3 páginas vale más que 10 pantallas bonitas sin contexto.' },
      { title: 'Prepárate para defender cada decisión de diseño', body: 'En la entrevista probablemente revisarán tu portfolio juntos. Por cada pantalla, debes poder explicar: ¿cuál era el problema del usuario?, ¿qué alternativas consideraste?, ¿por qué esta solución?, ¿qué dice el testing? La incertidumbre está bien si muestras que buscas respuestas con datos.' },
      { title: 'Practica presentar tu diseño en 5 minutos', body: 'Muchas entrevistas incluyen una presentación de portfolio limitada en tiempo. Practica contar cada caso en 5 minutos: 1 min contexto, 2 min proceso, 1 min resultado, 1 min lecciones. Cortar en tiempo sin perder claridad es una habilidad crucial.' },
      { title: 'Muestra que entiendes los constraints de negocio', body: 'Los mejores diseñadores en LATAM balancean las necesidades del usuario con las del negocio. Muestra que entiendes de conversión, retención, tiempo de desarrollo. Decir "simplifiqué este flujo de 5 pasos a 3 pasos porque el equipo de datos mostró que el 60% abandonaba en el paso 3" demuestra madurez profesional.' },
    ],
    commonMistakes: [
      'Presentar solo el resultado final sin mostrar el proceso de diseño',
      'No poder explicar las decisiones de diseño con datos o razonamiento claro',
      'Incluir demasiados proyectos en el portfolio — 3 casos profundos > 15 superficiales',
      'Confundir feedback de stakeholders con la solución (escuchar el problema, no la solución)',
      'No tener métricas de impacto de ningún proyecto en el portfolio',
    ],
    relatedRoles: ['desarrollador-web', 'product-manager', 'marketing-digital'],
    faqs: [
      { q: '¿Cuántos proyectos debería tener en mi portfolio de UX/UI?', a: '3 a 5 casos de estudio bien documentados son suficientes y preferibles a 10+ proyectos superficiales. Cada caso debe mostrar el problema, tu proceso (research, ideación, prototipado, testing) y el resultado con métricas. Calidad sobre cantidad siempre en portfolios UX/UI.' },
      { q: '¿Es obligatorio saber programar para ser diseñador UX/UI?', a: 'No es obligatorio, pero HTML y CSS básicos dan una ventaja significativa. Entender las limitaciones técnicas te hace un mejor colaborador con desarrolladores y produce diseños más implementables. Lo más importante es dominar Figma, entender los principios de diseño y tener metodología de investigación.' },
      { q: '¿Figma o Adobe XD para el mercado LATAM?', a: 'Figma domina completamente en 2025. El 90%+ de las empresas tech en LATAM usan Figma como herramienta principal. Adobe XD fue descontinuado por Adobe en 2023. Conocer Figma a profundidad — incluyendo variables, auto layout, prototyping y dev mode — es esencial para cualquier diseñador en el mercado actual.' },
      { q: '¿Cómo consigo experiencia en UX/UI si no tengo trabajo formal?', a: 'Proyectos propios: rediseña una app conocida y documenta el proceso. Contribuye a proyectos open source o de ONGs. Participa en design hackathons como UX Challenge o Awwwards. Crea estudios de caso con datos públicos (analytics de sitios gubernamentales, apps con reviews negativas). La comunidad de diseño en LATAM (behance.net/LatinAmerica) es muy activa.' },
    ],
  },

  'recursos-humanos': {
    slug: 'recursos-humanos',
    title: 'Recursos Humanos',
    emoji: '👥',
    category: 'Recursos Humanos',
    description: 'Preguntas frecuentes en entrevistas para roles de RRHH, reclutamiento, talent acquisition y HRBP.',
    metaTitle: 'Preguntas de Entrevista Recursos Humanos 2025 — LATAM',
    metaDesc: 'Las 20 preguntas más frecuentes en entrevistas para recursos humanos en LATAM. Reclutamiento, gestión de talento y preguntas conductuales con consejos.',
    keywords: 'preguntas entrevista recursos humanos, interview RRHH LATAM, preguntas reclutamiento entrevista, entrevista analista RRHH, preguntas HRBP',
    questions: [
      { question: '¿Cómo diseñas un proceso de reclutamiento para una posición difícil de cubrir?', category: 'tecnica', difficulty: 'intermedia', hint: 'Definir perfil con hiring manager, fuentes de candidatos (activos + pasivos), screening, evaluaciones, tiempo objetivo.' },
      { question: '¿Cómo evalúas competencias conductuales en una entrevista?', category: 'tecnica', difficulty: 'básica', hint: 'STAR (Situación, Tarea, Acción, Resultado). Preguntas de comportamiento pasado predicen comportamiento futuro.' },
      { question: 'Cuéntame de una contratación que no funcionó y qué aprendiste.', category: 'conductual', difficulty: 'intermedia', hint: 'Muestra reflexión honesta: qué señales pasaste por alto, qué cambiarías en el proceso, qué implementaste después.' },
      { question: '¿Cómo manejas conflictos entre empleados o equipos?', category: 'situacional', difficulty: 'básica', hint: 'Escuchar ambas partes, hechos vs percepciones, mediación neutral, solución con seguimiento, aprendizaje organizacional.' },
      { question: '¿Cuáles métricas de RRHH son más importantes para ti?', category: 'tecnica', difficulty: 'intermedia', hint: 'Time to hire, costo por contratación, retention rate 90 días, employee NPS, absentismo, engagement score.' },
      { question: '¿Cómo diseñarías un programa de onboarding para reducir la rotación?', category: 'tecnica', difficulty: 'intermedia', hint: 'Pre-boarding, semana 1 cultural, 30-60-90 plan, buddy program, check-ins, feedback estructurado, claridad de expectativas.' },
      { question: '¿Cómo te mantienes actualizado/a en legislación laboral de tu país?', category: 'tecnica', difficulty: 'básica', hint: 'Ministerio de Trabajo, SUNAFIL (Perú)/STPS (México)/MinTrabajo (Colombia), colegios profesionales, comunidades RRHH.' },
      { question: '¿Por qué elegiste trabajar en recursos humanos?', category: 'motivacional', difficulty: 'básica', hint: 'Impacto en personas, puente entre individuo y organización, desarrollo de talento, construcción de cultura.' },
      { question: 'Un gerente quiere desvincular a un empleado sin seguir el proceso correcto. ¿Qué haces?', category: 'situacional', difficulty: 'avanzada', hint: 'RRHH protege al empleado Y a la empresa. Explicar el riesgo legal, proponer el proceso correcto, documentar todo.' },
      { question: '¿Cómo implementarías un proceso de evaluación de desempeño en una empresa que no tiene uno?', category: 'tecnica', difficulty: 'avanzada', hint: 'Diagnóstico cultural, diseño con líderes, ciclo anual + check-ins frecuentes, calibración, vinculación con desarrollo, piloto.' },
    ],
    tips: [
      { title: 'Conoce la legislación laboral de tu país a fondo', body: 'En LATAM, los procesos de contratación, beneficios y desvinculación tienen marcos legales muy específicos por país. Un analista de RRHH que conoce SUNAFIL (Perú), la Ley Federal del Trabajo (México) o el Código Sustantivo del Trabajo (Colombia) demuestra una ventaja competitiva real.' },
      { title: 'Habla de impacto en negocio, no solo en personas', body: 'Los líderes de negocio valoran a los profesionales de RRHH que conectan sus acciones con resultados organizacionales medibles: reducción de rotación en X%, reducción de time to hire en Y días, incremento de engagement de Z puntos. El lenguaje de negocio abre puertas.' },
      { title: 'Demuestra que usas tecnología de RRHH', body: 'ATS (Applicant Tracking Systems), HRIS, herramientas de encuestas de clima, plataformas de e-learning: mencionarlas demuestra que estás actualizado. En LATAM, LinkedIn Recruiter, Buk (Chile), Taly (Colombia), Sesame y Factorial son herramientas comunes.' },
    ],
    commonMistakes: [
      'No poder hablar de métricas de los procesos de RRHH en que participó',
      'Mencionar experiencias de confidencialidad violada (aunque sea de forma anónima)',
      'No conocer la legislación laboral básica del país',
      'Demostrar sesgo en la descripción de perfiles buscados',
      'No tener postura clara ante dilemas éticos de RRHH',
    ],
    relatedRoles: ['administrador-empresas', 'psicólogo-organizacional', 'marketing-digital'],
    faqs: [
      { q: '¿Qué herramientas de ATS son más usadas en LATAM?', a: 'Workable y Greenhouse son populares en empresas medianas-grandes. BambooHR y SAP SuccessFactors en corporativos. LinkedIn Recruiter es la herramienta de sourcing más usada. En startups LATAM, Notion o Airtable como ATS básico es común. Conocer cualquiera de estas herramientas suma en entrevistas.' },
      { q: '¿Cuánto importa la psicología en recursos humanos?', a: 'Mucho, aunque no se necesita ser psicólogo para trabajar en RRHH. La psicología organizacional — motivación, comportamiento grupal, sesgos cognitivos en selección — es muy valorada. Los psicólogos tienen ventaja en roles de evaluación, desarrollo de talento y consultoría, pero los administradores con formación en people management son igualmente competitivos.' },
    ],
  },

  'contador': {
    slug: 'contador',
    title: 'Contador / Finanzas',
    emoji: '📚',
    category: 'Finanzas y Contabilidad',
    description: 'Preguntas de entrevista para roles de contador, analista financiero y posiciones de contabilidad en empresas de LATAM.',
    metaTitle: 'Preguntas de Entrevista Contador y Finanzas 2025 — LATAM',
    metaDesc: 'Las 20 preguntas más frecuentes en entrevistas para contadores y analistas financieros en Perú, México, Colombia y Chile. Con consejos de respuesta.',
    keywords: 'preguntas entrevista contador, interview contador LATAM, preguntas entrevista finanzas, preguntas NIIF entrevista, entrevista analista financiero Peru Mexico',
    questions: [
      { question: '¿Cuáles son los principales estados financieros y para qué sirve cada uno?', category: 'tecnica', difficulty: 'básica', hint: 'Balance general (posición), estado de resultados (performance), flujo de efectivo (liquidez). Cada uno responde una pregunta diferente del negocio.' },
      { question: 'Explica la diferencia entre activo corriente y no corriente.', category: 'tecnica', difficulty: 'básica', hint: 'Corriente: se convierte en efectivo en menos de 1 año (caja, cuentas por cobrar, inventario). No corriente: largo plazo (propiedad, equipos, intangibles).' },
      { question: '¿Qué es el principio de devengo (accrual) en contabilidad?', category: 'tecnica', difficulty: 'básica', hint: 'Registrar ingresos y gastos cuando se incurren, no cuando se cobra o paga. Diferencia fundamental vs contabilidad de caja.' },
      { question: '¿Cómo calcularías el capital de trabajo de una empresa?', category: 'tecnica', difficulty: 'básica', hint: 'Activo corriente - Pasivo corriente. Indica capacidad de pagar obligaciones de corto plazo. Positivo es saludable generalmente.' },
      { question: '¿Cuáles son las NIIF más importantes para una empresa de manufactura?', category: 'tecnica', difficulty: 'intermedia', hint: 'NIIF 16 (arrendamientos), NIIF 9 (instrumentos financieros), NIC 2 (inventarios), NIC 16 (PPE), NIC 12 (impuesto a la renta).' },
      { question: 'Describe tu experiencia con cierres contables mensuales.', category: 'conductual', difficulty: 'básica', hint: 'Proceso, plazos manejados, volumen de transacciones, herramientas usadas, coordinación con otras áreas.' },
      { question: 'Cuéntame de una vez que encontraste un error contable importante. ¿Cómo lo manejaste?', category: 'conductual', difficulty: 'intermedia', hint: 'Cómo lo detectaste, pasos para confirmar, a quién comunicaste, cómo se corrigió, qué control implementaste para prevenirlo.' },
      { question: '¿Por qué quieres trabajar en contabilidad en lugar de en otra área financiera?', category: 'motivacional', difficulty: 'básica', hint: 'Precisión, impacto en información de decisiones, cumplimiento normativo, base fundamental de los negocios.' },
      { question: 'Tienes que cerrar los libros en 2 días y falta información de una subsidiaria. ¿Qué haces?', category: 'situacional', difficulty: 'intermedia', hint: 'Comunicación inmediata con escalamiento, estimaciones documentadas, cierre provisional, ajuste posterior, lección aprendida.' },
      { question: '¿Qué software contable dominas y cuál es el más útil para ti?', category: 'tecnica', difficulty: 'básica', hint: 'SAP, Oracle, Microsoft Dynamics, locales (CONCAR en Perú, CONTPAQi en México, Siigo en Colombia). Excel como complemento.' },
    ],
    tips: [
      { title: 'Muestra que entiendes el negocio, no solo los números', body: 'Los contadores más valorados en LATAM son los que pueden explicar qué significan los números para el negocio. En una entrevista, conecta los conceptos contables con implicaciones de negocio: por qué un ratio de deuda alto importa estratégicamente, no solo contablemente.' },
      { title: 'Prepárate para un ejercicio práctico de Excel', body: 'Es muy común recibir un caso práctico en Excel durante el proceso de selección: conciliación bancaria, análisis de variaciones, o preparación de un reporte financiero. Practica tablas dinámicas, funciones VLOOKUP/INDEX-MATCH, y presentación de datos. La velocidad y orden en Excel importan.' },
      { title: 'Conoce las especificidades tributarias de tu país', body: 'En Perú: impuesto a la renta, IGV, SUNAT. En México: ISR, IVA, SAT. En Colombia: renta, IVA, DIAN. En Chile: IVA, renta de primera categoría, SII. Conocer los plazos, tasas y formularios de tu país demuestra preparación real para el trabajo.' },
    ],
    commonMistakes: [
      'No poder dar ejemplos concretos de herramientas usadas en trabajos anteriores',
      'Desconocer las NIIF/IFRS relevantes para la industria de la empresa',
      'No conocer la legislación tributaria específica del país',
      'Presentar errores pasados sin mostrar el aprendizaje',
      'No demostrar habilidades de comunicación financiera a no-contadores',
    ],
    relatedRoles: ['analista-de-datos', 'administrador-empresas', 'recursos-humanos'],
    faqs: [
      { q: '¿Cuáles son los errores más comunes en entrevistas para contadores en LATAM?', a: 'Los más frecuentes: no poder explicar los estados financieros con palabras simples, desconocer las NIIF aplicables a la industria de la empresa entrevistadora, no tener ejemplos concretos de cierres contables o auditorías, y subestimar las preguntas conductuales (los entrevistadores evalúan actitud y trabajo en equipo tanto como conocimiento técnico).' },
      { q: '¿Vale la pena especializarse en NIIF/IFRS en LATAM?', a: 'Sí, especialmente si tienes ambición de trabajar en empresas multinacionales o Big Four. Las NIIF están adoptadas en todos los países LATAM para empresas que cotizan en bolsa y muchas grandes empresas. Un contador con certificación ACCA, CPA o simplemente dominio demostrado de NIIF tiene acceso a mejores posiciones y salarios.' },
    ],
  },
};

export const INTERVIEW_CATEGORIES: QuestionCategory[] = ['conductual', 'tecnica', 'situacional', 'motivacional'];

export const CATEGORY_LABELS: Record<QuestionCategory, string> = {
  conductual: 'Conductual',
  tecnica: 'Técnica',
  situacional: 'Situacional',
  motivacional: 'Motivacional',
};

export const DIFFICULTY_COLORS: Record<Difficulty, string> = {
  'básica': 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
  'intermedia': 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
  'avanzada': 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
};
