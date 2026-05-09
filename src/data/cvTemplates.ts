export interface CVSection {
  name: string;
  priority: 'esencial' | 'recomendada' | 'opcional';
  description: string;
  example: string;
}

export interface CVTemplateProfession {
  slug: string;
  title: string;
  emoji: string;
  category: string;
  description: string;
  metaTitle: string;
  metaDesc: string;
  keywords: string;
  cvTip: string;
  sections: CVSection[];
  keySkills: string[];
  commonMistakes: string[];
  relatedProfessions: string[];
  faqs: { q: string; a: string }[];
}

export const CV_TEMPLATES: Record<string, CVTemplateProfession> = {
  'ingeniero-de-software': {
    slug: 'ingeniero-de-software',
    title: 'Ingeniero de Software',
    emoji: '⚙️',
    category: 'Tecnología',
    description: 'Plantilla y estructura de CV para ingenieros de software, developers y programadores en LATAM.',
    metaTitle: 'Plantilla CV Ingeniero de Software — Formato ATS 2025',
    metaDesc: 'Plantilla de currículum vitae para ingeniero de software con estructura ATS-optimizada. Secciones, ejemplos y consejos para el mercado tech en LATAM.',
    keywords: 'plantilla CV ingeniero software, curriculum vitae programador, CV desarrollador software LATAM, formato CV tech Peru Mexico Colombia, CV ATS software engineer',
    cvTip: 'Los recruiters tech pasan 6 segundos mirando tu CV. Pon tus proyectos con impacto medible y el stack tecnológico en las primeras 3 secciones.',
    sections: [
      { name: 'Encabezado profesional', priority: 'esencial', description: 'Nombre, título exacto del cargo al que postulas, email profesional, LinkedIn, GitHub y ciudad.', example: 'Carlos Rodríguez | Desarrollador Full-Stack | carlos@email.com | linkedin.com/in/carlos | github.com/carlos | Lima, Perú' },
      { name: 'Resumen profesional', priority: 'esencial', description: '3-4 líneas que destaquen tu stack principal, años de experiencia y el tipo de problemas que resuelves.', example: 'Desarrollador full-stack con 4 años de experiencia en React y Node.js. Construí sistemas para 200K+ usuarios activos en fintech. Especializado en APIs REST escalables y arquitectura de microservicios.' },
      { name: 'Stack tecnológico', priority: 'esencial', description: 'Lista de tecnologías organizadas por categoría. Sé honesto sobre tu nivel de dominio.', example: 'Front-end: React, TypeScript, Next.js, Tailwind | Back-end: Node.js, Python, FastAPI | DB: PostgreSQL, Redis, MongoDB | DevOps: Docker, AWS, GitHub Actions' },
      { name: 'Experiencia laboral', priority: 'esencial', description: 'Cronológico inverso. Para cada rol: empresa, período, título y 3-4 logros con métricas.', example: 'Desarrollador Senior — Fintech XYZ (2022-2024): Reduje el tiempo de carga del dashboard en 60% optimizando queries SQL. Implementé un sistema de pagos que procesa $2M diarios con 99.9% uptime.' },
      { name: 'Proyectos destacados', priority: 'recomendada', description: 'Para developers junior o con poco trabajo formal, esta sección puede compensar. Incluye link al repo o demo.', example: 'App de seguimiento de hábitos — React Native + Supabase | 5K+ descargas | github.com/carlos/habitapp' },
      { name: 'Educación', priority: 'esencial', description: 'Universidad, carrera, año de egreso. Para recién egresados: incluir GPA si es > 15/20 o equivalente.', example: 'Ingeniería de Sistemas — Universidad Nacional de Ingeniería, Lima (2019) | Top 10% de la promoción' },
      { name: 'Certificaciones', priority: 'recomendada', description: 'AWS, Google Cloud, Azure, cursos de plataformas reconocidas (con año).', example: 'AWS Solutions Architect Associate (2024) | Meta Front-End Developer Certificate (2023)' },
      { name: 'Idiomas', priority: 'recomendada', description: 'Importante para trabajo remoto. Sé preciso con el nivel.', example: 'Español: nativo | Inglés: avanzado (B2) — lectura técnica fluida, comunicación oral en reuniones' },
      { name: 'Open Source / Comunidad', priority: 'opcional', description: 'Contribuciones a proyectos open source, charlas en meetups, blog técnico.', example: 'Contribuidor a React Query (3 PRs mergeados) | Speaker en PyCon Perú 2024' },
    ],
    keySkills: ['JavaScript/TypeScript', 'React o framework principal', 'SQL y bases de datos', 'Git y control de versiones', 'APIs REST/GraphQL', 'Testing unitario', 'Docker básico', 'Inglés técnico'],
    commonMistakes: [
      'Listar tecnologías que mencionas de pasada — solo incluye lo que puedes usar en un proyecto real',
      'No cuantificar el impacto de tu trabajo (usuarios, performance, reducción de costos)',
      'CV de más de 2 páginas para menos de 10 años de experiencia',
      'No incluir links a GitHub o portafolio — es imperdonable en un CV de software',
      'Título genérico "Desarrollador" sin especificar (front, back, full-stack, mobile)',
    ],
    relatedProfessions: ['diseñador-ux-ui', 'analista-de-datos', 'devops'],
    faqs: [
      { q: '¿Cuántas páginas debe tener el CV de un ingeniero de software?', a: '1 página para menos de 5 años de experiencia, máximo 2 páginas para más. Los sistemas ATS y los recruiters tech prefieren CVs concisos. Si tienes mucho que mostrar, crea un portafolio web y enlázalo desde el CV.' },
      { q: '¿Debo incluir todos mis proyectos universitarios en el CV?', a: 'Solo incluye proyectos universitarios si son técnicamente relevantes, tienen código disponible en GitHub y demuestran habilidades que el empleador busca. Para developers con experiencia laboral, los proyectos universitarios generalmente sobran. Para recién egresados, selecciona los 2-3 mejores con descripción de tecnologías y links.' },
      { q: '¿Es importante el formato visual del CV para un ingeniero?', a: 'Más importante que el diseño llamativo es la claridad y la compatibilidad con ATS. Usa fuente legible (Calibri, Arial, Garamond), márgenes de 1.5-2cm, evita tablas y gráficos de habilidades que los ATS no pueden leer. Un PDF limpio, bien estructurado y sin columnas múltiples pasa mejor los filtros automáticos.' },
      { q: '¿Cómo destaco en el CV si no tengo experiencia laboral formal?', a: 'Prioriza la sección de proyectos con GitHub links, contribuciones open source si las tienes, hackathons o competencias de programación, y cualquier trabajo freelance aunque haya sido pequeño. Plataformas como LeetCode, Codewars o Exercism muestran actividad técnica continua. Un portafolio web propio siempre impresiona.' },
    ],
  },

  'diseñador-grafico': {
    slug: 'diseñador-grafico',
    title: 'Diseñador Gráfico / UX-UI',
    emoji: '🎨',
    category: 'Diseño',
    description: 'Plantilla de CV para diseñadores gráficos, diseñadores UX/UI y product designers en LATAM.',
    metaTitle: 'Plantilla CV Diseñador Gráfico y UX/UI — Formato 2025',
    metaDesc: 'Plantilla de currículum vitae para diseñador gráfico y UX/UI con estructura ATS-optimizada. Secciones, ejemplos de portafolio y consejos para LATAM.',
    keywords: 'plantilla CV diseñador grafico, curriculum vitae UX UI designer, CV product designer LATAM, formato CV diseño grafico Peru Mexico, CV ATS diseñador',
    cvTip: 'En diseño, tu portafolio habla más que tu CV. El CV debe ser una invitación a ver tu portafolio — incluye el link en posición prominente y asegúrate de que esté actualizado antes de postular.',
    sections: [
      { name: 'Encabezado con portafolio', priority: 'esencial', description: 'Nombre, título específico (UX Designer, Product Designer, Brand Designer), email, LinkedIn y URL del portafolio.', example: 'Ana García | Product Designer | ana@email.com | linkedin.com/in/ana | behance.net/anadesign | Bogotá, Colombia' },
      { name: 'Resumen de diseñador', priority: 'esencial', description: '3-4 líneas que describan tu especialidad, metodología y tipo de proyectos.', example: 'Product Designer con 3 años de experiencia en fintech y e-commerce. Especializada en research de usuarios y diseño de sistemas. Reduje el abandono de checkout en 25% en mi último proyecto con 3 rondas de A/B testing.' },
      { name: 'Herramientas y skills', priority: 'esencial', description: 'Organiza por diseño visual, UX tools, prototipado y skills complementarios.', example: 'Diseño: Figma (avanzado), Adobe Illustrator, Photoshop | UX: User Research, Usability Testing, Design Systems | Prototipado: Figma Prototyping, Marvel, Maze | Otros: HTML/CSS básico, Notion' },
      { name: 'Experiencia con impacto', priority: 'esencial', description: 'Enfócate en el impacto medible de tus diseños: conversión, retención, NPS, tiempo de tarea reducido.', example: 'UX Designer — Startup XYZ (2022-2024): Rediseñé el onboarding app reduciendo el time-to-value de 15 a 5 minutos. Conduje 40+ entrevistas de usuario que fundamentaron el rediseño del checkout (+22% conversión).' },
      { name: 'Proyectos de portafolio seleccionados', priority: 'esencial', description: 'Lista 3-4 proyectos con nombre, tipo, tecnologías y link. Para portfolios en Behance, Dribbble o sitio propio.', example: 'App de telemedicina — UX Research + UI | Figma | behance.net/ana/telemedica | Sistema de diseño para SaaS B2B — 120+ componentes en Figma' },
      { name: 'Educación', priority: 'recomendada', description: 'Grado, certificaciones o bootcamps relevantes (Laboratoria, Google UX Certificate, etc.).', example: 'Diseño Gráfico — Universidad de los Andes, Bogotá (2021) | Google UX Design Certificate (2022)' },
      { name: 'Idiomas', priority: 'recomendada', description: 'Para trabajo remoto o agencias internacionales, el inglés es frecuentemente requerido.', example: 'Español: nativo | Inglés: intermedio (B1) — lectura de documentación técnica, reuniones básicas' },
    ],
    keySkills: ['Figma (esencial)', 'Research de usuarios', 'Design Systems', 'Prototipado interactivo', 'Usability Testing', 'Pensamiento visual', 'Comunicación de diseño', 'HTML/CSS básico'],
    commonMistakes: [
      'No incluir link al portafolio o tener el portafolio desactualizado',
      'Mostrar solo resultado final sin documentar el proceso de diseño',
      'Listar Photoshop como habilidad principal en 2025 — Figma es el estándar',
      'CV con diseño muy elaborado que los sistemas ATS no pueden parsear',
      'No cuantificar el impacto de los diseños con métricas de negocio',
    ],
    relatedProfessions: ['ingeniero-de-software', 'marketing-digital', 'product-manager'],
    faqs: [
      { q: '¿El CV de un diseñador debe ser visualmente impresionante?', a: 'Ni visualmente aburrido ni visualmente caótico. Un diseño limpio, bien tipografiado y con jerarquía clara es suficiente para impresionar. Evita dos columnas, tablas y gráficos de "barras de habilidades" — confunden los ATS. Un PDF de 1 página bien estructurado con link a portafolio es la combinación ganadora.' },
      { q: '¿Behance o sitio web propio para el portafolio de diseño?', a: 'Idealmente ambos: un sitio propio da más control y profesionalismo, Behance tiene comunidad y tráfico orgánico. Para quienes están empezando, Behance es una excelente opción gratuita. Para diseñadores con 2+ años de experiencia, un sitio propio en WordPress, Webflow o Squarespace da mejor impresión y permite customización total.' },
    ],
  },

  'administrador-empresas': {
    slug: 'administrador-empresas',
    title: 'Administrador de Empresas',
    emoji: '📋',
    category: 'Administración y Negocios',
    description: 'Plantilla de CV para administradores de empresas, egresados de negocios y profesionales en gestión en LATAM.',
    metaTitle: 'Plantilla CV Administrador de Empresas — Formato 2025 LATAM',
    metaDesc: 'Plantilla de currículum vitae para administrador de empresas con estructura ATS. Secciones, ejemplos y consejos para el mercado laboral en Perú, México y Colombia.',
    keywords: 'plantilla CV administrador empresas, curriculum vitae administración negocios, CV MBA LATAM, formato CV gestión empresarial Peru Mexico Colombia, plantilla CV negocios',
    cvTip: 'Los recruiters de empresas grandes en LATAM buscan logros cuantificables. Cada punto de tu experiencia debe responder: ¿qué hice?, ¿cómo lo hice?, ¿cuál fue el resultado medible?',
    sections: [
      { name: 'Encabezado profesional', priority: 'esencial', description: 'Nombre, título deseado, email profesional, LinkedIn y ciudad.', example: 'María López | Analista de Negocios | maria@email.com | linkedin.com/in/maria | Medellín, Colombia' },
      { name: 'Perfil profesional', priority: 'esencial', description: '3-4 líneas que resuman tu especialidad, industria de experiencia y fortalezas diferenciadoras.', example: 'Administradora de empresas con 3 años en consultoría estratégica para PYMEs del sector retail. Especializada en análisis financiero y gestión de proyectos. Lideré implementación de ERP que redujo costos operativos en 18%.' },
      { name: 'Experiencia laboral', priority: 'esencial', description: 'Cronológico inverso. Enfócate en logros con métricas, no en descripción de responsabilidades.', example: 'Analista Comercial — Empresa ABC (2022-2024): Incrementé la cartera de clientes en 35% identificando 12 segmentos nuevos. Optimicé el proceso de facturación reduciendo el ciclo de cobro de 45 a 28 días.' },
      { name: 'Educación', priority: 'esencial', description: 'Universidad, carrera, año. Si tienes MBA o posgrado, va primero.', example: 'MBA — Universidad EAFIT, Medellín (2023) | Administración de Empresas — Universidad Nacional de Colombia (2020)' },
      { name: 'Habilidades y herramientas', priority: 'esencial', description: 'Software de gestión, análisis y herramientas específicas de tu área.', example: 'SAP, Excel avanzado (tablas dinámicas, Power Query), Power BI, Salesforce, Project Management (SCRUM, PMI básico), G Suite' },
      { name: 'Idiomas', priority: 'recomendada', description: 'Para empresas multinacionales en LATAM, el inglés es generalmente requerido.', example: 'Español: nativo | Inglés: avanzado (C1) — TOEFL 105/120 (2023)' },
      { name: 'Certificaciones', priority: 'opcional', description: 'Cursos y certificaciones relevantes para el área.', example: 'PMP - Project Management Professional (2024) | Google Data Analytics Certificate (2023)' },
    ],
    keySkills: ['Excel avanzado', 'SAP u otro ERP', 'Análisis financiero básico', 'Gestión de proyectos', 'PowerPoint/Presentaciones', 'Inglés profesional', 'Pensamiento analítico', 'Comunicación ejecutiva'],
    commonMistakes: [
      'Describir responsabilidades en lugar de logros ("responsable de" vs "logré")',
      'CV genérico no adaptado a la industria específica de la empresa',
      'No incluir métricas en ningún punto de experiencia',
      'Sección de habilidades muy larga con términos vagos ("trabajo en equipo", "proactividad")',
      'Objetivo profesional genérico que podría ser de cualquier candidato',
    ],
    relatedProfessions: ['contador-auditor', 'marketing-digital', 'recursos-humanos'],
    faqs: [
      { q: '¿Cómo diferencia un CV de administración entre sí para empresas de diferentes industrias?', a: 'Adapta el resumen profesional y los puntos de experiencia al vocabulario de la industria. Para retail: habla de márgenes, sell-through, SKUs. Para banca: capital de trabajo, cobranza, NPS. Para tech: growth, ARR, churn. Usar el lenguaje correcto demuestra conocimiento del sector y pasa mejor los filtros de ATS.' },
      { q: '¿Vale la pena destacar la universidad en el CV de administración?', a: 'En LATAM sí importa, especialmente para grandes corporativos. En Perú, la PUCP, UP y PAD tienen reputación fuerte. En México, el ITESM, IPADE y UNAM. En Colombia, Uniandes y EAFIT. En Chile, PUC y UAI. Si estudiaste en una de estas, asegúrate de que sea visible. Si no, enfócate en tus logros medibles.' },
    ],
  },

  'contador-auditor': {
    slug: 'contador-auditor',
    title: 'Contador / Auditor',
    emoji: '📚',
    category: 'Finanzas y Contabilidad',
    description: 'Plantilla y estructura de CV para contadores, auditores y analistas financieros en LATAM.',
    metaTitle: 'Plantilla CV Contador y Auditor — Formato ATS 2025 LATAM',
    metaDesc: 'Plantilla de CV para contador, contador público y auditor. Estructura ATS-optimizada con secciones, ejemplos y consejos para Perú, México y Colombia.',
    keywords: 'plantilla CV contador, curriculum vitae contador publico, CV auditor LATAM, formato CV contabilidad Peru Mexico Colombia, plantilla CV CPA finanzas',
    cvTip: 'Los CVs de contadores deben transmitir precisión y orden — un CV con errores ortográficos o mal formateado es un contrasentido para un perfil que maneja cifras. Revísalo al menos 3 veces.',
    sections: [
      { name: 'Encabezado con colegiatura', priority: 'esencial', description: 'Nombre, título (CPC en Perú, CP en México/Colombia), número de colegiatura si aplica, email y LinkedIn.', example: 'Juan Pérez, CPC | Contador Público Colegiado | juan@email.com | linkedin.com/in/juan | CPC Reg. N° 12345 | Lima, Perú' },
      { name: 'Perfil contable', priority: 'esencial', description: '3 líneas que destaquen especialidad (auditoría, tributación, finanzas corporativas), industrias y principales logros.', example: 'Contador público con 5 años en auditoría externa en Big Four. Especializado en NIIF para sector minero y retail. Lideré auditorías para empresas con ventas anuales de S/ 200M+.' },
      { name: 'Experiencia laboral', priority: 'esencial', description: 'Empresa, período, rol y 3-4 logros específicos con cantidades o porcentajes.', example: 'Auditor Senior — Deloitte Perú (2021-2024): Lideré equipo de 5 auditores en 12 clientes industriales. Identifiqué irregularidades por S/ 2.3M en un cliente de manufactura. Reducí el tiempo de cierre de auditoría en 20% implementando plantillas estandarizadas.' },
      { name: 'Formación académica', priority: 'esencial', description: 'Universidad, carrera, año. Incluye maestrías o diplomados relevantes.', example: 'Maestría en Tributación — USMP Lima (2022) | Contabilidad — UNMSM Lima (2019) | Diplomado NIIF — PUCP (2020)' },
      { name: 'Herramientas y software', priority: 'esencial', description: 'ERP (SAP, Oracle), software contable local, Excel avanzado.', example: 'SAP FI/CO (avanzado), CONCAR (Perú), Excel avanzado (Power Query, tablas dinámicas), Oracle Financials, Power BI básico' },
      { name: 'Conocimientos tributarios', priority: 'recomendada', description: 'Especifica el sistema tributario de tu país que manejas.', example: 'SUNAT: IGV, impuesto a la renta, detracciones, percepciones, retenciones, precios de transferencia | Auditoría SUNAFIL' },
      { name: 'Idiomas y certificaciones', priority: 'opcional', description: 'ACCA, CPA o equivalente internacional si lo tienes. Inglés para Big Four o multinacionales.', example: 'Inglés: intermedio (B1) — lectura de reportes financieros | ACCA: 5 módulos aprobados (en progreso)' },
    ],
    keySkills: ['Contabilidad NIIF/PCGA', 'Declaraciones tributarias locales', 'SAP u otro ERP', 'Excel avanzado', 'Auditoría financiera', 'Estados financieros', 'Conciliación bancaria', 'Inglés técnico financiero'],
    commonMistakes: [
      'No especificar el sistema tributario del país que dominas',
      'CV con errores ortográficos o numéricos — es fatal para un perfil contable',
      'No mencionar el software contable específico que usaste',
      'Describir funciones genéricas sin mostrar escala (montos auditados, tamaño de empresa)',
      'No actualizar el CV con certificaciones recientes de NIIF o tributación',
    ],
    relatedProfessions: ['administrador-empresas', 'analista-financiero', 'recursos-humanos'],
    faqs: [
      { q: '¿Debo incluir el número de colegiatura en el CV?', a: 'Sí, en países donde la colegiatura es obligatoria para ejercer (Perú: CPC, Colombia: CP, Chile: CPA). El número de registro demuestra que eres contador colegiado habilitado para firmar declaraciones y estados financieros. Las empresas verifican esto. Si todavía no estás colegiado, indica que el trámite está en proceso.' },
      { q: '¿Vale la pena hacer el ACCA o CPA para el mercado LATAM?', a: 'El ACCA tiene cada vez más reconocimiento en LATAM para multinacionales y Big Four. Si tienes ambición de trabajar en empresas internacionales o en países de habla inglesa, el ACCA o CPA Internacional abre puertas que el título local no puede. El ACCA es progresivo (puedes avanzar módulo a módulo) lo que lo hace más accesible.' },
    ],
  },

  'marketing-digital': {
    slug: 'marketing-digital',
    title: 'Marketing Digital',
    emoji: '📱',
    category: 'Marketing',
    description: 'Plantilla de CV para especialistas en marketing digital, growth hackers y community managers en LATAM.',
    metaTitle: 'Plantilla CV Marketing Digital — Formato ATS 2025 LATAM',
    metaDesc: 'Plantilla de currículum vitae para especialista en marketing digital. Estructura ATS-optimizada con secciones, ejemplos de métricas y consejos para LATAM.',
    keywords: 'plantilla CV marketing digital, curriculum vitae especialista marketing, CV community manager LATAM, formato CV SEO Peru Mexico, plantilla CV performance marketing',
    cvTip: 'En marketing digital, cada punto de tu CV debe hablar de métricas. No "gestioné campañas de Google Ads" sino "gestioné presupuesto mensual de $50K USD en Google Ads logrando ROAS de 4.2x".',
    sections: [
      { name: 'Encabezado con canales', priority: 'esencial', description: 'Nombre, especialización específica, email, LinkedIn y opcionalmente portfolio o blog propio.', example: 'Sofía Martínez | Especialista en Performance Marketing | sofia@email.com | linkedin.com/in/sofia | sofiamarketing.com | Ciudad de México' },
      { name: 'Resumen con métricas clave', priority: 'esencial', description: '3-4 líneas que resuman tu especialidad, herramientas que dominas y resultados más importantes.', example: 'Especialista en paid media con 4 años gestionando presupuestos de hasta $80K/mes en Meta y Google Ads. Reduje el CPA promedio de clientes en 35%. Certificada en Google Ads y Meta Blueprint.' },
      { name: 'Experiencia con métricas', priority: 'esencial', description: 'Cada punto debe incluir presupuesto manejado, métricas antes/después o porcentaje de mejora.', example: 'Performance Manager — Agencia Digital XYZ (2022-2024): Gestioné $45K/mes en Meta Ads para 8 clientes e-commerce (ROAS promedio 3.8x). Implementé estrategia de retargeting que recuperó 22% de carritos abandonados. Reduje CPC promedio de $1.20 a $0.74 en 3 meses optimizando segmentación.' },
      { name: 'Herramientas y plataformas', priority: 'esencial', description: 'Organiza por tipo de herramienta.', example: 'Paid Media: Google Ads, Meta Ads, LinkedIn Ads | Analytics: GA4, Looker Studio, Hotjar | SEO: SEMrush, Ahrefs, Search Console | Automatización: HubSpot, Klaviyo, Mailchimp | Diseño: Canva, Figma básico' },
      { name: 'Certificaciones', priority: 'recomendada', description: 'Google, Meta, HubSpot y otras certificaciones reconocidas.', example: 'Google Ads Search & Display (2024) | Meta Blueprint Certified Media Buyer (2023) | HubSpot Inbound Marketing (2023)' },
      { name: 'Educación', priority: 'recomendada', description: 'Título universitario y cursos relevantes.', example: 'Comunicación Corporativa — UNAM Ciudad de México (2020) | Growth Marketing — Domestika (2023)' },
      { name: 'Portfolio / Proyectos', priority: 'opcional', description: 'Para quienes tienen proyectos propios: blog, canal, tienda online, experimentos de growth.', example: 'Blog de marketing digital personal — 8K visitas/mes orgánicas | Tienda Shopify gestionada con ROAS de 5.1x desde 2023' },
    ],
    keySkills: ['Google Ads', 'Meta Ads Manager', 'Google Analytics 4', 'Looker Studio/Data Studio', 'Email marketing', 'SEO básico', 'Copywriting', 'Excel para reportes', 'Inglés técnico'],
    commonMistakes: [
      'Puntos de experiencia sin métricas: "gestioné campañas" no dice nada',
      'No mencionar los presupuestos manejados',
      'Listar herramientas sin indicar el nivel de proficiencia',
      'No tener ninguna certificación — son gratis o baratas y muy valoradas',
      'Portfolio/blog desactualizado o sin métricas visibles',
    ],
    relatedProfessions: ['diseñador-grafico', 'administrador-empresas', 'analista-datos'],
    faqs: [
      { q: '¿Cuánto peso tienen las certificaciones de Google y Meta en el CV de marketing?', a: 'En LATAM, las certificaciones de Google Ads y Meta Blueprint son ampliamente reconocidas y se verifican fácilmente. Muchas ofertas de trabajo en paid media las mencionan como requerimiento. Aunque no garantizan competencia práctica, sirven como filtro básico en muchos procesos de selección y muestran compromiso con la actualización profesional.' },
      { q: '¿Es mejor CV por función (paid media, SEO) o generalista?', a: 'Para posiciones específicas en agencias o empresas grandes, el CV especializado tiene más éxito porque el reclutador busca exactamente esas habilidades. Para empresas medianas o startups que buscan un "solo marketer", el perfil generalista con fortalezas claras es más atractivo. Adapta tu CV según la descripción de la vacante específica.' },
    ],
  },

  'recursos-humanos': {
    slug: 'recursos-humanos',
    title: 'Recursos Humanos',
    emoji: '👥',
    category: 'Recursos Humanos',
    description: 'Plantilla de CV para especialistas de RRHH, reclutadores, talent acquisition y HRBP en LATAM.',
    metaTitle: 'Plantilla CV Recursos Humanos — Formato ATS 2025 LATAM',
    metaDesc: 'Plantilla de currículum vitae para recursos humanos con estructura ATS. Secciones, ejemplos y consejos para reclutadores y HRBP en Perú, México y Colombia.',
    keywords: 'plantilla CV recursos humanos, curriculum vitae RRHH, CV reclutador LATAM, formato CV talent acquisition, plantilla CV HRBP Peru Mexico Colombia',
    cvTip: 'Los recruiters de RRHH que revisan tu CV saben exactamente qué buscar. Un CV de RRHH con logros medibles (tiempo de cobertura, tasa de retención, mejora de clima) demuestra que aplicas al trabajo lo que describes en las entrevistas.',
    sections: [
      { name: 'Encabezado profesional', priority: 'esencial', description: 'Nombre, especialización (reclutamiento, HRBP, compensaciones), email y LinkedIn.', example: 'Laura Torres | Especialista en Talent Acquisition | laura@email.com | linkedin.com/in/laura | Bogotá, Colombia' },
      { name: 'Perfil de RRHH', priority: 'esencial', description: '3 líneas que destaquen tu especialidad, tipo de perfiles que reclutas o gestión que has hecho.', example: 'Especialista en reclutamiento tech con 4 años cubriendo posiciones de software engineering y data en startups. Reduje el time-to-hire de 45 a 22 días. Experta en LinkedIn Recruiter y entrevistas por competencias.' },
      { name: 'Experiencia con métricas de RRHH', priority: 'esencial', description: 'Incluye volumen de contrataciones, tiempo de cobertura, retención, NPS de candidatos.', example: 'Talent Acquisition Specialist — Startup Tech (2021-2024): Cubrí 80+ posiciones tech en 2 años (3 semanas avg time-to-hire). Implementé proceso de onboarding que mejoró retención a 90 días de 65% a 88%. Reduje el costo de contratación en 30% priorizando sourcing orgánico y referidos.' },
      { name: 'Herramientas de RRHH', priority: 'esencial', description: 'ATS, HRIS, plataformas de reclutamiento.', example: 'ATS: Workable, Greenhouse, Lever | Sourcing: LinkedIn Recruiter, Computrabajo, Bumeran | HRIS: BambooHR, Buk | Encuestas: Typeform, Google Forms, Culture Amp básico' },
      { name: 'Educación y certificaciones', priority: 'recomendada', description: 'Título y certificaciones relevantes de RRHH.', example: 'Psicología Organizacional — Universidad Javeriana, Bogotá (2020) | Certificación en Entrevistas por Competencias — DDI (2022) | Curso People Analytics — Coursera (2023)' },
      { name: 'Legislación laboral', priority: 'recomendada', description: 'Especifica qué legislación del trabajo conoces.', example: 'Código Sustantivo del Trabajo (Colombia) | Ley 100 de seguridad social | Reglamentación de contratos temporales y de aprendizaje SENA' },
    ],
    keySkills: ['LinkedIn Recruiter', 'Entrevistas por competencias (STAR)', 'ATS (Workable, Greenhouse u otro)', 'Legislación laboral local', 'Onboarding y offboarding', 'Excel para reportes de RRHH', 'Comunicación asertiva', 'Manejo de nómina básico'],
    commonMistakes: [
      'CV sin métricas de RRHH (volumen contratado, time-to-hire, retención)',
      'No mencionar qué tipos de posiciones ha reclutado (tech, ventas, manufactura)',
      'No incluir herramientas ATS o HRIS específicas usadas',
      'Sección de habilidades llena de soft skills sin evidencia ("liderazgo", "empatía")',
      'No demostrar conocimiento de la legislación laboral del país',
    ],
    relatedProfessions: ['administrador-empresas', 'psicólogo-organizacional', 'marketing-digital'],
    faqs: [
      { q: '¿Psicólogo o administrador: quién tiene más ventaja en RRHH?', a: 'Ambos perfiles tienen fortalezas distintas. Los psicólogos tienen ventaja en evaluación de candidatos, desarrollo organizacional y programas de bienestar. Los administradores tienen ventaja en compensaciones, métricas, estrategia de talento y conexión con el negocio. En la práctica, los mejores perfiles de RRHH combinan ambas dimensiones independientemente del título.' },
      { q: '¿Cuánto afecta el inglés para conseguir trabajo en RRHH en LATAM?', a: 'En empresas multinacionales y tecnológicas en LATAM, el inglés es generalmente requerido para roles de HRBP y Talent Acquisition porque los procesos se manejan en inglés y hay colaboración con HQs. Para empresas locales y medianas, el inglés es un diferenciador pero no siempre obligatorio. Para reclutadores tech que quieran atraer candidatos de EEUU o Europa, es indispensable.' },
    ],
  },

  'analista-datos': {
    slug: 'analista-datos',
    title: 'Analista de Datos / Data Science',
    emoji: '📊',
    category: 'Datos e IA',
    description: 'Plantilla de CV para analistas de datos, data scientists y perfiles de business intelligence en LATAM.',
    metaTitle: 'Plantilla CV Analista de Datos y Data Science — Formato 2025',
    metaDesc: 'Plantilla de CV para analista de datos y data scientist. Estructura ATS-optimizada con secciones de SQL, Python, herramientas BI y proyectos para LATAM.',
    keywords: 'plantilla CV analista datos, curriculum vitae data analyst, CV data science LATAM, formato CV Python SQL Peru Mexico, plantilla CV business intelligence',
    cvTip: 'Un CV de datos sin un proyecto en GitHub o Kaggle es como un médico sin historial clínico. Antes de postular, sube al menos 1 análisis completo con documentación clara.',
    sections: [
      { name: 'Encabezado con links de datos', priority: 'esencial', description: 'Nombre, título, email, LinkedIn, GitHub o Kaggle profile.', example: 'Diego Morales | Data Analyst | diego@email.com | linkedin.com/in/diego | github.com/diego | kaggle.com/diego | Santiago, Chile' },
      { name: 'Resumen técnico', priority: 'esencial', description: '3-4 líneas con stack técnico principal, dominio de negocio y el impacto más relevante.', example: 'Analista de datos con 3 años en retail y e-commerce. Stack: Python (pandas, scikit-learn), SQL, Power BI. Construí modelo de predicción de churn que redujo cancelaciones en 18% para empresa con 500K suscriptores.' },
      { name: 'Stack técnico', priority: 'esencial', description: 'Organizado por categoría, con nivel de proficiencia honesto.', example: 'Lenguajes: Python (avanzado), SQL (avanzado), R (básico) | BI: Power BI (avanzado), Tableau, Looker | Big Data: BigQuery, Spark básico | ML: scikit-learn, XGBoost | Visualización: Matplotlib, Plotly, Seaborn' },
      { name: 'Experiencia con impacto de datos', priority: 'esencial', description: 'Cada punto debe mencionar: qué datos analizaste, qué metodología usaste y qué decisión de negocio impactaste.', example: 'Data Analyst — Empresa Retail (2022-2024): Desarrollé pipeline de datos en Python (pandas + SQLAlchemy) procesando 2M registros/día. Construí dashboard de KPIs en Power BI que redujo el tiempo de reporte semanal de 8h a 30 min. Identifiqué patrón de fraude en 0.3% de transacciones ahorrando $180K anuales.' },
      { name: 'Proyectos y portafolio', priority: 'recomendada', description: 'Notebooks en GitHub o Kaggle, competencias ganadas, análisis publicados.', example: 'Predicción de precios inmobiliarios Lima — Python + XGBoost | RMSE 12% | github.com/diego/lima-housing | Kaggle: Top 15% en Titanic Survival Prediction' },
      { name: 'Educación', priority: 'recomendada', description: 'Grado base y cursos de data relevantes.', example: 'Ingeniería Estadística — PUC Chile (2021) | Data Science Professional — Coursera/IBM (2022) | Google Data Analytics Certificate (2022)' },
    ],
    keySkills: ['SQL avanzado', 'Python con pandas', 'Power BI o Tableau', 'Estadística básica', 'Excel avanzado', 'Comunicación de insights', 'Git/GitHub', 'A/B testing básico'],
    commonMistakes: [
      'Listar habilidades de ML/AI sin tener proyectos que las demuestren',
      'No tener ningún proyecto en GitHub o Kaggle',
      'SQL como única habilidad sin Python o herramientas de BI',
      'No cuantificar el impacto del análisis en decisiones de negocio',
      'Mencionar herramientas de Big Data sin proyectos que las justifiquen (Hadoop, Spark)',
    ],
    relatedProfessions: ['ingeniero-de-software', 'marketing-digital', 'administrador-empresas'],
    faqs: [
      { q: '¿Cuánto importa tener un título universitario en datos vs certificaciones?', a: 'Para data analyst, las certificaciones (Google Data Analytics, IBM Data Science, Kaggle) combinadas con un portfolio sólido pueden compensar la falta de título universitario en muchas empresas tech y startups. Para roles de data scientist sénior o investigación, el título (estadística, matemáticas, ingeniería) sigue siendo relevante en empresas tradicionales como banca y retail.' },
      { q: '¿Qué diferencia en CV un data analyst de un data scientist?', a: 'Un data analyst se enfoca en análisis descriptivo e informes: SQL, Power BI, Excel, estadística descriptiva. Un data scientist tiene perfil más técnico con ML, modelado predictivo, Python avanzado, experimentación y deployment básico de modelos. Si buscas posiciones de data science, tu CV debe mostrar proyectos de ML completos (desde datos crudos hasta predicción), no solo dashboards.' },
    ],
  },

  'primer-empleo': {
    slug: 'primer-empleo',
    title: 'Sin Experiencia / Primer Empleo',
    emoji: '🚀',
    category: 'General',
    description: 'Plantilla de CV para estudiantes y recién egresados que buscan su primer trabajo o prácticas profesionales en LATAM.',
    metaTitle: 'Plantilla CV Sin Experiencia — Primer Empleo 2025 LATAM',
    metaDesc: 'Plantilla de currículum para estudiantes y recién egresados sin experiencia. Cómo estructurar tu primer CV para conseguir trabajo o prácticas en Perú, México y Colombia.',
    keywords: 'CV sin experiencia, plantilla primer empleo, curriculum vitae estudiante universitario, CV prácticas profesionales Peru, primer trabajo recién egresado Mexico Colombia',
    cvTip: 'Sin experiencia formal, tu CV debe hacer tres cosas: destacar tu potencial, demostrar que aprendes rápido, y mostrar que has tomado iniciativa (proyectos, voluntariados, actividades extra). La actitud vende más que los años de experiencia en el primer empleo.',
    sections: [
      { name: 'Encabezado', priority: 'esencial', description: 'Nombre, título aspiracional (no pongas "sin experiencia"), email profesional, LinkedIn y ciudad.', example: 'Valentina Cruz | Bachiller en Administración de Empresas | valentina@email.com | linkedin.com/in/valentina | Lima, Perú' },
      { name: 'Objetivo profesional', priority: 'esencial', description: 'Para primer CV, el objetivo reemplaza al resumen. 2-3 líneas específicas sobre lo que buscas y lo que ofreces.', example: 'Recién egresada de Administración de Empresas PUCP buscando posición de analista comercial en empresa de consumo masivo. Ofrezco alta capacidad analítica (Excel avanzado), inglés avanzado y energía para aprender rápido en un entorno desafiante.' },
      { name: 'Educación (va primero si no hay experiencia)', priority: 'esencial', description: 'Universidad, carrera, año de egreso o egreso esperado, menciones o notas relevantes.', example: 'Administración de Empresas — PUCP Lima | Egresada diciembre 2024 | Promedio 16.2/20 | Mención: Gestión Empresarial | Quinto superior de la promoción' },
      { name: 'Habilidades y herramientas', priority: 'esencial', description: 'Sé específico y honesto. Solo incluye lo que puedes usar en un trabajo real.', example: 'Excel: tablas dinámicas, funciones avanzadas (VLOOKUP, SUMIF) | PowerPoint: presentaciones ejecutivas | Inglés: avanzado (C1, TOEFL 100) | Python: básico (pandas, matplotlib) | Canva, Notion, Trello' },
      { name: 'Proyectos académicos', priority: 'esencial', description: 'Para quienes no tienen experiencia laboral, esta es la sección más importante. 2-4 proyectos con contexto, tu rol y resultado.', example: 'Plan de negocios para expansión de PYME al mercado colombiano — Proyecto de egreso (2024): Investigué mercado, proyecté financieramente y presenté ante jury profesional. Obtuve nota 19/20 y recomendación para implementación.' },
      { name: 'Prácticas / Voluntariado / Actividades extracurriculares', priority: 'recomendada', description: 'Cualquier experiencia real: trabajos part-time, voluntariados, cargos en asociaciones estudiantiles.', example: 'Tesorera — Asociación de Estudiantes PUCP (2023): Gestioné presupuesto de S/ 15,000 para 3 eventos. Práctica universitaria — BCP (ago-nov 2024): Apoyo en análisis de datos de campañas de marketing retail.' },
      { name: 'Idiomas y certificaciones', priority: 'recomendada', description: 'Certifica tu inglés si está en nivel B2 o superior — es un diferenciador enorme.', example: 'Español: nativo | Inglés: avanzado (B2-C1) — TOEFL iBT 100/120 (2024) | Portugués: básico (A2)' },
    ],
    keySkills: ['Excel (al menos intermedio)', 'PowerPoint', 'Inglés si aplica', 'Herramienta específica del área', 'Capacidad de aprendizaje demostrada', 'Trabajo en equipo con ejemplo', 'Disponibilidad y actitud'],
    commonMistakes: [
      'Dejar el CV en 1 página a toda costa omitiendo información relevante vs. llenarlo con relleno',
      'Incluir foto informal o casual',
      'Objetivo genérico: "busco crecer profesionalmente en una empresa líder" no dice nada',
      'No incluir ningún proyecto o actividad extracurricular',
      'Email poco profesional (ej. princesa2001@hotmail.com)',
    ],
    relatedProfessions: ['ingeniero-de-software', 'marketing-digital', 'administrador-empresas'],
    faqs: [
      { q: '¿Cuánto debe medir el CV de alguien sin experiencia?', a: 'Para primer empleo en LATAM, 1 página es el estándar ideal. Si tienes muchos proyectos relevantes y actividades extracurriculares que vale la pena mostrar, 1.5 páginas es aceptable. Nunca más de 2 páginas para alguien recién egresado. La densidad y relevancia de la información importa más que la extensión.' },
      { q: '¿Debo mencionar la nota universitaria en el CV?', a: 'Sí, si es buena. En LATAM, una nota de 15+ sobre 20 (o equivalente según la escala de tu universidad) es un diferenciador en procesos de selección masivos. Las empresas grandes con programas de jóvenes profesionales (BCP, Alicorp, Interbank, FEMSA) suelen tener filtros de nota mínima. Si no tienes buena nota, no la menciones — no es obligatorio.' },
      { q: '¿Cómo consigo la primera práctica o trabajo sin experiencia?', a: 'Las mejores estrategias: 1) Postula activamente a programas de trainee/jóvenes profesionales de empresas grandes (BCP, BBVA, Interbank, Falabella, etc.). 2) Activa el modo "abierto a trabajar" en LinkedIn y completa tu perfil al 100%. 3) Habla con profesores y compañeros de años superiores para referidos. 4) Participa en ferias de empleo universitarias. 5) MoonJab puede ayudarte a preparar tu CV y entrenar para las entrevistas.' },
    ],
  },
};

export const CV_CATEGORIES = [
  { id: 'Tecnología', label: 'Tecnología', emoji: '💻' },
  { id: 'Diseño', label: 'Diseño', emoji: '🎨' },
  { id: 'Administración y Negocios', label: 'Administración', emoji: '📋' },
  { id: 'Finanzas y Contabilidad', label: 'Finanzas', emoji: '📚' },
  { id: 'Marketing', label: 'Marketing', emoji: '📱' },
  { id: 'Recursos Humanos', label: 'RRHH', emoji: '👥' },
  { id: 'Datos e IA', label: 'Datos e IA', emoji: '📊' },
  { id: 'General', label: 'Primer Empleo', emoji: '🚀' },
];
