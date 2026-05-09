export interface CountrySalary {
  currency: string;
  symbol: string;
  entry: string;
  mid: string;
  senior: string;
  average: string;
  topCompanies: string[];
  note: string;
}

export interface SalaryRole {
  slug: string;
  title: string;
  emoji: string;
  category: string;
  description: string;
  metaTitle: string;
  metaDesc: string;
  keywords: string;
  skills: string[];
  countries: Record<string, CountrySalary>;
  relatedRoles: string[];
  faqs: { q: string; a: string }[];
}

export const SALARY_ROLES: Record<string, SalaryRole> = {
  'desarrollador-web': {
    slug: 'desarrollador-web',
    title: 'Desarrollador Web',
    emoji: '💻',
    category: 'Tecnología',
    description: 'Profesional que diseña, construye y mantiene sitios web y aplicaciones web usando HTML, CSS, JavaScript y frameworks modernos.',
    metaTitle: 'Salario Desarrollador Web en LATAM 2025 — Por País',
    metaDesc: 'Cuánto gana un desarrollador web en Perú, México, Colombia, Argentina y Chile en 2025. Rangos de salario por nivel de experiencia y empresa.',
    keywords: 'salario desarrollador web, cuánto gana desarrollador web, sueldo desarrollador web Peru, sueldo desarrollador web Mexico, salario programador web LATAM',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'TypeScript', 'Git', 'SQL', 'REST APIs', 'Figma'],
    countries: {
      peru: {
        currency: 'PEN', symbol: 'S/',
        entry: 'S/ 1,800 – 2,800', mid: 'S/ 3,000 – 5,500', senior: 'S/ 6,000 – 10,000', average: 'S/ 4,200',
        topCompanies: ['BCP', 'Interbank', 'BBVA Perú', 'Belcorp', 'Saga Falabella', 'Telefónica del Perú'],
        note: 'Lima concentra +80% de empleos tech en Perú. El inglés puede incrementar el salario un 30-50%.',
      },
      mexico: {
        currency: 'MXN', symbol: '$',
        entry: '$12,000 – 18,000', mid: '$20,000 – 38,000', senior: '$40,000 – 70,000', average: '$28,000',
        topCompanies: ['OXXO Digital', 'Banorte', 'Mercado Libre México', 'Clip', 'Kueski', 'Konfío'],
        note: 'Guadalajara es el hub tech de México. El trabajo remoto para EE.UU. paga 2-3x el mercado local.',
      },
      colombia: {
        currency: 'COP', symbol: '$',
        entry: '$2.5M – 3.5M', mid: '$4M – 7M', senior: '$8M – 14M', average: '$5.5M',
        topCompanies: ['Rappi', 'Bancolombia', 'Grupo Éxito', 'Addi', 'Habi', 'Siigo'],
        note: 'Medellín lidera el ecosistema startup. Los salarios en dólares para remote jobs son muy competitivos.',
      },
      argentina: {
        currency: 'ARS', symbol: '$',
        entry: '$500K – 800K', mid: '$900K – 1.6M', senior: '$1.8M – 3M', average: '$1.2M',
        topCompanies: ['MercadoLibre', 'Globant', 'Despegar', 'Naranja X', 'Ualá', 'Auth0'],
        note: 'Argentina tiene alta demanda de remote jobs para empresas de EE.UU. pagando USD 2,000–5,000/mes.',
      },
      chile: {
        currency: 'CLP', symbol: '$',
        entry: '$700K – 1.1M', mid: '$1.2M – 2.2M', senior: '$2.4M – 4M', average: '$1.7M',
        topCompanies: ['Falabella Tech', 'Bci', 'Banco de Chile', 'Entel', 'Cornershop', 'NotCo'],
        note: 'Chile tiene el mercado IT más estable de LATAM. El trabajo remoto para Europa es creciente.',
      },
    },
    relatedRoles: ['desarrollador-software', 'diseñador-ux-ui', 'analista-de-datos'],
    faqs: [
      { q: '¿Cuánto gana un desarrollador web junior en LATAM?', a: 'Un desarrollador web junior en LATAM gana entre S/ 1,800 en Perú y $12,000 MXN en México. En Argentina y Chile, los salarios en moneda local son equivalentes a USD 400-700 mensuales. Los remote jobs para empresas de EE.UU. o Europa pueden pagar 3-5x más.' },
      { q: '¿Qué tecnologías debe dominar un desarrollador web para ganar más?', a: 'React, TypeScript y Node.js son las habilidades con mayor impacto salarial en 2025. Los frameworks como Next.js y Astro están muy demandados. Para back-end, conocer bases de datos (PostgreSQL, MongoDB) y servicios cloud (AWS, GCP) incrementa significativamente el salario.' },
      { q: '¿Vale la pena ser desarrollador web sin título universitario en LATAM?', a: 'Sí. Es una de las pocas carreras en LATAM donde el portfolio y las habilidades demostradas superan al título universitario. Bootcamps como Platzi, Coderhouse y Henry han formado miles de desarrolladores empleados en empresas top. Un GitHub activo y proyectos reales son lo más importante.' },
      { q: '¿Cómo consigo trabajo remoto como desarrollador web desde LATAM?', a: 'Las mejores plataformas para trabajo remoto internacional son LinkedIn (Jobs > Remote), Remote OK, We Work Remotely, Toptal y Andela. Necesitas inglés intermedio-avanzado, portfolio público en GitHub, y capacidad de comunicarte en reuniones virtuales. Plataformas como Deel y Wise facilitan el cobro en USD.' },
    ],
  },

  'desarrollador-software': {
    slug: 'desarrollador-software',
    title: 'Desarrollador de Software',
    emoji: '⚙️',
    category: 'Tecnología',
    description: 'Profesional especializado en diseñar, programar y mantener sistemas de software, aplicaciones móviles o de escritorio.',
    metaTitle: 'Salario Desarrollador de Software en LATAM 2025',
    metaDesc: 'Cuánto gana un desarrollador de software en Perú, México, Colombia, Argentina y Chile. Rangos salariales entry, mid y senior con datos reales 2025.',
    keywords: 'salario desarrollador software, sueldo programador LATAM, cuánto gana programador Peru, salario ingeniero software Mexico, sueldo desarrollador Colombia',
    skills: ['Python', 'Java', 'JavaScript', 'C#', 'Go', 'Microservicios', 'Docker', 'Kubernetes', 'AWS', 'CI/CD'],
    countries: {
      peru: {
        currency: 'PEN', symbol: 'S/',
        entry: 'S/ 2,200 – 3,500', mid: 'S/ 4,000 – 7,000', senior: 'S/ 7,500 – 14,000', average: 'S/ 5,500',
        topCompanies: ['Interbank', 'BCP Tech', 'Niubiz', 'Culqi', 'Yape', 'Rappi Perú'],
        note: 'Las fintechs peruanas (Yape, Culqi, Niubiz) son las que mejor pagan a desarrolladores en el país.',
      },
      mexico: {
        currency: 'MXN', symbol: '$',
        entry: '$15,000 – 22,000', mid: '$25,000 – 45,000', senior: '$50,000 – 90,000', average: '$35,000',
        topCompanies: ['BBVA México Tech', 'Kavak', 'Clip', 'Clara', 'Conekta', 'Mifel'],
        note: 'México tiene el mayor mercado de software de LATAM. Guadalajara y CDMX concentran las oportunidades.',
      },
      colombia: {
        currency: 'COP', symbol: '$',
        entry: '$3M – 4.5M', mid: '$5M – 9M', senior: '$10M – 18M', average: '$7M',
        topCompanies: ['Rappi', 'Bancolombia', 'Nequi', 'Bold', 'Addi', 'Frubana'],
        note: 'Colombia tiene el ecosistema de startups tech más dinámico de LATAM, con Rappi como referente.',
      },
      argentina: {
        currency: 'ARS', symbol: '$',
        entry: '$700K – 1M', mid: '$1.2M – 2.2M', senior: '$2.5M – 4.5M', average: '$1.7M',
        topCompanies: ['MercadoLibre', 'Globant', 'Santander Tech', 'MODO', 'Ualá', 'Lemon Cash'],
        note: 'Argentina exporta talento tech al mundo. El trabajo para empresas de EEUU puede pagar USD 3,000–8,000/mes.',
      },
      chile: {
        currency: 'CLP', symbol: '$',
        entry: '$900K – 1.4M', mid: '$1.6M – 2.8M', senior: '$3M – 5.5M', average: '$2.2M',
        topCompanies: ['Falabella Tech', 'BCI Tech', 'Fintual', 'Buk', 'Houm', 'Cumplo'],
        note: 'Las fintechs chilenas (Fintual, Buk) son líderes en remuneración. Work remote para Europa es frecuente.',
      },
    },
    relatedRoles: ['desarrollador-web', 'analista-de-datos', 'ingeniero-devops'],
    faqs: [
      { q: '¿Qué diferencia hay entre desarrollador web y desarrollador de software en salario?', a: 'En LATAM, los desarrolladores de software (back-end, sistemas, mobile) generalmente ganan 15-25% más que los desarrolladores web front-end. Un desarrollador full-stack o de software con especialización en sistemas distribuidos, arquitectura cloud o móvil accede a los rangos salariales más altos.' },
      { q: '¿Cuántos años de experiencia se necesita para ser desarrollador senior?', a: 'Típicamente 4-6 años de experiencia real en proyectos. Sin embargo, en LATAM muchos developers llegan a posiciones senior en 3 años si tienen un portfolio sólido, contribuciones a proyectos open source y habilidades en arquitectura de sistemas. La calidad del trabajo pesa más que los años.' },
      { q: '¿Python o Java: cuál lenguaje tiene mejor salario en LATAM?', a: 'Java históricamente paga mejor en corporativos y banca (BCP, Bancolombia, BBVA). Python domina en data science, IA y startups tech, con salarios equivalentes o superiores. En 2025, los desarrolladores con Python + ML/AI skills son los mejor pagados. Go está creciendo rápido en empresas de alto crecimiento.' },
      { q: '¿Cómo llego al salario senior desde junior en el menor tiempo?', a: 'La estrategia más efectiva: especialízate en una tecnología de alta demanda (React/Node, Python/Django, o Java Spring), construye proyectos reales que demuestren impacto cuantificable, consigue tu primera oportunidad en una empresa que pague bien aunque sea media empresa, y cambia de empresa cada 18-24 meses. Cambiar de empresa suele dar aumentos del 30-50%.' },
    ],
  },

  'analista-de-datos': {
    slug: 'analista-de-datos',
    title: 'Analista de Datos',
    emoji: '📊',
    category: 'Datos e IA',
    description: 'Profesional que recopila, procesa y analiza grandes volúmenes de datos para generar insights y apoyar decisiones empresariales.',
    metaTitle: 'Salario Analista de Datos en LATAM 2025 — Rango por País',
    metaDesc: 'Cuánto gana un analista de datos en Perú, México, Colombia, Argentina y Chile en 2025. Incluye roles de data science y business intelligence.',
    keywords: 'salario analista de datos, sueldo data analyst LATAM, cuánto gana data scientist Peru, salario business intelligence Mexico, sueldo analista datos Colombia',
    skills: ['Python', 'SQL', 'Excel avanzado', 'Power BI', 'Tableau', 'Pandas', 'Estadística', 'Machine Learning', 'BigQuery', 'R'],
    countries: {
      peru: {
        currency: 'PEN', symbol: 'S/',
        entry: 'S/ 2,000 – 3,200', mid: 'S/ 3,500 – 6,000', senior: 'S/ 6,500 – 11,000', average: 'S/ 4,500',
        topCompanies: ['BCP', 'BBVA Perú', 'Falabella Perú', 'Alicorp', 'Backus', 'Claro Perú'],
        note: 'Power BI y SQL son requisito mínimo. Python con pandas separa analistas junior de mid-senior.',
      },
      mexico: {
        currency: 'MXN', symbol: '$',
        entry: '$14,000 – 20,000', mid: '$22,000 – 40,000', senior: '$45,000 – 75,000', average: '$30,000',
        topCompanies: ['OXXO Analytics', 'Grupo Bimbo', 'Banorte', 'Walmart Mexico', 'Cemex', 'Liverpool'],
        note: 'Las empresas de retail (OXXO, Walmart, Liverpool) son grandes empleadores de analistas en México.',
      },
      colombia: {
        currency: 'COP', symbol: '$',
        entry: '$2.8M – 4M', mid: '$4.5M – 8M', senior: '$9M – 16M', average: '$6M',
        topCompanies: ['Bancolombia', 'Ecopetrol', 'Grupo Éxito', 'Falabella Colombia', 'Claro Colombia', 'Rappi'],
        note: 'El sector energético (Ecopetrol) y financiero son los mejor pagadores de data en Colombia.',
      },
      argentina: {
        currency: 'ARS', symbol: '$',
        entry: '$600K – 900K', mid: '$1M – 1.8M', senior: '$2M – 3.5M', average: '$1.4M',
        topCompanies: ['MercadoLibre', 'Globant', 'OLX', 'Despegar', 'Banco Galicia', 'Accenture Argentina'],
        note: 'MercadoLibre y Globant son los referentes de mejores salarios en data para Argentina.',
      },
      chile: {
        currency: 'CLP', symbol: '$',
        entry: '$750K – 1.2M', mid: '$1.3M – 2.4M', senior: '$2.6M – 4.5M', average: '$1.9M',
        topCompanies: ['Falabella', 'Cencosud', 'Entel', 'BCI', 'Banco de Chile', 'Fintual'],
        note: 'El retail (Falabella, Cencosud) y finanzas son los principales empleadores de data en Chile.',
      },
    },
    relatedRoles: ['desarrollador-software', 'cientifico-de-datos', 'ingeniero-de-datos'],
    faqs: [
      { q: '¿Qué estudiar para ser analista de datos en LATAM?', a: 'Las carreras más comunes son Estadística, Matemáticas, Economía, Ingeniería o Sistemas. Sin embargo, con bootcamps o cursos de SQL, Python y visualización de datos (Power BI, Tableau), es posible entrar al campo. Un portafolio en Kaggle o proyectos reales con datos públicos puede sustituir el título en muchas empresas.' },
      { q: '¿Cuánto puede ganar un data scientist senior en LATAM?', a: 'Un data scientist senior con experiencia en ML/AI puede ganar entre S/ 12,000 en Perú, $80,000 MXN en México, $20M COP en Colombia, hasta $5M ARS en Argentina. Para empresas internacionales o trabajo remoto para EEUU, los rangos son USD 4,000–10,000 mensuales.' },
      { q: '¿Power BI o Tableau: cuál aprender primero?', a: 'Power BI tiene más demanda en LATAM porque es parte del ecosistema Microsoft que dominan las empresas medianas y grandes de la región. Tableau es más popular en corporativos multinacionales y empresas tech. Si recién empiezas, aprende Power BI primero — hay más vacantes y cursos en español.' },
      { q: '¿Qué tan importante es el inglés para analistas de datos en LATAM?', a: 'El inglés abre acceso a documentación actualizada, cursos avanzados, Kaggle competitions y trabajo remoto internacional. Para posiciones en empresas locales no siempre es requerido, pero para startups tech, multinacionales y trabajo freelance global, el inglés técnico es prácticamente obligatorio.' },
    ],
  },

  'diseñador-ux-ui': {
    slug: 'diseñador-ux-ui',
    title: 'Diseñador UX/UI',
    emoji: '🎨',
    category: 'Diseño',
    description: 'Profesional que diseña la experiencia de usuario e interfaces visuales para aplicaciones web y móviles, combinando investigación, diseño visual y prototipado.',
    metaTitle: 'Salario Diseñador UX/UI en LATAM 2025 — Por País',
    metaDesc: 'Cuánto gana un diseñador UX/UI en Perú, México, Colombia, Argentina y Chile en 2025. Rangos de salario para junior, mid y senior.',
    keywords: 'salario diseñador UX UI, sueldo UX designer LATAM, cuánto gana diseñador UI Peru, salario product designer Mexico, sueldo UX Colombia',
    skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research', 'Usability Testing', 'Design Systems', 'CSS básico', 'HTML básico', 'Notion', 'Maze'],
    countries: {
      peru: {
        currency: 'PEN', symbol: 'S/',
        entry: 'S/ 1,600 – 2,600', mid: 'S/ 2,800 – 5,000', senior: 'S/ 5,500 – 9,000', average: 'S/ 3,800',
        topCompanies: ['Yape', 'Culqi', 'Interbank', 'BCP', 'Falabella Perú', 'Rimac Seguros'],
        note: 'Las fintechs peruanas son los mejores empleadores de UX/UI. Figma es requisito en todas las empresas.',
      },
      mexico: {
        currency: 'MXN', symbol: '$',
        entry: '$11,000 – 17,000', mid: '$18,000 – 32,000', senior: '$35,000 – 60,000', average: '$25,000',
        topCompanies: ['Clip', 'Kavak', 'Spin by OXXO', 'BBVA México', 'Rappi México', 'Kueski'],
        note: 'Product Designer es el título más buscado en México. Research + design skills elevan el salario.',
      },
      colombia: {
        currency: 'COP', symbol: '$',
        entry: '$2.2M – 3.2M', mid: '$3.5M – 6.5M', senior: '$7M – 12M', average: '$5M',
        topCompanies: ['Rappi', 'Addi', 'Bancolombia Digital', 'Bold', 'Nequi', 'Frubana'],
        note: 'Medellín tiene muchas startups buscando UX/UI. El portfolio en Behance o Dribbble es fundamental.',
      },
      argentina: {
        currency: 'ARS', symbol: '$',
        entry: '$500K – 750K', mid: '$800K – 1.5M', senior: '$1.6M – 2.8M', average: '$1.1M',
        topCompanies: ['MercadoLibre', 'Globant', 'Naranja X', 'Ualá', 'Despegar', 'Moddo'],
        note: 'Argentina tiene una escena de diseño muy activa. Remote jobs para EEUU/Europa pagan USD 2,500–5,000.',
      },
      chile: {
        currency: 'CLP', symbol: '$',
        entry: '$650K – 1M', mid: '$1.1M – 2M', senior: '$2.2M – 3.8M', average: '$1.5M',
        topCompanies: ['Falabella Digital', 'Buk', 'Fintual', 'BCI Digital', 'Cornershop', 'NotCo'],
        note: 'Chile valora mucho la investigación de usuarios. Un perfil con UX research skills gana 20% más.',
      },
    },
    relatedRoles: ['desarrollador-web', 'product-manager', 'diseñador-grafico'],
    faqs: [
      { q: '¿Qué herramientas debe dominar un diseñador UX/UI en 2025?', a: 'Figma es el estándar de la industria en 2025 — es prácticamente obligatorio. Complementa con conocimientos de prototipado avanzado, design systems, y herramientas de investigación como Maze o Hotjar. Saber HTML/CSS básico aumenta mucho tu valor. Para portfolios, usa Behance o crea tu propio sitio web.' },
      { q: '¿Se puede ser diseñador UX/UI sin estudiar diseño gráfico?', a: 'Sí. Muchos UX/UI designers en LATAM vienen de psicología, comunicación, sistemas o incluso carreras no relacionadas. Lo que importa es el portfolio: proyectos de diseño reales, proceso documentado y resultados medibles. Bootcamps como Laboratoria, Coderhouse o Google UX Certificate son buenas puertas de entrada.' },
      { q: '¿Cuánto paga el trabajo remoto para un diseñador UX/UI de LATAM?', a: 'Los remote jobs para empresas de EE.UU. o Europa pagan típicamente USD 2,000-5,000 mensuales para mid-level y USD 5,000-9,000 para senior. Plataformas como Toptal, Dribbble Jobs y LinkedIn son las mejores fuentes. El inglés es generalmente requerido para estos roles.' },
      { q: '¿Qué es más importante para conseguir trabajo: el portfolio o el título?', a: 'El portfolio es sin dudas más importante en diseño UX/UI. Los reclutadores en LATAM piden ver casos de estudio completos: el problema, tu proceso de investigación, las iteraciones de diseño y los resultados. Un título complementa pero no reemplaza un portfolio sólido con 3-5 proyectos bien documentados.' },
    ],
  },

  'marketing-digital': {
    slug: 'marketing-digital',
    title: 'Especialista en Marketing Digital',
    emoji: '📱',
    category: 'Marketing',
    description: 'Profesional que gestiona estrategias de marketing online incluyendo SEO, redes sociales, email marketing, paid media y analítica digital.',
    metaTitle: 'Salario Marketing Digital en LATAM 2025 — Por País',
    metaDesc: 'Cuánto gana un especialista en marketing digital en Perú, México, Colombia, Argentina y Chile. Rangos salariales para todos los niveles en 2025.',
    keywords: 'salario marketing digital, sueldo especialista marketing LATAM, cuánto gana community manager Peru, salario SEO Mexico, sueldo paid media Colombia',
    skills: ['Google Ads', 'Meta Ads', 'SEO', 'Google Analytics 4', 'Email Marketing', 'CRO', 'Copywriting', 'Social Media', 'HubSpot', 'Figma básico'],
    countries: {
      peru: {
        currency: 'PEN', symbol: 'S/',
        entry: 'S/ 1,400 – 2,200', mid: 'S/ 2,500 – 4,500', senior: 'S/ 5,000 – 8,500', average: 'S/ 3,200',
        topCompanies: ['Falabella Perú', 'Ripley', 'Saga', 'Belcorp', 'Alicorp', 'Claro Perú'],
        note: 'El paid media (Google y Meta Ads) tiene la mayor demanda. SEO specialists son escasos y bien pagados.',
      },
      mexico: {
        currency: 'MXN', symbol: '$',
        entry: '$9,000 – 14,000', mid: '$15,000 – 28,000', senior: '$30,000 – 55,000', average: '$21,000',
        topCompanies: ['Televisa Digital', 'Walmart México Digital', 'BBVA México', 'Oxxo', 'Heineken México', 'Grupo Bimbo'],
        note: 'México tiene el mercado de marketing digital más grande de LATAM. Performance marketing paga más.',
      },
      colombia: {
        currency: 'COP', symbol: '$',
        entry: '$2M – 3M', mid: '$3.5M – 6M', senior: '$6.5M – 11M', average: '$4.5M',
        topCompanies: ['Rappi', 'Falabella Colombia', 'Grupo Éxito', 'Claro Colombia', 'Avianca', 'Corona'],
        note: 'Growth marketing y CRO son las habilidades con mayor premium salarial en Colombia.',
      },
      argentina: {
        currency: 'ARS', symbol: '$',
        entry: '$450K – 680K', mid: '$750K – 1.3M', senior: '$1.4M – 2.5M', average: '$950K',
        topCompanies: ['MercadoLibre', 'Despegar', 'OLX', 'Grupo Clarín Digital', 'Telecom Argentina', 'Lemon Cash'],
        note: 'Argentina tiene agencias de marketing digital muy competitivas que exportan servicios a toda LATAM.',
      },
      chile: {
        currency: 'CLP', symbol: '$',
        entry: '$550K – 850K', mid: '$950K – 1.8M', senior: '$2M – 3.5M', average: '$1.3M',
        topCompanies: ['Falabella', 'Cencosud Digital', 'Entel', 'Ripley Chile', 'Fintual', 'Cruz Verde'],
        note: 'El retail digital domina la demanda de marketing en Chile. Performance marketing es lo más buscado.',
      },
    },
    relatedRoles: ['diseñador-ux-ui', 'analista-de-datos', 'product-manager'],
    faqs: [
      { q: '¿Qué especialización de marketing digital paga más en LATAM?', a: 'Performance marketing (Google Ads + Meta Ads) y Growth Marketing son las especialidades con mejor salario en LATAM. Un experto en paid media que puede demostrar ROAS y reducción de CAC puede ganar 40-60% más que un community manager genérico. SEO técnico también tiene premium significativo por la escasez de profesionales calificados.' },
      { q: '¿Se necesita título universitario para trabajar en marketing digital?', a: 'No necesariamente. El marketing digital valora resultados medibles sobre títulos. Certificaciones de Google (Google Ads, Analytics), Meta Blueprint y HubSpot son reconocidas en LATAM. Un portfolio con campañas reales que muestren métricas (CTR, CPC, ROAS, conversiones) es más valioso que muchos títulos.' },
      { q: '¿Cuánto paga la agencia vs empresa directa en marketing digital?', a: 'Las empresas directas (in-house) en LATAM generalmente pagan 20-30% más que las agencias para el mismo nivel. Las agencias ofrecen exposición a múltiples industrias y clientes, lo que acelera el aprendizaje. La estrategia común: empezar en agencia 2-3 años para construir portfolio, luego saltar a empresa directa.' },
      { q: '¿Qué tan importante es saber de datos para un marketer en 2025?', a: 'Muy importante. El marketing sin datos es solo gasto. Los marketers que saben usar Google Analytics 4, crear dashboards en Looker Studio o Data Studio, y entender estadísticas básicas ganan consistentemente más. Python básico o SQL para analizar datos de campañas es un diferenciador creciente en el mercado LATAM.' },
    ],
  },

  'contador': {
    slug: 'contador',
    title: 'Contador / Contador Público',
    emoji: '📚',
    category: 'Finanzas y Contabilidad',
    description: 'Profesional que registra, analiza y reporta transacciones financieras, prepara estados financieros y asegura el cumplimiento tributario.',
    metaTitle: 'Salario Contador en LATAM 2025 — Perú, México, Colombia y más',
    metaDesc: 'Cuánto gana un contador en Perú, México, Colombia, Argentina y Chile. Rangos de sueldo para contador junior, senior y gerente contable en 2025.',
    keywords: 'salario contador, sueldo contador LATAM, cuánto gana contador Peru, salario contador publico Mexico, sueldo contador Colombia, CPC Peru',
    skills: ['Contabilidad General', 'Excel avanzado', 'SAP', 'NIIF/IFRS', 'Declaraciones tributarias', 'Auditoría', 'Estados Financieros', 'Power BI', 'ERP'],
    countries: {
      peru: {
        currency: 'PEN', symbol: 'S/',
        entry: 'S/ 1,500 – 2,400', mid: 'S/ 2,600 – 4,500', senior: 'S/ 5,000 – 9,000', average: 'S/ 3,500',
        topCompanies: ['Deloitte Perú', 'PwC Perú', 'EY Perú', 'KPMG Perú', 'BCP', 'Alicorp'],
        note: 'Las Big Four (Deloitte, PwC, EY, KPMG) pagan más pero son exigentes. SUNAT lleva la tributación.',
      },
      mexico: {
        currency: 'MXN', symbol: '$',
        entry: '$10,000 – 16,000', mid: '$17,000 – 30,000', senior: '$32,000 – 60,000', average: '$23,000',
        topCompanies: ['Deloitte México', 'KPMG México', 'Grupo Bimbo', 'FEMSA', 'Cemex', 'Banco Santander México'],
        note: 'El SAT es el organismo tributario. Conocer el SAP y declaraciones SAT es básico en el mercado.',
      },
      colombia: {
        currency: 'COP', symbol: '$',
        entry: '$2M – 3M', mid: '$3.5M – 6M', senior: '$6.5M – 12M', average: '$4.8M',
        topCompanies: ['Deloitte Colombia', 'EY Colombia', 'Ecopetrol', 'Bancolombia', 'Grupo Éxito', 'Avianca'],
        note: 'La DIAN controla tributos. Experiencia en NIIF y SAP son los diferenciadores más valorados.',
      },
      argentina: {
        currency: 'ARS', symbol: '$',
        entry: '$450K – 700K', mid: '$800K – 1.4M', senior: '$1.5M – 2.8M', average: '$1.1M',
        topCompanies: ['Deloitte Argentina', 'PwC Argentina', 'MercadoLibre', 'YPF', 'Grupo Clarín', 'Banco Galicia'],
        note: 'La inflación en Argentina hace importante actualizar constantemente los conocimientos tributarios.',
      },
      chile: {
        currency: 'CLP', symbol: '$',
        entry: '$600K – 950K', mid: '$1M – 1.9M', senior: '$2M – 3.8M', average: '$1.5M',
        topCompanies: ['Deloitte Chile', 'PwC Chile', 'Falabella', 'Codelco', 'LATAM Airlines', 'Cencosud'],
        note: 'El SII regula tributación. Chile tiene mercado contable estable y las Big 4 pagan muy bien.',
      },
    },
    relatedRoles: ['analista-de-datos', 'auditor', 'gerente-financiero'],
    faqs: [
      { q: '¿Cuánto gana un recién egresado de contabilidad en LATAM?', a: 'Un contador recién egresado gana entre S/ 1,500 en Perú y $10,000 MXN en México. En Chile los entry-level rondan $600,000 CLP. Los mejores sueldos iniciales están en las Big Four (Deloitte, PwC, EY, KPMG), aunque a cambio de jornadas intensas. Después de 2-3 años en una Big Four, el salario puede duplicarse.' },
      { q: '¿Vale la pena colegiarse como contador en LATAM?', a: 'Sí, generalmente. La colegiación es obligatoria para firmar estados financieros y dictámenes en la mayoría de países LATAM. En Perú (CPC), México (CP), Colombia (CP) y Chile, el contador colegiado accede a más oportunidades, puede ejercer de forma independiente y tiene mayor credibilidad ante clientes y empleadores.' },
      { q: '¿Qué software debe dominar un contador en 2025?', a: 'SAP es el ERP más demandado en grandes empresas. Excel avanzado (tablas dinámicas, VLOOKUP, Power Query) sigue siendo esencial. Power BI para reportes. Los software tributarios locales son obligatorios: SUNAT SOL en Perú, el portal SAT en México, DIAN en Colombia. El contador que domina automatización y data tiene gran ventaja.' },
      { q: '¿Puede un contador hacer trabajo freelance y ganar bien en LATAM?', a: 'Sí. El outsourcing contable y la asesoría tributaria freelance tienen mucha demanda de PYMEs y emprendedores en toda LATAM. Un contador freelance experimentado en LATAM puede ganar 50-100% más que en empleo dependiente. Plataformas como Workana, Freelancer y LinkedIn son buenas para conseguir clientes. Las declaraciones mensuales de impuestos son la base del trabajo freelance contable.' },
    ],
  },

  'recursos-humanos': {
    slug: 'recursos-humanos',
    title: 'Especialista en Recursos Humanos',
    emoji: '👥',
    category: 'Recursos Humanos',
    description: 'Profesional que gestiona reclutamiento, selección, desarrollo de talento, compensaciones y cultura organizacional en empresas.',
    metaTitle: 'Salario Recursos Humanos en LATAM 2025 — Por País',
    metaDesc: 'Cuánto gana un especialista de recursos humanos o HRBP en Perú, México, Colombia, Argentina y Chile en 2025. Rangos salariales actualizados.',
    keywords: 'salario recursos humanos, sueldo RRHH LATAM, cuánto gana analista RRHH Peru, salario reclutador Mexico, sueldo HR Colombia, HRBP LATAM',
    skills: ['Reclutamiento', 'Selección de personal', 'Entrevistas por competencias', 'Onboarding', 'SAP HR', 'Nómina', 'Clima laboral', 'Capacitación', 'LinkedIn Recruiter', 'Excel'],
    countries: {
      peru: {
        currency: 'PEN', symbol: 'S/',
        entry: 'S/ 1,400 – 2,200', mid: 'S/ 2,400 – 4,200', senior: 'S/ 4,500 – 8,000', average: 'S/ 3,000',
        topCompanies: ['BCP', 'Alicorp', 'Intercorp', 'Falabella Perú', 'BBVA Perú', 'Adecco Perú'],
        note: 'El reclutamiento masivo en retail y banca domina la demanda de RRHH en Lima.',
      },
      mexico: {
        currency: 'MXN', symbol: '$',
        entry: '$9,000 – 14,000', mid: '$15,000 – 28,000', senior: '$30,000 – 55,000', average: '$20,000',
        topCompanies: ['FEMSA', 'Walmart México', 'Grupo Bimbo', 'Manpower México', 'Heineken México', 'Cemex'],
        note: 'México tiene las empresas más grandes de LATAM en manufactura, que emplean muchos perfiles de RRHH.',
      },
      colombia: {
        currency: 'COP', symbol: '$',
        entry: '$1.8M – 2.8M', mid: '$3M – 5.5M', senior: '$6M – 10M', average: '$4M',
        topCompanies: ['Bancolombia', 'Ecopetrol', 'Grupo Éxito', 'Avianca', 'Carvajal', 'ManpowerGroup Colombia'],
        note: 'Los HRBP (HR Business Partners) en empresas grandes de Colombia ganan significativamente más.',
      },
      argentina: {
        currency: 'ARS', symbol: '$',
        entry: '$400K – 620K', mid: '$700K – 1.2M', senior: '$1.3M – 2.2M', average: '$900K',
        topCompanies: ['MercadoLibre', 'Globant', 'Grupo Clarín', 'YPF', 'Accenture Argentina', 'Telecom Argentina'],
        note: 'Las empresas tech argentinas tienen los mejores paquetes de compensación total para RRHH.',
      },
      chile: {
        currency: 'CLP', symbol: '$',
        entry: '$550K – 850K', mid: '$900K – 1.7M', senior: '$1.8M – 3.2M', average: '$1.3M',
        topCompanies: ['Falabella', 'LATAM Airlines', 'Cencosud', 'Codelco', 'BCI', 'Entel'],
        note: 'Las empresas mineras (Codelco) y retail (Falabella, Cencosud) son los principales empleadores de RRHH en Chile.',
      },
    },
    relatedRoles: ['psicólogo-organizacional', 'administrador-empresas', 'marketing-digital'],
    faqs: [
      { q: '¿Qué carrera estudiar para trabajar en recursos humanos en LATAM?', a: 'Las carreras más comunes son Psicología, Administración de Empresas y Relaciones Industriales. Sin embargo, comunicadores, educadores y abogados también tienen camino en RRHH. Lo importante es tener habilidades de comunicación, empatía, y dominio de herramientas de gestión de talento. Certificaciones como SHRM o cursos de HR Analytics son muy valorados.' },
      { q: '¿Cuánto gana un reclutador en LATAM comparado con un HRBP?', a: 'Un reclutador mid-level gana 20-30% menos que un HRBP (HR Business Partner) del mismo nivel. Los HRBP tienen mayor responsabilidad estratégica y mayor impacto en la organización. En empresas grandes de LATAM, la progresión típica es: Asistente → Analista → Especialista → HRBP → Gerente de RRHH.' },
      { q: '¿El people analytics cambia el salario de un profesional de RRHH?', a: 'Sí, significativamente. Los profesionales de RRHH con skills de people analytics (Excel avanzado, Power BI, SQL básico) ganan entre 25-40% más que sus pares sin estas habilidades. La capacidad de medir el impacto de los programas de RRHH con datos es uno de los diferenciales más valorados en 2025.' },
      { q: '¿Es mejor especializarse en reclutamiento tech o generalista RRHH?', a: 'El reclutamiento tech tiene premium salarial alto en LATAM por la escasez de buenos technical recruiters. Un recruiter que entiende de tecnología y puede evaluar perfiles de desarrolladores en Perú, Colombia o Chile puede ganar 30-50% más que un reclutador generalista. Para empresas tech en crecimiento, es uno de los perfiles más buscados.' },
    ],
  },

  'ingeniero-civil': {
    slug: 'ingeniero-civil',
    title: 'Ingeniero Civil',
    emoji: '🏗️',
    category: 'Ingeniería',
    description: 'Profesional que diseña, planifica y supervisa la construcción de infraestructuras como edificios, puentes, carreteras y sistemas de agua.',
    metaTitle: 'Salario Ingeniero Civil en LATAM 2025 — Por País',
    metaDesc: 'Cuánto gana un ingeniero civil en Perú, México, Colombia, Argentina y Chile en 2025. Rangos salariales para civil junior, mid y senior por especialización.',
    keywords: 'salario ingeniero civil, sueldo ingeniero civil Peru, cuánto gana ingeniero civil Mexico, salario civil Colombia, sueldo ingeniería civil LATAM 2025',
    skills: ['AutoCAD', 'Revit', 'S10 (Perú)', 'MS Project', 'ETABS', 'SAP2000', 'BIM', 'Presupuestos', 'Gestión de obras', 'Excel'],
    countries: {
      peru: {
        currency: 'PEN', symbol: 'S/',
        entry: 'S/ 2,000 – 3,200', mid: 'S/ 3,500 – 6,500', senior: 'S/ 7,000 – 14,000', average: 'S/ 5,000',
        topCompanies: ['COSAPI', 'JJC Contratistas', 'GyM', 'Graña y Montero', 'Odebrecht Perú', 'Yura'],
        note: 'La minería y grandes obras de infraestructura pagan las mejores remuneraciones en ingeniería civil peruana.',
      },
      mexico: {
        currency: 'MXN', symbol: '$',
        entry: '$12,000 – 18,000', mid: '$20,000 – 38,000', senior: '$40,000 – 75,000', average: '$28,000',
        topCompanies: ['Cemex', 'ICA', 'Grupo México', 'CFE', 'PEMEX', 'Carso Infraestructura'],
        note: 'México invierte fuertemente en infraestructura. Los proyectos del tren maya y el NAIM generan alta demanda.',
      },
      colombia: {
        currency: 'COP', symbol: '$',
        entry: '$2.5M – 3.8M', mid: '$4M – 7.5M', senior: '$8M – 16M', average: '$5.8M',
        topCompanies: ['Ecopetrol', 'Conconcreto', 'Conciviles', 'Pavimentos Colombia', 'EPM', 'CONALVIAS'],
        note: 'Colombia tiene proyectos de 4G viales en ejecución. Los ingenieros de infraestructura vial tienen alta demanda.',
      },
      argentina: {
        currency: 'ARS', symbol: '$',
        entry: '$600K – 900K', mid: '$1M – 1.9M', senior: '$2M – 3.8M', average: '$1.5M',
        topCompanies: ['YPF', 'Techint', 'IMPSA', 'AySA', 'Loma Negra', 'Electroingeniería'],
        note: 'YPF y el sector energético pagan los mejores salarios para civiles en Argentina.',
      },
      chile: {
        currency: 'CLP', symbol: '$',
        entry: '$900K – 1.4M', mid: '$1.5M – 2.8M', senior: '$3M – 5.5M', average: '$2.2M',
        topCompanies: ['Codelco', 'BHP', 'Anglo American Chile', 'BESALCO', 'Vial & Vives', 'Echeverría Izquierdo'],
        note: 'La minería (Codelco, BHP) paga los sueldos más altos para civiles en Chile, especialmente en el norte.',
      },
    },
    relatedRoles: ['arquitecto', 'ingeniero-estructural', 'project-manager'],
    faqs: [
      { q: '¿Cuánto gana un ingeniero civil recién egresado en LATAM?', a: 'Un ingeniero civil recién egresado puede esperar entre S/ 2,000 en Perú, $12,000 MXN en México, $2.5M COP en Colombia o $900,000 CLP en Chile. La especialización (estructuras, hidráulica, vial, geotecnia) y el sector (construcción, minería, oil & gas) influyen enormemente en el salario desde los primeros años.' },
      { q: '¿Qué especialización de ingeniería civil tiene mejor salario en LATAM?', a: 'Geotecnia y obras subterráneas tienen los mejores sueldos en minería (Chile, Perú). Estructuras y cimentaciones para proyectos grandes también bien pagados. Oil & gas (Colombia, México) paga premiums significativos para civiles con experiencia en esa industria. BIM (Building Information Modeling) es el skill digital con mayor impacto salarial transversal.' },
      { q: '¿Vale más estudiar ingeniería civil o arquitectura en LATAM?', a: 'Depende del interés. Los ingenieros civiles tienen mayor salario promedio que los arquitectos en LATAM, especialmente en sectores como minería, infraestructura y energía. Los arquitectos tienen más variedad de roles (diseño, proyectos, gestión inmobiliaria) pero con menor techo salarial típico. La especialización en BIM beneficia a ambos.' },
      { q: '¿Cómo acelero mi crecimiento salarial como ingeniero civil joven?', a: 'Especialízate temprano (no seas generalista), obtén certificaciones en software (AutoCAD, Revit, BIM) y gestión de proyectos (PMP). Consigue experiencia en proyectos grandes de renombre en tu CV. Estudiar una maestría en una especialización de alta demanda (geotecnia, estructuras) puede incrementar el salario 40-60% en 3-4 años. La experiencia en minería en Chile y Perú tiene premiums muy altos.' },
    ],
  },

  'administrador-empresas': {
    slug: 'administrador-empresas',
    title: 'Administrador de Empresas',
    emoji: '📋',
    category: 'Administración y Negocios',
    description: 'Profesional que planifica, organiza, dirige y controla los recursos de una organización para alcanzar sus objetivos estratégicos y operativos.',
    metaTitle: 'Salario Administrador de Empresas en LATAM 2025',
    metaDesc: 'Cuánto gana un administrador de empresas en Perú, México, Colombia, Argentina y Chile en 2025. Sueldos por nivel y sector para administradores.',
    keywords: 'salario administrador empresas, sueldo administración negocios LATAM, cuánto gana administrador Peru, salario MBA Mexico, sueldo administración Colombia',
    skills: ['Excel avanzado', 'SAP', 'Análisis financiero', 'Gestión de proyectos', 'Negociación', 'Power BI', 'Liderazgo', 'Presupuestos', 'Inglés', 'SCRUM'],
    countries: {
      peru: {
        currency: 'PEN', symbol: 'S/',
        entry: 'S/ 1,500 – 2,500', mid: 'S/ 2,700 – 5,000', senior: 'S/ 5,500 – 11,000', average: 'S/ 3,800',
        topCompanies: ['Alicorp', 'BCP', 'BBVA Perú', 'Saga Falabella', 'Backus', 'Intercorp'],
        note: 'El sector retail, banca y consumo masivo son los principales empleadores de administradores en Perú.',
      },
      mexico: {
        currency: 'MXN', symbol: '$',
        entry: '$10,000 – 16,000', mid: '$17,000 – 32,000', senior: '$35,000 – 65,000', average: '$24,000',
        topCompanies: ['FEMSA', 'Grupo Bimbo', 'CEMEX', 'Walmart México', 'Televisa', 'Santander México'],
        note: 'Un MBA de una universidad de prestigio (ITESM, IPADE) puede duplicar el salario inicial en México.',
      },
      colombia: {
        currency: 'COP', symbol: '$',
        entry: '$2M – 3.2M', mid: '$3.5M – 6.5M', senior: '$7M – 13M', average: '$5M',
        topCompanies: ['Bancolombia', 'Ecopetrol', 'Grupo Éxito', 'Avianca', 'Grupo Nutresa', 'Grupo Bolívar'],
        note: 'Colombia valora los MBA locales (Uniandes, EAFIT) para acceder a posiciones gerenciales.',
      },
      argentina: {
        currency: 'ARS', symbol: '$',
        entry: '$450K – 700K', mid: '$800K – 1.5M', senior: '$1.6M – 3M', average: '$1.1M',
        topCompanies: ['MercadoLibre', 'Grupo Clarín', 'YPF', 'Telecom Argentina', 'Banco Galicia', 'Arcor'],
        note: 'Argentina tiene buenas universidades de negocios (UTDT, IAE) que abren puertas a empresas grandes.',
      },
      chile: {
        currency: 'CLP', symbol: '$',
        entry: '$600K – 950K', mid: '$1M – 2M', senior: '$2.2M – 4.2M', average: '$1.6M',
        topCompanies: ['Falabella', 'LATAM Airlines', 'Cencosud', 'BCI', 'Banco de Chile', 'Codelco'],
        note: 'Chile tiene el mercado de negocios más formal de LATAM. Un MBA en la PUC o UAI tiene alto retorno.',
      },
    },
    relatedRoles: ['contador', 'recursos-humanos', 'marketing-digital'],
    faqs: [
      { q: '¿Vale la pena un MBA en LATAM para incrementar el salario?', a: 'Sí, pero depende de la institución. Un MBA de Uniandes (Colombia), ITESM (México), PUC (Chile) o IAE (Argentina) puede incrementar el salario 40-80% en 3-5 años post-grado. La clave es elegir un MBA con buena red de alumni y enfocarse en sectores con alta demanda. MBA en el exterior (MIT, IESE) abre puertas globales.' },
      { q: '¿Cuáles son los sectores que pagan más para administradores en LATAM?', a: 'En orden de mayor a menor salario promedio: tecnología/fintech, consultoría estratégica (McKinsey, BCG, Bain), banca de inversión, consumo masivo multinacional, energía (oil & gas, minería). El sector público y las PYMEs pagan significativamente menos que las multinacionales o empresas tech.' },
      { q: '¿Administración de empresas o ingeniería: qué tiene mejor salario en LATAM?', a: 'Los ingenieros ganan en promedio 15-25% más que los administradores en niveles junior y mid. Sin embargo, los administradores con MBA y experiencia gerencial pueden superar a ingenieros en niveles senior. La intersección más poderosa es el perfil de ingeniería + MBA, que accede a los mayores salarios en consultoría, fintech y empresas industriales.' },
      { q: '¿Cómo progresa la carrera de un administrador en una empresa grande de LATAM?', a: 'La progresión típica es: Practicante/Trainee (0-1 año) → Analista (1-3 años) → Especialista/Supervisor (3-5 años) → Jefe/Coordinador (5-8 años) → Gerente (8-12 años) → Director/VP. En empresas como BCP, Alicorp o Falabella, los programas de jóvenes profesionales aceleran esta carrera. Cambiar de empresa cada 3-4 años suele acelerar la progresión salarial.' },
    ],
  },
};

export interface SalaryCountry {
  name: string;
  flag: string;
  hreflang: string;
}

export const SALARY_COUNTRIES: Record<string, SalaryCountry> = {
  peru: { name: 'Perú', flag: '🇵🇪', hreflang: 'es-PE' },
  mexico: { name: 'México', flag: '🇲🇽', hreflang: 'es-MX' },
  colombia: { name: 'Colombia', flag: '🇨🇴', hreflang: 'es-CO' },
  argentina: { name: 'Argentina', flag: '🇦🇷', hreflang: 'es-AR' },
  chile: { name: 'Chile', flag: '🇨🇱', hreflang: 'es-CL' },
};

export const SALARY_CATEGORIES = [
  { id: 'Tecnología', label: 'Tecnología', emoji: '💻' },
  { id: 'Datos e IA', label: 'Datos e IA', emoji: '📊' },
  { id: 'Diseño', label: 'Diseño', emoji: '🎨' },
  { id: 'Marketing', label: 'Marketing', emoji: '📱' },
  { id: 'Finanzas y Contabilidad', label: 'Finanzas', emoji: '📚' },
  { id: 'Recursos Humanos', label: 'Recursos Humanos', emoji: '👥' },
  { id: 'Ingeniería', label: 'Ingeniería', emoji: '🏗️' },
  { id: 'Administración y Negocios', label: 'Administración', emoji: '📋' },
];
