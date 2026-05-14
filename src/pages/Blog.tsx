import { SEOHead } from '@/components/SEOHead';
import { motion } from 'framer-motion';
import { OfficialLogo } from '@/components/OfficialLogo';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';
import { useState } from 'react';

// Blog post data - in a real app this would come from a CMS or API
export const blogPosts = [
  {
    id: 'preparar-entrevista-tecnica-2025',
    title: 'Cómo prepararte para una entrevista técnica en 2025',
    excerpt: 'Las entrevistas técnicas han evolucionado. Descubre las mejores estrategias para destacar con los consejos de expertos de Google, Meta y Amazon.',
    content: `
## La nueva era de las entrevistas técnicas

Las entrevistas técnicas en 2025 ya no son lo que solían ser. Las empresas han evolucionado sus procesos para evaluar no solo tus habilidades técnicas, sino también tu capacidad de resolver problemas en tiempo real, comunicarte efectivamente y colaborar en equipo.

### Lo que ha cambiado

**1. Menos memorización, más razonamiento**

Las preguntas de "whiteboard" tradicionales están siendo reemplazadas por problemas más prácticos y situacionales. Las empresas quieren ver cómo piensas, no qué has memorizado.

**2. Pair programming en vivo**

Cada vez más empresas optan por sesiones de pair programming donde trabajas junto al entrevistador. Esto evalúa tu capacidad de colaborar y comunicar mientras codeas.

**3. System design desde el principio**

Ya no solo para seniors. Incluso para posiciones mid-level, las preguntas de diseño de sistemas son cada vez más comunes.

### Estrategias que funcionan

#### Practica en voz alta

El error más común es practicar en silencio. En una entrevista real, necesitas verbalizar tu proceso de pensamiento. Practica explicando cada paso mientras resuelves problemas.

#### Domina los fundamentos

- Estructuras de datos: arrays, linked lists, trees, graphs, hash tables
- Algoritmos: sorting, searching, dynamic programming, recursion
- Complejidad: Big O notation, trade-offs espacio/tiempo

#### Prepara tus historias

Para las preguntas de behavioral, ten 5-7 historias STAR preparadas que demuestren:
- Liderazgo técnico
- Resolución de conflictos
- Manejo de fallos
- Impacto en el negocio

### Recursos recomendados

1. **LeetCode** - Para práctica de algoritmos
2. **System Design Primer** - Para arquitectura
3. **MoonJab** - Para simulaciones con IA que te dan feedback real

### El día de la entrevista

- Descansa bien la noche anterior
- Ten tu setup técnico probado
- Prepara preguntas inteligentes para el final
- Recuerda: están evaluando cómo piensas, no si llegas a la solución perfecta

---

*¿Quieres practicar entrevistas con feedback de IA? Prueba el simulador de MoonJab gratis.*
    `,
    date: '5 Dic 2024',
    isoDate: '2024-12-05',
    readTime: '8 min',
    category: 'Entrevistas',
    author: 'Salvador',
    authorRole: 'CEO de MoonJab',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=450&fit=crop',
    featured: true
  },
  {
    id: 'networking-busqueda-empleo',
    title: 'El poder del networking en tu búsqueda de empleo',
    excerpt: 'El 70% de los empleos se consiguen por conexiones. Aprende cómo construir una red profesional que impulse tu carrera.',
    content: `
## Por qué el networking importa más que nunca

En un mercado laboral cada vez más competitivo, tu red de contactos puede ser la diferencia entre conseguir o no el trabajo de tus sueños. Los estudios muestran que hasta el 70% de las posiciones se llenan a través de conexiones personales.

### La ciencia detrás del networking

No se trata de coleccionar tarjetas de presentación. El networking efectivo está basado en:

1. **Reciprocidad** - Dar antes de pedir
2. **Autenticidad** - Conexiones genuinas
3. **Consistencia** - Mantener relaciones a largo plazo

### Estrategias prácticas

#### En LinkedIn

- Publica contenido de valor regularmente
- Comenta de forma inteligente en posts de tu industria
- Conecta con propósito, no por cantidad
- Personaliza SIEMPRE tus invitaciones

#### En eventos

- Prepara tu elevator pitch de 30 segundos
- Haz preguntas genuinas sobre la otra persona
- Haz follow-up dentro de 48 horas
- Ofrece ayuda antes de pedirla

#### En el día a día

- Mantén contacto con ex-colegas
- Ayuda a otros a conseguir empleo
- Comparte vacantes que no son para ti
- Celebra los logros de tu red

### Los errores más comunes

❌ Solo hacer networking cuando necesitas algo
❌ Enviar mensajes genéricos copy-paste
❌ No hacer follow-up después de conocer a alguien
❌ Hablar solo de ti mismo
❌ Pedir favores en el primer contacto

### Tu plan de acción

**Semana 1-2:**
- Optimiza tu perfil de LinkedIn
- Lista 20 personas que te gustaría conocer

**Semana 3-4:**
- Conecta con 5 personas nuevas
- Asiste a 1 evento de tu industria

**Mes 2 en adelante:**
- Mantén mínimo 3 conversaciones significativas por semana
- Ofrece ayuda a al menos 1 persona

---

*El networking es una inversión a largo plazo. Empieza hoy.*
    `,
    date: '2 Dic 2024',
    isoDate: '2024-12-02',
    readTime: '6 min',
    category: 'Networking',
    author: 'Salvador',
    authorRole: 'CEO de MoonJab',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=450&fit=crop',
    featured: false
  },
  {
    id: 'errores-cv-evitar',
    title: '10 errores en tu CV que te están costando entrevistas',
    excerpt: 'Pequeños detalles que marcan la diferencia. Optimiza tu currículum y aumenta tus callbacks en un 300%.',
    content: `
## Tu CV es tu primera impresión

Los reclutadores pasan en promedio 7 segundos escaneando un CV. En ese tiempo, decides si pasas al siguiente round o vas a la pila de rechazos. Evitar estos errores puede triplicar tus callbacks.

### Los 10 errores fatales

#### 1. Un objetivo genérico

❌ "Busco un rol que me permita crecer profesionalmente"
✅ "Product Manager con 5 años en fintech buscando liderar equipos en startups B2B"

#### 2. Describir responsabilidades, no logros

❌ "Responsable del equipo de ventas"
✅ "Lideré equipo de 8 vendedores, aumentando revenue un 150% en 12 meses"

#### 3. Diseño sobrecargado

Menos es más. Los ATS (Applicant Tracking Systems) no pueden leer diseños complejos. Usa un formato limpio y profesional.

#### 4. Información irrelevante

Tu trabajo de verano hace 10 años en una pizzería no importa (a menos que apliques a la industria de restaurantes).

#### 5. Errores ortográficos

Un solo error puede descartarte. Revisa. Revisa otra vez. Pide a alguien más que revise.

#### 6. Email poco profesional

❌ chico_loco_99@hotmail.com
✅ juan.perez@gmail.com

#### 7. Demasiado largo

Una página para menos de 10 años de experiencia. Dos páginas máximo para seniors.

#### 8. Sin palabras clave

Adapta tu CV a cada posición. Incluye términos del job description.

#### 9. Sin métricas

Los números hablan. Cuantifica todo lo que puedas: porcentajes, montos, tiempos.

#### 10. Foto inadecuada (o ninguna cuando se requiere)

Si incluyes foto, que sea profesional. Fondo neutro, buena iluminación, vestimenta apropiada.

### La estructura ideal

1. **Header** - Nombre, contacto, LinkedIn
2. **Resumen** - 2-3 líneas de tu propuesta de valor
3. **Experiencia** - Logros cuantificables por rol
4. **Educación** - Relevante y reciente primero
5. **Skills** - Técnicos y soft skills relevantes

### Antes de enviar

- [ ] ¿Está adaptado a esta posición específica?
- [ ] ¿Cada punto tiene un logro cuantificable?
- [ ] ¿Es fácil de escanear en 7 segundos?
- [ ] ¿Alguien más lo ha revisado?

---

*Crea un CV optimizado con IA en minutos usando el builder de MoonJab.*
    `,
    date: '28 Nov 2024',
    isoDate: '2024-11-28',
    readTime: '7 min',
    category: 'CV',
    author: 'Salvador',
    authorRole: 'CEO de MoonJab',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=450&fit=crop',
    featured: false
  },
  {
    id: 'cambio-carrera-guia',
    title: 'Guía completa para cambiar de carrera a los 30',
    excerpt: 'Nunca es tarde para reinventarte. Una guía paso a paso basada en casos reales de transición exitosa.',
    content: `
## El mito de que es "demasiado tarde"

A los 30, tienes algo que no tenías a los 22: experiencia, perspectiva y claridad sobre lo que realmente quieres. El cambio de carrera a esta edad no es un retroceso, es una evolución estratégica.

### Por qué los 30 son ideales para cambiar

1. **Autoconocimiento** - Sabes qué te gusta y qué no
2. **Habilidades transferibles** - Has desarrollado soft skills valiosas
3. **Red de contactos** - Tienes conexiones en múltiples industrias
4. **Estabilidad emocional** - Tomas mejores decisiones

### El proceso paso a paso

#### Fase 1: Autoexploración (2-4 semanas)

- Haz un inventario de tus habilidades
- Identifica patrones en lo que disfrutas
- Toma assessments de personalidad (como RIASEC)
- Habla con 10 personas en carreras que te interesan

#### Fase 2: Investigación (4-8 semanas)

- Investiga 3-5 roles objetivo
- Entiende los requisitos y gaps
- Calcula tu runway financiero
- Identifica programas de formación

#### Fase 3: Preparación (3-6 meses)

- Adquiere las habilidades faltantes
- Trabaja en proyectos paralelos
- Actualiza tu marca personal
- Construye tu red en la nueva industria

#### Fase 4: Transición (variable)

- Aplica estratégicamente
- Aprovecha tus habilidades transferibles
- Considera roles "puente"
- Mantén opciones abiertas

### Historias reales

**Ana, 32:** Contadora → UX Designer
"Me tomó 8 meses de preparación, pero conseguí trabajo en una startup fintech. Mi experiencia en finanzas fue un diferenciador."

**Carlos, 35:** Abogado → Product Manager
"Empecé manejando el producto legal de mi firma. Eso me dio el track record para saltar a tech."

**María, 31:** Profesora → Data Analyst
"Estudié online mientras trabajaba. A los 6 meses tenía las certificaciones y un portafolio."

### Lo que nadie te dice

- El síndrome del impostor es normal
- Tu primer trabajo nuevo probablemente pague menos
- Las habilidades blandas son tu superpoder
- La red de contactos importa más que el CV
- Tardará más de lo que planeas

### Recursos para empezar

1. **Diagnóstico de MoonJab** - Descubre carreras compatibles
2. **Cursos online** - Coursera, Platzi, Udemy
3. **Comunidades** - Encuentra tu tribu en Discord/Slack
4. **Mentores** - Busca personas que hicieron la transición

---

*¿Listo para descubrir tu próximo capítulo? Empieza con el diagnóstico gratuito de MoonJab.*
    `,
    date: '25 Nov 2024',
    isoDate: '2024-11-25',
    readTime: '10 min',
    category: 'Carrera',
    author: 'María González',
    authorRole: 'CEO de MoonJab',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=450&fit=crop',
    featured: false
  },
  {
    id: 'negociar-salario',
    title: 'Cómo negociar tu salario (sin sentir que pides demasiado)',
    excerpt: 'La diferencia entre aceptar la primera oferta y negociar puede ser de miles de dólares al año. Aprende a hacerlo con confianza.',
    content: `
## Por qué DEBES negociar

El 70% de los empleadores esperan que negocies. No hacerlo puede costarte entre $500,000 y $1,000,000 a lo largo de tu carrera (considerando aumentos compuestos).

### La psicología de la negociación

La razón por la que no negociamos:
- Miedo al rechazo
- No saber nuestro valor
- Falta de práctica
- Creencia de que es "de mala educación"

La realidad:
- Es esperado y respetado
- Demuestra que conoces tu valor
- Es una habilidad profesional esencial

### Preparación (antes de la oferta)

#### 1. Investiga el mercado

- Glassdoor, LinkedIn Salary, Levels.fyi
- Pregunta a personas en roles similares
- Considera ubicación, industria, tamaño de empresa

#### 2. Define tus números

- **Ideal:** Lo que realmente quieres
- **Target:** Lo que aceptarías feliz
- **Walk-away:** El mínimo absoluto

#### 3. Prepara tu caso

Lista 3-5 razones concretas por las que mereces más:
- Experiencia específica relevante
- Resultados previos cuantificables
- Habilidades únicas que aportas
- Certificaciones o formación adicional

### Durante la negociación

#### Regla de oro: Nunca des el primer número

"¿Cuál es el rango presupuestado para esta posición?"
"Prefiero entender primero el scope completo del rol"

#### Cuando recibas la oferta

1. Agradece genuinamente
2. Pide tiempo (24-48 horas)
3. No muestres emoción excesiva
4. "Estoy muy emocionado/a por este rol. Me gustaría revisar los detalles y volver con algunas preguntas."

#### Al contraofertar

"Basado en mi investigación de mercado y la experiencia que traigo en [X], estaba esperando algo más cercano a [número 10-15% más alto]. ¿Hay flexibilidad?"

### Más allá del salario base

Si el salario es inamovible, negocia:
- Bonus de firma
- Equity/opciones
- Días de vacaciones adicionales
- Trabajo remoto/flexible
- Presupuesto de desarrollo profesional
- Review salarial adelantada (6 meses vs 12)

### Errores a evitar

❌ Aceptar en el momento
❌ Dar un rango en vez de un número específico
❌ Amenazar con otras ofertas (a menos que sea verdad)
❌ Ser agresivo o ultimatum
❌ Negociar después de aceptar verbalmente

### Script de ejemplo

"Muchas gracias por la oferta. Estoy muy entusiasmado con la posibilidad de unirme al equipo. Después de revisar el paquete y compararlo con mi investigación de mercado para roles similares, me gustaría discutir el salario base. Dado mi experiencia de 5 años en [área] y mis logros en [resultado específico], estaba esperando algo más cercano a $X. ¿Hay espacio para ajustar esto?"

---

*Practica tu negociación con el simulador de entrevistas de MoonJab.*
    `,
    date: '20 Nov 2024',
    isoDate: '2024-11-20',
    readTime: '8 min',
    category: 'Salario',
    author: 'Salvador',
    authorRole: 'CEO de MoonJab',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=450&fit=crop',
    featured: false
  },
  {
    id: 'como-hacer-un-cv-sin-experiencia',
    isoDate: '2025-01-15',
    title: 'Cómo hacer un CV sin experiencia laboral: guía paso a paso',
    excerpt: 'Sin experiencia no significa sin posibilidades. Descubre cómo construir un CV impresionante aprovechando tus proyectos, habilidades y logros universitarios para conseguir tu primer trabajo.',
    content: `
## Cómo hacer un CV sin experiencia laboral

No tener experiencia laboral no significa que no puedas crear un CV impresionante. Los estudiantes universitarios tienen más activos de los que creen: proyectos académicos, voluntariado, habilidades técnicas y liderazgo en actividades extracurriculares.

El error más común: copiar la estructura de un CV diseñado para alguien con 5 años de experiencia. Cuando no tienes experiencia, necesitas una estructura distinta que destaque lo que sí tienes.

### 1. Elige el formato correcto para estudiantes

Para CVs sin experiencia, el formato funcional o híbrido funciona mejor que el cronológico, porque destaca habilidades y logros en lugar de una línea de tiempo laboral vacía.

**Estructura recomendada:**

- Encabezado: nombre, email profesional, LinkedIn, ciudad
- Resumen profesional (3-4 líneas centradas en tu potencial)
- Habilidades técnicas y blandas relevantes
- Proyectos académicos con resultados medibles
- Educación con promedio si es favorable
- Actividades extracurriculares y voluntariado
- Idiomas y certificaciones

### 2. Escribe un resumen profesional que capture atención

El resumen es lo primero que lee el reclutador. Para estudiantes sin experiencia, debe enfocarse en tu potencial y valor, no en lo que te falta.

**Ejemplo efectivo:**

"Estudiante de Ingeniería Industrial con sólidas bases en análisis de datos y gestión de proyectos. Desarrollé un sistema de optimización de inventarios para mi tesis que redujo costos simulados en un 23%. Busco prácticas profesionales donde aplicar mis habilidades analíticas desde el primer día."

**Ejemplo a evitar:**

"Busco un trabajo donde pueda aprender y crecer profesionalmente."

### 3. Convierte tus proyectos universitarios en experiencia real

Los proyectos académicos son experiencia real. Los reclutadores lo saben. La clave está en presentarlos con impacto medible.

Para cada proyecto incluye:
- Nombre del proyecto y contexto (curso, empresa cliente, competencia)
- Tu rol específico en el equipo
- Tecnologías o metodologías usadas
- Resultado concreto con número si es posible

#### Ejemplo de cómo presentar un proyecto universitario:

**Sistema de Gestión de Inventarios — Proyecto de Tesis**
Desarrollé en Python un sistema que analizó patrones de demanda histórica. Los algoritmos de optimización redujeron el costo teórico de inventario en 23%. Aprobado con nota máxima.

### 4. El voluntariado y actividades extracurriculares cuentan como experiencia

Las empresas que contratan a estudiantes sin experiencia valoran el liderazgo. Si fuiste presidente de un club, coordinaste proyectos sociales o organizaste eventos universitarios, eso cuenta como experiencia de gestión.

**Qué incluir:**
- Liderazgo en clubes universitarios (presidente, coordinador, tesorero)
- Voluntariado en ONGs o proyectos sociales
- Organización de eventos universitarios
- Tutorías a compañeros
- Participación en hackathons o competencias académicas

### 5. Habilidades técnicas que probablemente ya tienes

Si estudias en una universidad moderna, dominas más herramientas de las que crees:

- Microsoft Office / Google Workspace (Word, Excel, PowerPoint)
- Python, R, MATLAB, SPSS (según carrera)
- AutoCAD, SolidWorks (ingenierías)
- Photoshop, Illustrator (diseño)
- SQL y Excel avanzado (negocios y finanzas)
- Herramientas de gestión: Trello, Notion, Jira

### 6. Optimiza para ATS desde el principio

El 75% de los CVs son rechazados por sistemas ATS antes de llegar a un humano. Para superarlos:

- Usa palabras clave del anuncio de trabajo exactamente como aparecen
- Evita tablas, gráficos y diseños con columnas
- Guarda en PDF a menos que pidan Word específicamente
- Usa fuentes estándar: Arial, Calibri, Times New Roman

### Lista de verificación antes de enviar

- ¿Está adaptado específicamente a esta vacante?
- ¿Incluye palabras clave del anuncio?
- ¿Tiene resultados concretos con números?
- ¿Está libre de errores ortográficos?
- ¿Lo revisó alguien más?
- ¿Es fácil de escanear en 7 segundos?

---

*¿Quieres que la IA revise y optimice tu CV automáticamente? MoonJab analiza tu currículum y sugiere mejoras específicas para cada posición. Gratis para estudiantes.*
    `,
    date: '15 Ene 2025',
    readTime: '9 min',
    category: 'CV',
    author: 'Salvador',
    authorRole: 'CEO de MoonJab',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=450&fit=crop',
    featured: false
  },
  {
    id: 'que-es-ats-y-como-optimizar-tu-cv',
    isoDate: '2025-01-10',
    title: '¿Qué es ATS y cómo optimizar tu CV para pasar los filtros automáticos?',
    excerpt: 'El 75% de los CVs son rechazados por software antes de que un humano los lea. Aprende qué es ATS, cómo funciona y cómo asegurarte de que tu currículum llegue al reclutador.',
    content: `
## ¿Qué es ATS y por qué tu CV puede ser rechazado sin que nadie lo lea?

ATS significa Applicant Tracking System (Sistema de Seguimiento de Candidatos). Es el software que las empresas usan para gestionar las postulaciones a sus vacantes. El problema: estos sistemas filtran automáticamente los CVs antes de que lleguen a un reclutador humano.

Según estudios de la industria, el 75% de los CVs son descartados por el ATS antes de que un humano los vea. Si tu CV no está optimizado, probablemente estás siendo filtrado sin saberlo.

### Cómo funciona un sistema ATS paso a paso

Cuando postulas a una vacante en LinkedIn, Indeed, Computrabajo o directamente en el sitio web de una empresa, tu CV es procesado automáticamente:

- El ATS extrae el texto de tu CV usando OCR o parsing de PDF
- Busca palabras clave específicas del puesto y la empresa
- Puntúa tu CV según porcentaje de compatibilidad
- Filtra automáticamente CVs que no alcanzan el umbral mínimo (generalmente 70%)

Los reclutadores solo ven los CVs que superan este filtro. Puedes ser el candidato perfecto y aun así no pasar la primera ronda si tu CV no está formateado correctamente.

### Por qué el ATS rechaza CVs: los errores más comunes

❌ Diseños elaborados con columnas, tablas o gráficos (el ATS no puede parsear texto dentro de tablas complejas)

❌ Encabezados creativos como "Mi Experiencia" en lugar de "Experiencia Laboral"

❌ Fechas en formato inconsistente o no estándar

❌ Información importante en el encabezado o pie de página (muchos ATS no leen estas secciones)

❌ CV guardado como imagen en lugar de PDF con texto seleccionable

❌ No incluir las palabras clave exactas del anuncio de trabajo

### Cómo optimizar tu CV para el ATS en 6 pasos

#### Paso 1: Usa formato simple y limpio

El formato ideal para ATS es el más simple posible:
- Un solo bloque de texto, sin columnas paralelas
- Secciones con títulos reconocibles y estándar
- Fuente legible: Arial, Calibri, Times New Roman, Helvetica (11-12pt)
- Márgenes de 1.5 a 2 cm
- Sin imágenes, gráficos, iconos decorativos ni tablas complejas

#### Paso 2: Usa secciones con nombres estándar

Los ATS están entrenados para reconocer secciones específicas:

✅ "Experiencia Laboral" (no "Mi Trayectoria" ni "Lo que he hecho")
✅ "Educación" (no "Formación Académica")
✅ "Habilidades" (no "Lo que sé hacer")
✅ "Idiomas"
✅ "Certificaciones"

#### Paso 3: Incorpora palabras clave estratégicamente

Lee el anuncio de trabajo con atención. Identifica y copia exactamente:
- El nombre del puesto (si dice "Analista de Marketing Digital", usa esa frase exacta)
- Habilidades técnicas mencionadas (si dice "Google Analytics", no pongas solo "analytics")
- Herramientas y software requeridos
- Certificaciones o calificaciones específicas

#### Paso 4: Cuantifica tus logros

Los ATS avanzados y los reclutadores valoran los números. Siempre que puedas, incluye métricas:

✅ "Aumenté las ventas en un 35% en 6 meses gestionando 3 cuentas clave"
✅ "Reduje el tiempo de procesamiento de 3 horas a 45 minutos automatizando reportes"
✅ "Coordiné un equipo de 8 personas para entregar el proyecto 2 semanas antes del deadline"

#### Paso 5: Guarda en el formato correcto

- PDF: estándar recomendado si el ATS lo acepta (la mayoría sí)
- Word (.docx): úsalo solo si el anuncio lo pide específicamente
- Nunca: JPG, PNG, ni PDFs creados desde escaneos de documentos físicos

#### Paso 6: Verifica que tu CV sea parseable

Prueba simple: copia y pega el texto de tu CV en un editor de texto básico (Bloc de Notas, TextEdit). Si el texto se ve coherente, ordenado y sin caracteres extraños, el ATS probablemente lo leerá bien. Si el texto aparece desordenado o con símbolos raros, el formato tiene problemas.

### Tu puntuación ATS objetivo

La mayoría de ATS aceptan CVs con 70%+ de compatibilidad. Para estar en zona segura apunta a:
- 80%+ de keywords del anuncio presentes en tu CV
- Formato completamente limpio sin elementos no parseables
- Secciones con nombres estándar que el ATS reconozca

### Los ATS más usados en LATAM

Las empresas grandes en Latinoamérica usan principalmente:
- **Workday** (multinacionales: P&G, Google, Deloitte)
- **SAP SuccessFactors** (empresas corporativas)
- **Greenhouse** (startups tech)
- **Lever** (empresas de tecnología)
- **Breezy HR** (empresas medianas)
- **Computrabajo ATS** (empresas locales LATAM)

Aunque cada ATS tiene sus particularidades, las reglas de optimización son las mismas para todos.

---

*MoonJab analiza tu CV con IA y te da un score ATS específico para cada vacante, con sugerencias de mejora en tiempo real. Pruébalo gratis.*
    `,
    date: '10 Ene 2025',
    readTime: '8 min',
    category: 'CV',
    author: 'Salvador',
    authorRole: 'CEO de MoonJab',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=450&fit=crop',
    featured: false
  },
  {
    id: 'primer-trabajo-estudiante-universitario',
    isoDate: '2025-01-05',
    title: 'Cómo conseguir tu primer trabajo siendo estudiante universitario en LATAM',
    excerpt: 'Guía estratégica para universitarios que buscan su primer empleo o práctica en Perú, México, Colombia, Argentina y Chile. Paso a paso, desde el CV hasta la oferta.',
    content: `
## Cómo conseguir tu primer trabajo siendo estudiante universitario en LATAM

El primer trabajo es el reto más difícil de la vida laboral: el mercado exige experiencia para darte experiencia. Es el clásico círculo vicioso que frena a miles de estudiantes universitarios cada año en Latinoamérica.

La buena noticia: hay estrategias concretas para romper ese ciclo. Este es el playbook que usan los universitarios que consiguen empleo más rápido en LATAM.

### Por qué es diferente buscar trabajo siendo estudiante

Cuando compites como estudiante, te enfrentas a candidatos con más tiempo disponible, experiencia previa y disponibilidad inmediata. Para ganar en este contexto, necesitas diferenciarte con lo que sí tienes: conocimiento técnico actualizado, energía, adaptabilidad y disposición para aprender.

### Paso 1: Define qué tipo de trabajo buscas

Existen tres opciones principales para estudiantes universitarios:

**Prácticas pre-profesionales (pasantías)**
La opción más estructurada. Empresas grandes tienen programas formales para estudiantes de los últimos ciclos. Ventaja: experiencia de marca reconocida y posibilidad real de conversión a tiempo completo al graduarse.

**Trabajo part-time**
Empleos de 4-6 horas diarias combinables con estudios. Ideal para perfiles de marketing digital, diseño, programación, contenido y soporte al cliente. Muchas startups LATAM contratan part-time para posiciones entry-level.

**Freelance y proyectos independientes**
Proyectos pagados mientras estudias. Perfecto para construir portafolio rápidamente. Plataformas: Workana, Freelancer (ambas con versión en español y muchos clientes LATAM).

### Paso 2: Construye tu perfil antes de empezar a postular

Los universitarios que consiguen trabajo más rápido tienen su perfil listo antes de necesitarlo:
- CV actualizado y optimizado para ATS
- LinkedIn con foto profesional, resumen completo y sección de proyectos
- Portafolio si tu carrera lo requiere (diseño, programación, marketing)
- Referencias académicas listas para dar contacto

### Paso 3: Busca en los canales correctos para LATAM

La mayoría de estudiantes pierde tiempo buscando en el lugar equivocado:

**LinkedIn Jobs** — Filtra por "Entry level" e "Internship". Mejor para empresas medianas y grandes.
**Computrabajo** — Mayor volumen de vacantes de LATAM. Tiene filtros específicos para prácticas.
**Bolsa de trabajo de tu universidad** — Frecuentemente tiene vacantes exclusivas para alumnos de la institución.
**Instagram y TikTok** — Startups LATAM publican vacantes en redes sociales. Sigue a las empresas que te interesan.
**Portal de prácticas directo** — BCP, BBVA, Alicorp, Ecopetrol, Falabella, MercadoLibre tienen portales propios.

### Paso 4: Postula de forma estratégica, no masiva

El error más común: enviar el mismo CV genérico a 50 empresas y esperar. Mejor estrategia:
- Selecciona 10-15 empresas donde genuinamente quieras trabajar
- Adapta tu CV y carta de presentación para cada una
- Investiga la empresa antes de postular (noticias recientes, cultura, productos)
- Menciona algo específico de la empresa en tu carta de presentación

La personalización multiplica por 3 la tasa de respuesta.

### Paso 5: Practica entrevistas antes de que cuenten

El 60% de los rechazos en primera entrevista se deben a falta de preparación, no de cualificaciones. Antes de tu primera entrevista real, practica:
- Tu presentación personal de 2 minutos ("cuéntame sobre ti")
- Las 10 preguntas más comunes de entrevistas para entry-level
- Preguntas de situación con el método STAR (Situación, Tarea, Acción, Resultado)
- Al menos 3 preguntas inteligentes para hacerle al entrevistador

### Lo que los reclutadores LATAM valoran en candidatos sin experiencia

Después de analizar cientos de procesos de selección para primer empleo en LATAM, estas son las cualidades más valoradas:
- Actitud y genuinas ganas de aprender (supera a la experiencia en entry-level)
- Habilidades de comunicación oral y escrita en español, y en inglés si aplica
- Conocimiento técnico actualizado de tu carrera
- Capacidad de trabajar en equipo demostrada con ejemplos concretos
- Compromiso con proyectos anteriores (no abandonar a la mitad)

### Los programas de primer empleo más grandes de LATAM

Estas empresas tienen programas formales pensados exactamente para estudiantes sin experiencia:
- Perú: BCP Joven Talento, Alicorp Practica, BBVA Talent Pool, Intercorp Academy
- México: FEMSA Talento Universitario, América Móvil Campus, Cemex Graduate Program
- Colombia: Ecopetrol Becarios, Bancolombia Prácticas, Grupo Nutresa Jóvenes
- Argentina: MercadoLibre Internships, Globant Graduate Program, YPF Jóvenes
- Chile: Falabella Prácticas, LATAM Airlines Internships, Banco de Chile Jóvenes

---

*Prepara tu CV y practica entrevistas con MoonJab. Más de 10,000 estudiantes en LATAM ya consiguieron su primer empleo con nuestra plataforma.*
    `,
    date: '5 Ene 2025',
    readTime: '10 min',
    category: 'Carrera',
    author: 'María González',
    authorRole: 'CEO de MoonJab',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=450&fit=crop',
    featured: false
  },
  {
    id: 'practicas-profesionales-latam',
    isoDate: '2025-01-02',
    title: 'Guía completa para conseguir prácticas profesionales en LATAM',
    excerpt: 'Todo lo que necesitas saber sobre prácticas pre-profesionales en Perú, México, Colombia, Argentina y Chile: cómo postular, qué esperar y cómo convertirlas en un trabajo fijo.',
    content: `
## Guía completa para conseguir prácticas profesionales en LATAM

Las prácticas profesionales (también llamadas pasantías, internships o prácticas pre-profesionales) son el puente más efectivo entre la universidad y el mercado laboral. Tener al menos una práctica antes de graduarte puede reducir tu tiempo de búsqueda de empleo de meses a semanas.

### ¿Qué son las prácticas profesionales y qué derechos tienes?

Las condiciones legales de las prácticas varían por país. Es importante que las conozcas antes de firmar cualquier convenio:

**Perú — Prácticas Pre-Profesionales**
Reguladas por la Ley 28518. Duración máxima de 1 año. Las empresas están obligadas a pagar como mínimo la Remuneración Mínima Vital (S/ 1,025 en 2025) más seguro de salud. El convenio debe ser escrito y firmado por la empresa, el practicante y la universidad.

**México — Programas de Becarios**
No existe una ley única nacional. Las mejores empresas (multinacionales, startups tech, consultoras) pagan entre $4,000 y $8,000 MXN mensuales. Verifica siempre que incluya seguro médico y que el contrato sea claro sobre duración y funciones.

**Colombia — Prácticas Empresariales**
Si son parte del pensum universitario (obligatorias), las empresas no están legalmente obligadas a remunerarlas. Pero las mejores empresas sí pagan un auxilio de práctica. Duración promedio: 6 meses. Inscribe tu práctica en el seguro estudiantil de tu universidad.

**Argentina — Pasantías**
Reguladas por la Ley 26.427. Duración hasta 6 meses renovables una vez. Remuneración obligatoria que equivale a un porcentaje de la remuneración del convenio colectivo. Las pasantías deben estar vinculadas a tu carrera.

**Chile — Prácticas Profesionales**
No existe ley específica, pero las mejores empresas pagan entre $400,000 y $700,000 CLP mensuales. Las prácticas suelen durar de 3 a 6 meses y son parte del proceso de titulación en muchas universidades chilenas.

### Cómo conseguir prácticas en las mejores empresas de LATAM

Las grandes corporaciones abren sus programas de prácticas 2-4 meses antes del inicio. Si quieres empezar en enero, postula en octubre. Si quieres julio, postula en marzo.

**Programas de prácticas más reconocidos en LATAM:**
- Perú: BCP Joven Talento, BBVA Talent Pool, Alicorp Practica, Intercorp Academy
- México: FEMSA Talento Universitario, América Móvil Campus, Cemex Graduate
- Colombia: Ecopetrol Becarios, Bancolombia Prácticas, Grupo Éxito Jóvenes
- Argentina: MercadoLibre Internships, Globant Graduate Program, YPF Jóvenes Profesionales
- Chile: Falabella Prácticas, LATAM Airlines Internships, Banco de Chile Jóvenes

### Cómo destacar tu CV para prácticas en grandes empresas

Las empresas que reciben muchos postulantes (Deloitte, McKinsey, Google, Procter & Gamble) revisan CVs en menos de 30 segundos. Para destacar:

**Adapta el resumen profesional para cada empresa**
"Busco prácticas como Analista de Marketing en Alicorp para aplicar mis conocimientos en..." suena mucho mejor que un objetivo genérico.

**Incluye tu promedio académico si es favorable**
Si es 14+ sobre 20 (Perú), 8+ sobre 10 (México), 3.5+ sobre 5 (Colombia), inclúyelo con orgullo.

**Presenta proyectos académicos con métricas**
Un proyecto de tesis bien descrito con resultados medibles puede superar experiencia laboral irrelevante.

**Menciona actividades extracurriculares con impacto**
Las empresas valoran el liderazgo estudiantil. Si fuiste presidente de un club, coordinaste proyectos, o participaste en competencias académicas, eso cuenta.

**Incluye idiomas con certificación**
El inglés te abre puertas en multinacionales. Si tienes B2+, certifícate (TOEFL, IELTS, Cambridge) antes de postular.

### Qué evalúan en las entrevistas de prácticas

En una entrevista para prácticas, los reclutadores NO esperan que ya sepas hacer el trabajo. Evalúan:
- Ganas genuinas de aprender y contribuir desde el primer día
- Fit cultural con la empresa y el equipo
- Pensamiento analítico básico (pueden darte un mini-caso)
- Comunicación clara para explicar ideas técnicas y no técnicas
- Disponibilidad de horario y compromiso con la duración de las prácticas

### Cómo convertir prácticas en trabajo fijo

El objetivo final es que tus prácticas se conviertan en una oferta de empleo formal. Para maximizar esa probabilidad:
- Llega siempre puntual y sobre-entrega en todo lo que hagas
- Busca proyectos adicionales más allá de lo asignado
- Construye relaciones con tu equipo y otros departamentos
- Solicita feedback constantemente y actúa en base a él
- Documenta tus logros para actualizar tu CV al terminar

El 40-60% de los practicantes en grandes empresas LATAM reciben ofertas de trabajo al finalizar.

---

*Optimiza tu CV y practica entrevistas de selección con MoonJab. Acceso gratuito para estudiantes universitarios en LATAM.*
    `,
    date: '2 Ene 2025',
    readTime: '11 min',
    category: 'Carrera',
    author: 'Salvador',
    authorRole: 'CEO de MoonJab',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=450&fit=crop',
    featured: false
  },
  // Entrevistas (4 more)
  {
    id: 'preguntas-conductuales-entrevista',
    isoDate: '2025-02-10',
    title: 'Las 15 preguntas de entrevista conductual más frecuentes (y cómo responderlas)',
    excerpt: 'Aprende a responder con confianza las preguntas de entrevista más comunes en LATAM usando el método STAR y ejemplos reales para cada situación.',
    content: `
## Las entrevistas conductuales: por qué importan

Las preguntas de comportamiento representan el 70% de las entrevistas en empresas medianas y grandes de LATAM. Evalúan cómo has manejado situaciones reales para predecir cómo te desempeñarás en el futuro.

La regla de oro: siempre responde con ejemplos concretos, no teoría. "Soy bueno trabajando en equipo" no convence. "En mi proyecto de tesis, coordiné un equipo de 5 personas y entregamos 3 días antes del deadline" sí lo hace.

### Las 15 preguntas más frecuentes

**1. "Cuéntame sobre ti"**
Estructura: formación → experiencia relevante → por qué este rol. Máximo 2 minutos.

**2. "¿Un logro del que estés orgulloso?"**
Elige algo con impacto medible. Usa STAR: reto, qué hiciste, resultado con números.

**3. "¿Un fracaso o error?"**
Lo que importa no es el error sino qué aprendiste. Muestra madurez, no victimismo.

**4. "¿Cómo manejas el estrés?"**
Da un ejemplo real de un proyecto difícil y explica tu proceso concreto.

**5. "¿Conflicto con un compañero?"**
Muestra que resolviste constructivamente. Nunca ataques a la otra persona.

**6. "¿Cómo priorizas múltiples tareas?"**
Da un sistema concreto: Eisenhower, sprint planning. No digas "hago lo más urgente".

**7. "¿Decisión difícil con poca información?"**
Muestra pensamiento analítico y criterio, no que tuviste suerte.

**8. "¿Lideraste a un equipo sin ser el jefe?"**
Proyectos universitarios, clubes y voluntariado cuentan. Habla de influencia sin autoridad.

**9. "¿Cómo te adaptas a cambios inesperados?"**
Un ejemplo donde el plan cambió y tú respondiste con efectividad.

**10. "¿Un proyecto del que estés orgulloso?"**
Distinto al logro: habla del proceso, retos del equipo y colaboración.

**11. "¿Por qué quieres trabajar aquí?"**
Menciona algo específico investigado. No uses frases genéricas que sirvan para cualquier empresa.

**12. "¿Dónde te ves en 5 años?"**
Sé ambicioso pero realista. Alinea tu visión con el tipo de carrera que ofrece la empresa.

**13. "¿Tu mayor debilidad?"**
Una debilidad real pero no fatal, con lo que estás haciendo para mejorarla.

**14. "¿Por qué deberíamos contratarte?"**
Habilidades + actitud + fit cultural. Resume tu propuesta de valor en 60 segundos.

**15. "¿Tienes preguntas para nosotros?"**
Siempre di sí. Prepara 3 preguntas genuinas sobre el rol, el equipo y la cultura.

### La clave: practica en voz alta

Leer respuestas no es lo mismo que practicarlas. Grábate o usa MoonJab para recibir feedback en tiempo real sobre tu tono, claridad y estructura.

---

*Practica estas preguntas con el simulador de entrevistas de MoonJab y recibe feedback de IA al instante.*
    `,
    date: '10 Feb 2025',
    readTime: '8 min',
    category: 'Entrevistas',
    author: 'Salvador',
    authorRole: 'CEO de MoonJab',
    image: 'https://images.unsplash.com/photo-1551836022-dfa5701e855d?w=800&h=450&fit=crop',
    featured: false
  },
  {
    id: 'primera-entrevista-trabajo-guia',
    isoDate: '2025-02-05',
    title: 'Tu primera entrevista de trabajo: guía completa para no cometer errores',
    excerpt: 'Todo lo que necesitas saber antes, durante y después de tu primera entrevista laboral en LATAM. Con lista de verificación incluida.',
    content: `
## La primera entrevista asusta a todos

El nerviosismo no es el problema. La falta de preparación sí. Esta guía te prepara para cada etapa del proceso.

### 48 horas antes: preparación clave

**Investiga la empresa a fondo**
Lee su sitio web, redes sociales y noticias recientes. Misión, productos, tamaño, cultura. "¿Qué sabes de nosotros?" es pregunta obligatoria — no la respondas con "los busqué esta mañana".

**Estudia el anuncio de trabajo**
Identifica las 5-10 habilidades más mencionadas. Prepara ejemplos concretos de cada una, aunque vengan de contextos universitarios.

**Prepara tus preguntas**
Lleva 3-5 preguntas genuinas. "¿Cómo es un día típico en este rol?" y "¿Qué define a alguien exitoso en el equipo?" muestran interés real.

**Planifica la logística**
Presencial: llega 10-15 minutos antes (no 30). Virtual: prueba cámara, micrófono, conexión y fondo con anticipación.

### El día: cómo comportarte

**Primeros 30 segundos**
Saluda con nombre, contacto visual, sonrisa genuina. En virtual, mira a la cámara, no a la pantalla.

**Durante la conversación**
- Escucha completo antes de responder. No interrumpas.
- Pide clarificación si no entiendes: "¿Podrías darme más contexto?"
- Usa ejemplos concretos con método STAR
- Evita hablar mal de trabajos o profesores anteriores

**Cierre**
Agradece, expresa interés genuino y pregunta sobre los próximos pasos: "¿Cuándo esperan tomar una decisión?"

### Después de la entrevista

Envía un email de agradecimiento dentro de 24 horas. 3-4 líneas: agradece el tiempo, menciona algo de la conversación, confirma tu interés. Este gesto te diferencia del 80% de candidatos.

### Lista de verificación

- [ ] Investigué la empresa (misión, productos, cultura)
- [ ] Marqué habilidades clave del anuncio
- [ ] Preparé 5-7 ejemplos con método STAR
- [ ] Tengo 3-5 preguntas para el entrevistador
- [ ] Planifiqué la logística (ruta, plataforma, hora)
- [ ] Elegí ropa apropiada para la cultura
- [ ] Dormiré bien y comeré antes

---

*Practica entrevistas con feedback de IA en MoonJab antes de que cuenten de verdad.*
    `,
    date: '5 Feb 2025',
    readTime: '7 min',
    category: 'Entrevistas',
    author: 'Salvador',
    authorRole: 'CEO de MoonJab',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=450&fit=crop',
    featured: false
  },
  {
    id: 'metodo-star-respuestas-entrevista',
    isoDate: '2025-01-28',
    title: 'Método STAR: la técnica definitiva para responder preguntas de entrevista',
    excerpt: 'Aprende a estructurar respuestas claras, convincentes y memorables usando Situación-Tarea-Acción-Resultado con ejemplos reales para estudiantes LATAM.',
    content: `
## ¿Qué es el método STAR?

STAR es el framework más usado para responder preguntas de comportamiento. Las siglas:

- **S**ituación: El contexto donde ocurrió el evento
- **T**area: El problema u objetivo que enfrentabas
- **A**cción: Lo que hiciste (usa "yo", no "nosotros")
- **R**esultado: El impacto concreto, preferiblemente con número

Transforma respuestas genéricas en historias específicas que el entrevistador puede imaginar y recordar.

### Por qué "soy bueno trabajando en equipo" no funciona

Los reclutadores escuchan esa frase decenas de veces por día. No dice nada porque cualquiera puede decirla y no es verificable. Una respuesta STAR es específica, concreta y diferenciadora.

### Cómo construir una respuesta STAR

**Situación (20% del tiempo)**
Contexto mínimo para que la historia tenga sentido.
"En mi tercer año, en el proyecto de tesis grupal..."

**Tarea (10% del tiempo)**
Tu responsabilidad específica.
"Yo era el responsable de coordinar al equipo de 4 personas..."

**Acción (60% del tiempo — lo más importante)**
Exactamente qué hiciste, paso a paso.
"Organicé reuniones semanales, distribuí tareas según las fortalezas de cada uno..."

**Resultado (10% del tiempo)**
Impacto concreto. Con números si puedes.
"Entregamos 5 días antes y obtuvimos la nota más alta del curso."

### 3 ejemplos para estudiantes sin experiencia

**"Cuéntame de una vez que resolviste un problema difícil"**
"El software de mi curso de Estadística falló dos días antes de la entrega (S). Tenía que presentar mi análisis final (T). Aprendí Python básico en 8 horas con tutoriales de YouTube y reescribí el análisis (A). Entregué a tiempo con mejor calidad (R)."

**"¿Cómo manejas los conflictos?"**
"Dos integrantes de mi voluntariado tenían visiones opuestas para un evento (S). Como coordinador, necesitaba decidir sin que nadie se sintiera ignorado (T). Organicé una reunión donde cada uno presentó sus argumentos y propuse una solución híbrida (A). El evento fue exitoso y ambos valoraron el proceso (R)."

**"¿Cuándo tomaste iniciativa?"**
"En mi práctica noté que los reportes tardaban 3 horas en hacerse manualmente (S). Nadie me lo pidió, pero quise contribuir (T). Automaticé el proceso con macros de Excel (A). El tiempo bajó a 20 minutos y mi supervisor lo adoptó para todo el equipo (R)."

### Errores comunes al usar STAR

- Hablar en plural ("nosotros hicimos") — los entrevistadores quieren saber QUÉ HICISTE TÚ
- Extenderse en Situación y olvidar el Resultado
- No cuantificar el Resultado — un número aproximado es mejor que ninguno
- Inventar situaciones — las inconsistencias se detectan fácilmente

### Tu banco de 7 historias STAR

Prepara estos escenarios antes de cualquier entrevista:
1. Un logro del que estés orgulloso
2. Un fracaso y lo que aprendiste
3. Un conflicto que resolviste
4. Una vez que tomaste iniciativa
5. Una situación bajo presión con deadline ajustado
6. Una vez que lideraste a alguien
7. Un error y cómo lo manejaste

---

*Practica respuestas STAR con MoonJab y recibe feedback sobre tu estructura, claridad y convicción.*
    `,
    date: '28 Ene 2025',
    readTime: '8 min',
    category: 'Entrevistas',
    author: 'Salvador',
    authorRole: 'CEO de MoonJab',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=450&fit=crop',
    featured: false
  },
  {
    id: 'errores-fatales-entrevista',
    isoDate: '2025-01-22',
    title: '8 errores que arruinan una entrevista (aunque seas el mejor candidato)',
    excerpt: 'Pequeños descuidos que eliminan candidatos calificados todos los días. Identifícalos antes de tu próxima entrevista de trabajo.',
    content: `
## Los errores invisibles que cuestan el trabajo

Puedes tener el mejor CV, las habilidades perfectas y aun así perder una oferta por cometer alguno de estos errores. Los reclutadores los notan aunque no siempre los mencionen en el feedback.

### Error 1: Llegar tarde (o conectarse tarde)

El retraso envía un mensaje: no priorizas este rol. Presencial: llega 10-15 minutos antes. Virtual: entra 5 minutos antes y prueba tecnología 30 minutos antes.

### Error 2: No investigar la empresa

"¿Qué sabes de nosotros?" es una pregunta clásica. Responder vagamente es eliminatorio. Dedica 30 minutos a leer el sitio web, LinkedIn y noticias recientes antes de cada entrevista.

### Error 3: Responder con generalidades

"Soy muy responsable", "me gusta trabajar en equipo" — frases sin evidencia que nadie diferencia. Cada afirmación debe venir con un ejemplo concreto (método STAR).

### Error 4: Hablar mal de ex-jefes o profesores

Aunque tuvieras razón, siempre queda mal. El entrevistador piensa: "¿Así hablará de nosotros?" Enfócate en lo que buscas, no en lo que dejaste.

### Error 5: No hacer preguntas al final

Responder "no, creo que todo está claro" transmite desinterés. Las preguntas inteligentes demuestran que investigaste y que te importa el rol. Prepara siempre 3-5 preguntas genuinas.

### Error 6: Exagerar en el CV

Los reclutadores verifican. Si en la entrevista no puedes sostener lo que pusiste en el CV, se nota inmediatamente y es descalificante. Presenta experiencias de forma favorable sin falsificarlas.

### Error 7: Lenguaje corporal negativo

Brazos cruzados, mirada evasiva, voz muy baja, postura encorvada — el cuerpo puede contradecir lo que dices. En virtual: mira a la cámara, no a la pantalla. Practica frente a un espejo.

### Error 8: No hacer seguimiento

El 80% de candidatos no envía email de agradecimiento. Este gesto te diferencia y mantiene tu nombre presente mientras toman la decisión. Envíalo dentro de 24 horas, 3-4 líneas máximo.

---

*Detecta tus errores antes de que cuesten el trabajo. Practica con el simulador de MoonJab y recibe feedback en tiempo real.*
    `,
    date: '22 Ene 2025',
    readTime: '6 min',
    category: 'Entrevistas',
    author: 'Salvador',
    authorRole: 'CEO de MoonJab',
    image: 'https://images.unsplash.com/photo-1484820987859-b1e50e06d1a7?w=800&h=450&fit=crop',
    featured: false
  },
  // Networking (4 more)
  {
    id: 'linkedin-estudiantes-universitarios',
    isoDate: '2025-02-15',
    title: 'Cómo crear un perfil de LinkedIn que consiga entrevistas siendo estudiante',
    excerpt: 'Guía paso a paso para optimizar tu LinkedIn como universitario en LATAM y atraer reclutadores orgánicamente sin años de experiencia.',
    content: `
## LinkedIn no es un CV digital — es tu reputación profesional online

El 87% de los reclutadores usa LinkedIn para buscar y evaluar candidatos. Tu perfil frecuentemente es la primera impresión antes de que lean tu CV. Y la buena noticia: como estudiante, puedes tener un perfil poderoso aunque no tengas experiencia formal.

### Por qué los estudiantes subestiman LinkedIn

La mayoría crea un perfil básico (nombre, carrera, universidad) y no lo toca. Un perfil incompleto perjudica más que no tener perfil, porque muestra descuido.

### Los 8 elementos que definen un buen perfil estudiantil

**1. Foto de perfil profesional**
Buena iluminación natural, fondo neutro, ropa apropiada, sonrisa genuina. Los perfiles con foto reciben 21 veces más visitas.

**2. Foto de portada (banner)**
Aprovecha este espacio en blanco. Canva tiene plantillas gratuitas relacionadas con tu industria.

**3. Titular (headline)**
No pongas solo "Estudiante de Administración". Mejor: "Estudiante de Administración | Análisis de datos | Buscando prácticas en consultoría". El headline aparece en todas tus interacciones.

**4. Resumen (Acerca de)**
En primera persona, 3-5 párrafos cortos: quién eres, qué habilidades tienes, qué tipo de rol buscas, invitación a conectar.

**5. Experiencia (aunque sean proyectos)**
Proyectos universitarios relevantes, voluntariado, freelance, cursos prácticos con resultado demostrable — todo cuenta.

**6. Educación detallada**
Agrega cursos relevantes, promedio si es favorable, actividades extracurriculares, logros académicos.

**7. Habilidades**
10-20 habilidades relevantes para tu industria. En LATAM son muy valoradas: Excel avanzado, Python, inglés B2+, análisis de datos.

**8. Recomendaciones**
Pide a profesores, coordinadores de voluntariado o compañeros de proyectos. Una recomendación auténtica de un profesor es muy valiosa para estudiantes.

### Cómo encontrar que reclutadores te encuentren

- Activa "Open to Work" (visible solo para reclutadores si lo prefieres)
- Incluye palabras clave de tu industria en titular, resumen y descripción de experiencia
- Comenta posts de profesionales de tu industria
- Publica contenido propio ocasionalmente (1 vez al mes es suficiente)

### Conecta estratégicamente

Más conexiones = mayor visibilidad. Estrategia para estudiantes:
- Conecta con todos tus compañeros de clase
- Conecta con tus profesores
- Conecta con egresados de tu universidad (hay grupos específicos)
- En eventos, conecta con las personas que conociste ese mismo día

---

*Optimiza tu perfil profesional con MoonJab y empieza a recibir mensajes de reclutadores.*
    `,
    date: '15 Feb 2025',
    readTime: '7 min',
    category: 'Networking',
    author: 'Salvador',
    authorRole: 'CEO de MoonJab',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&h=450&fit=crop',
    featured: false
  },
  {
    id: 'entrevistas-informativas-como-conseguirlas',
    isoDate: '2025-02-08',
    title: 'Entrevistas informativas: la estrategia para entrar a empresas sin postular',
    excerpt: 'Cómo conseguir y aprovechar conversaciones con profesionales para abrir puertas que no están anunciadas en portales de trabajo.',
    content: `
## La puerta trasera del mercado laboral

El 70-80% de los empleos no se publican en portales. Se llenan por referidos internos, networking y candidatos que llegaron por la puerta trasera. Las entrevistas informativas son una de las herramientas más poderosas para acceder a ese mercado oculto.

### ¿Qué es una entrevista informativa?

Una conversación de 20-30 minutos donde TÚ haces las preguntas. El objetivo no es conseguir trabajo directamente, sino aprender sobre una industria, empresa o rol de alguien que ya está ahí. El beneficio indirecto: quedar grabado en la mente del profesional para cuando haya una apertura.

### Por qué funciona

La mayoría de personas disfruta hablar de su trabajo cuando alguien muestra interés genuino. Al pedir consejo en lugar de empleo, eliminas la presión. La conversación es más natural, genuina y memorable.

### Cómo conseguirla en 4 pasos

**Paso 1: Identifica a las personas correctas**
En LinkedIn: personas que trabajan en roles o empresas que te interesan, egresados de tu universidad, con 2-10 años de experiencia en lo que quieres hacer.

**Paso 2: Envía un mensaje personalizado**
"Hola [Nombre], soy [tu nombre], estudiante de [carrera] en [universidad]. He visto tu trayectoria en [empresa] y me resulta muy interesante. ¿Tendrías 20 minutos para una llamada? Me gustaría aprender sobre tu experiencia en [área específica]. Soy completamente flexible con el horario."

Tasa de respuesta: 30-50% cuando el mensaje es personalizado.

**Paso 3: Prepara preguntas inteligentes**
- ¿Cómo llegaste a este rol? ¿Qué harías diferente hoy?
- ¿Qué habilidades son más importantes para prosperar aquí?
- ¿Qué tendencias ves en esta industria en los próximos 2-3 años?
- ¿Hay alguien más con quien me recomiendarías hablar?

**Paso 4: El follow-up que genera oportunidades**
Dentro de 24 horas: email de agradecimiento mencionando algo específico de la conversación. 2-3 semanas después: comparte un artículo relevante. Mantén contacto sin pedir nada durante 3-6 meses.

### Errores a evitar

- Convertirla en entrevista de trabajo (pedir empleo directamente)
- Llegar sin preguntas preparadas
- Hablar más de ti mismo que escuchar
- No hacer seguimiento después

### Cuántas hacer

Para búsqueda activa: 2-3 entrevistas informativas por semana. Una conexión genuina semanal puede transformar tu red en 2-3 meses.

---

*Con MoonJab puedes practicar tu pitch y preparar las preguntas correctas para cada conversación.*
    `,
    date: '8 Feb 2025',
    readTime: '6 min',
    category: 'Networking',
    author: 'Salvador',
    authorRole: 'CEO de MoonJab',
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=450&fit=crop',
    featured: false
  },
  {
    id: 'networking-introvertidos',
    isoDate: '2025-02-01',
    title: 'Networking para introvertidos: conectar sin fingir ser extrovertido',
    excerpt: 'Si las redes de contacto se sienten forzadas o incómodas, esta guía es para ti. Estrategias de networking auténtico adaptadas a personalidades introvertidas.',
    content: `
## El mito del networking extrovertido

El networking no requiere ser la persona más sociable de la sala. Requiere ser genuino, preparado y estratégico. Los introvertidos tienen ventajas únicas: escuchan mejor, hacen preguntas más profundas y construyen relaciones más sólidas.

El problema: la mayoría de consejos de networking están escritos para extrovertidos.

### Por qué el networking tradicional agota

Los eventos masivos, las conversaciones superficiales con desconocidos, el hablar de uno mismo constantemente — van en contra de cómo los introvertidos procesan la energía social. La solución no es forzarte a actuar como extrovertido. Es encontrar formatos que funcionen para ti.

### 6 estrategias para introvertidos

**1. Calidad sobre cantidad**
Mejor 3 conversaciones profundas que 15 intercambios superficiales. Los introvertidos son naturalmente buenos en conversaciones uno a uno. Explota esa ventaja.

**2. Prepárate más que todos**
La ansiedad disminuye con preparación. Antes de cualquier evento, investiga quién va, prepara 3-5 temas de conversación y define con quién quieres hablar específicamente.

**3. LinkedIn como sala de networking favorita**
Para muchos introvertidos, las conversaciones escritas son más naturales. Permite networking profundo sin la presión de la interacción cara a cara.

**4. Organiza eventos pequeños**
En lugar de ir a eventos de 200 personas, organiza un almuerzo de 4-6 con un tema específico. Como organizador controlas el formato y el ambiente.

**5. Encuentra aliados en cada evento**
Busca a la persona que también está sola al margen. Ambos agradecerán la conexión. Presentarte a alguien perdido es más fácil que interrumpir un grupo formado.

**6. La estrategia de "dos preguntas"**
Ten siempre preparadas: "¿Cómo llegaste a trabajar en esto?" y "¿Qué es lo más interesante que estás haciendo ahora?" Las personas aman hablar de su historia cuando alguien pregunta con genuino interés.

### El activo secreto del introvertido: la escucha activa

Mientras la mayoría habla de sí misma, tú escuchas. Las personas recuerdan a quienes las hacen sentir escuchadas. Una conversación donde preguntaste y escuchaste genuinamente tiene más impacto que 10 conversaciones superficiales.

Planifica también tiempo de recuperación después de eventos sociales. No es debilidad — es autoconocimiento.

---

*MoonJab te ayuda a preparar tu elevator pitch para que cada conexión cuente, independientemente de tu estilo social.*
    `,
    date: '1 Feb 2025',
    readTime: '6 min',
    category: 'Networking',
    author: 'Salvador',
    authorRole: 'CEO de MoonJab',
    image: 'https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?w=800&h=450&fit=crop',
    featured: false
  },
  {
    id: 'presencia-digital-profesional',
    isoDate: '2025-01-25',
    title: 'Cómo construir tu marca personal digital como estudiante universitario',
    excerpt: 'Tu huella digital es tu carta de presentación en 2025. Aprende a gestionarla para atraer oportunidades laborales antes de graduarte.',
    content: `
## Tu marca personal existe aunque no la gestiones

Búscate en Google ahora mismo. Lo que encuentras (o no encuentras) es tu marca personal digital. Los reclutadores hacen esto antes de cada entrevista. La pregunta no es si tienes marca personal — es si estás gestionando lo que la gente encuentra cuando te busca.

### Por qué importa especialmente para estudiantes

Sin años de experiencia, tu marca digital puede compensar la falta de historial laboral. Un portafolio online, una presencia activa en LinkedIn y contenido publicado demuestran competencia antes de que alguien te dé la oportunidad.

### Los 4 pilares de tu marca digital

**1. Tu presencia en buscadores**
El primer resultado al buscar tu nombre debe ser tu LinkedIn, seguido de tu portafolio. Para mejorar el posicionamiento:
- Usa el mismo nombre completo en todas las plataformas profesionales
- Activa tu URL personalizada en LinkedIn (linkedin.com/in/tunombre)

**2. Tu perfil de LinkedIn optimizado**
Foto profesional, headline específico, resumen en primera persona, proyectos documentados. Un perfil incompleto o desactualizado perjudica.

**3. Un portafolio online (si tu carrera lo permite)**
Indispensable para diseño, programación, marketing digital. Muy recomendado para ingeniería, arquitectura, economía. Herramientas: Notion (gratuito, fácil), Behance (diseño), GitHub (programación).

**4. Contenido que demuestra conocimiento**
No tienes que ser influencer. Publicar 1-2 veces al mes en LinkedIn sobre tu campo ya te posiciona:
- Lo que aprendiste en un curso o evento
- Un artículo de tu industria con tu opinión
- Un proyecto completado con resultados
- Un insight de tu carrera universitaria

### La regla de oro: consistencia sobre cantidad

Una publicación mensual bien pensada supera a cinco semanales mediocres. Los reclutadores buscan señales de conocimiento genuino, no volumen.

### Qué evitar

- Fotos comprometedoras en redes públicas (revisa privacidad en Instagram y Facebook)
- Opiniones políticas o religiosas polémicas en perfiles profesionales
- Inconsistencias en nombre, cargo o fechas entre plataformas

### El ejercicio de la auditoría digital

Una vez al mes, búscate en Google Incógnito (resultados objetivos, no personalizados). ¿Lo que aparece refleja al profesional que quieres ser? ¿Hay algo que quisieras que no estuviera? ¿Falta algo importante?

---

*Construye el CV y perfil profesional que complementa tu presencia digital. Empieza gratis en MoonJab.*
    `,
    date: '25 Ene 2025',
    readTime: '6 min',
    category: 'Networking',
    author: 'Salvador',
    authorRole: 'CEO de MoonJab',
    image: 'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?w=800&h=450&fit=crop',
    featured: false
  },
  // CV (2 more)
  {
    id: 'carta-presentacion-2025',
    isoDate: '2025-02-12',
    title: 'Cómo escribir una carta de presentación que sí se lea en 2025',
    excerpt: 'Estructura, ejemplos y errores a evitar en tu carta de presentación para el mercado laboral LATAM actual. Incluye plantilla lista para adaptar.',
    content: `
## ¿Se leen las cartas de presentación en 2025?

Depende. En empresas grandes con muchos postulantes, pocas se leen. En startups, consultoras y empresas donde el fit cultural importa, casi siempre se leen. El criterio: si el anuncio la pide, envíala bien o no la envíes. Una carta genérica perjudica más que no enviarla.

### Los 3 tipos en LATAM

**1. Carta adjunta en email**
La más común. Es el cuerpo del email con el CV adjunto. Breve (3-4 párrafos) y con call to action claro.

**2. Carta formal en documento**
Cuando el proceso lo requiere explícitamente. Formato de carta formal: fecha, destinatario, saludo, cuerpo, cierre y firma.

**3. Carta en formulario online**
Campo de texto libre en el ATS. Adapta el contenido pero evita Markdown y caracteres especiales.

### La estructura que funciona

**Párrafo 1: El gancho (2-3 líneas)**
¿Por qué ESTA empresa? Menciona algo específico investigado.
"El lanzamiento de [producto X] en [país] es exactamente el tipo de proyecto donde quiero contribuir."

**Párrafo 2: Tu propuesta de valor (3-4 líneas)**
Conecta tus habilidades con lo que la empresa necesita. Un ejemplo concreto con resultado medible supera una lista de adjetivos.

**Párrafo 3: El cierre (2-3 líneas)**
Expresa interés en el siguiente paso. "Me gustaría tener la oportunidad de conversar sobre cómo puedo contribuir al equipo."

### Plantilla lista para adaptar

"Estimado/a [Nombre o 'equipo de [empresa]'],

Me postulo para el rol de [posición] con genuino entusiasmo. [Algo específico de la empresa — logro reciente, proyecto, valor declarado — y por qué te conecta con ellos].

[2-3 líneas sobre tu experiencia más relevante con un resultado concreto si puedes]. Creo que esta combinación de [habilidad 1] y [habilidad 2] puede contribuir directamente a [objetivo del rol o equipo].

Quedo a disposición para conversarlo en una entrevista. Adjunto mi CV.

Saludos,
[Tu nombre]"

### Los 5 errores más comunes

❌ Empezar con "Me llamo..." — aburre desde la primera línea
❌ Copiar el mismo texto para cada empresa
❌ Resumir el CV en lugar de complementarlo
❌ Exceder una página (o 4 párrafos en email)
❌ No mencionar nada específico de la empresa

### Para estudiantes sin experiencia

Tu carta debe destacar:
- Un proyecto académico relevante con resultado medible
- Habilidades técnicas específicas que el rol requiere
- Tu motivación genuina por la industria o empresa
- Disponibilidad y velocidad de aprendizaje con un ejemplo

---

*MoonJab te ayuda a crear el perfil profesional completo: CV optimizado más materiales de postulación.*
    `,
    date: '12 Feb 2025',
    readTime: '7 min',
    category: 'CV',
    author: 'Salvador',
    authorRole: 'CEO de MoonJab',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef6e8b?w=800&h=450&fit=crop',
    featured: false
  },
  {
    id: 'palabras-clave-cv-ats-latam',
    isoDate: '2025-01-18',
    title: 'Las palabras clave que debes incluir en tu CV para el mercado LATAM en 2025',
    excerpt: 'Guía por industria de las keywords más buscadas por reclutadores y sistemas ATS en Perú, México, Colombia, Argentina y Chile, con ejemplos reales.',
    content: `
## Por qué las palabras clave determinan si tu CV es leído

Los sistemas ATS filtran CVs buscando términos específicos antes de que un humano los vea. Si tu CV no contiene las palabras exactas que el sistema busca, eres eliminado automáticamente sin importar tu calificación real.

La solución: adaptar tu CV a cada postulación usando las keywords del anuncio de trabajo. Pero hay términos universales por industria que siempre deberías tener.

### Cómo extraer palabras clave de un anuncio

1. Copia el texto completo del anuncio
2. Identifica los términos que aparecen más de una vez
3. Presta atención especial a: nombre exacto del puesto, herramientas y software, metodologías, certificaciones, habilidades blandas específicas
4. Incorpora esas palabras exactas en tu CV de forma natural

### Keywords esenciales por industria en LATAM

**Tecnología / Desarrollo de Software**
Python, JavaScript, Java, SQL, TypeScript, React, Node.js, Git, Docker, AWS, Azure, Agile, Scrum, DevOps, CI/CD

**Marketing Digital**
Google Analytics, Google Ads, Meta Ads, SEO, SEM, HubSpot, Salesforce, CRM, growth hacking, KPIs, ROI, CAC, LTV, funnel de ventas

**Finanzas y Contabilidad**
Excel avanzado, SAP, ERP, NIIF/IFRS, análisis financiero, modelado financiero, flujo de caja, Power BI, control interno, riesgo crediticio

**Recursos Humanos**
Reclutamiento y selección, onboarding, gestión del talento, nómina, compensaciones, LinkedIn Recruiter, Workday, evaluación de desempeño

**Ingeniería (Industrial, Civil, Mecánica)**
AutoCAD, SolidWorks, Lean Manufacturing, Six Sigma, 5S, gestión de proyectos, MS Project, ISO 9001, control de calidad

**Administración y Gestión de Proyectos**
PMP, PMI, PMBOK, OKRs, KPIs, balanced scorecard, gestión del cambio, liderazgo de equipos, Power BI, presentaciones ejecutivas

### Keywords universales que siempre suman

- Excel avanzado / Microsoft Office Suite
- Análisis de datos
- Inglés avanzado (B2/C1) o nivel de certificación (TOEFL, IELTS, Cambridge)
- Trabajo bajo presión
- Liderazgo de equipos multidisciplinarios
- Orientación a resultados

### El error crítico: no uses sinónimos

Si el anuncio dice "Google Analytics" y tú pones "herramientas de analítica web", el ATS no lo reconoce como match. Usa los términos exactos del anuncio.

---

*El CV Builder de MoonJab analiza el anuncio y sugiere automáticamente las palabras clave que debes incluir para maximizar tu score ATS.*
    `,
    date: '18 Ene 2025',
    readTime: '7 min',
    category: 'CV',
    author: 'Salvador',
    authorRole: 'CEO de MoonJab',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=450&fit=crop',
    featured: false
  },
  // Carrera (2 more)
  {
    id: 'primer-empleo-90-dias',
    isoDate: '2025-02-18',
    title: 'Los primeros 90 días en tu primer trabajo: cómo causar una excelente primera impresión',
    excerpt: 'Lo que hagas en tus primeros 90 días define tu reputación para los próximos años. Guía práctica para entrar fuerte a tu primer empleo en LATAM.',
    content: `
## Los 90 días que definen los próximos años

En los primeros 90 días en cualquier trabajo, te formas una reputación que es difícil de cambiar después. Las personas forman opiniones rápidas. Y en tu primer empleo, todo es amplificado porque no tienes experiencia previa que te respalde.

### Los primeros 30 días: escuchar y entender

El error más común de recién graduados: llegar con muchas ideas y poca comprensión del contexto. Antes de proponer cambios, entiende cómo funcionan las cosas.

**Prioridades semana 1:**
- Aprende los nombres de todos en el equipo (y el extendido)
- Entiende el organigrama formal e informal (quién influye realmente)
- Identifica las prioridades actuales del equipo
- Cumple cada deadline, por pequeño que sea

**Prioridades semana 2-4:**
- Haz preguntas inteligentes (demuestran que piensas, no que no sabes)
- Solicita feedback temprano de tu supervisor
- Identifica al referente de cada tema
- Entiende el flujo real de trabajo (cómo se hacen las cosas aquí)

### Los días 31-60: contribuir y mostrar iniciativa

Ya entendiste el contexto. Ahora contribuye con algo visible.

**Busca una victoria rápida**
Algo que puedas completar en 30-45 días: automatizar un proceso manual, mejorar un reporte, documentar algo. No tiene que ser grande, solo visible y útil. Una "quick win" establece credibilidad temprana.

**Sobre-entrega**
No hagas solo lo que piden. Entrega lo pedido más un pequeño valor agregado. Si piden un análisis de ventas, entrega el análisis más una observación que nadie había notado.

**Construye relaciones laterales**
Los mejores colaboradores tienen aliados en toda la organización, no solo con su jefe. Toma café (virtual o presencial) con personas de otros equipos.

### Los días 61-90: demostrar autonomía y criterio

En esta etapa, deben empezar a confiar tu juicio en cosas pequeñas. Si no, pregunta qué necesitas hacer para que eso suceda.

**Solicita una reunión de 60-90 días**
Con tu supervisor: "¿Puedo tener 20 minutos para revisar mi progreso y saber cómo seguir mejorando?" Muestra madurez profesional y te da información antes de tu evaluación formal.

### Lo que nunca debes hacer

❌ Llegar tarde a nada — reuniones, deadlines, horario de entrada
❌ Decir "en mi universidad hacíamos las cosas diferente" repetidamente
❌ No pedir ayuda cuando la necesitas (no muestra debilidad, muestra criterio)
❌ Prometer cosas que no puedes cumplir para quedar bien
❌ Ignorar el contexto político informal de la organización

---

*MoonJab te prepara para conseguir el trabajo. Lo que haces después también importa.*
    `,
    date: '18 Feb 2025',
    readTime: '7 min',
    category: 'Carrera',
    author: 'Salvador',
    authorRole: 'CEO de MoonJab',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=450&fit=crop',
    featured: false
  },
  {
    id: 'habilidades-digitales-2025-latam',
    isoDate: '2025-02-03',
    title: 'Las 10 habilidades digitales más demandadas en LATAM para 2025',
    excerpt: 'Qué habilidades técnicas y digitales priorizan las empresas al contratar en Latinoamérica, con datos reales de anuncios de trabajo en LinkedIn y Computrabajo.',
    content: `
## El mercado laboral LATAM en 2025: qué buscan las empresas

El 82% de las vacantes publicadas en LATAM en 2024 mencionaron al menos una habilidad digital como requisito, aunque sea para roles no técnicos. La brecha de habilidades digitales es la principal razón por la que candidatos calificados son rechazados en primeros filtros.

### 1. Excel avanzado y análisis de datos

Presente en el 68% de las vacantes de administración, finanzas, marketing y operaciones. El nivel "avanzado" que buscan: tablas dinámicas, fórmulas complejas (VLOOKUP, XLOOKUP, INDEX-MATCH), macros básicas y dashboards.

### 2. Python básico para análisis y automatización

La habilidad de más rápido crecimiento en demanda. Ya no es exclusivo de roles técnicos: analistas de marketing, operaciones y finanzas con Python básico son mucho más empleables.

Nivel requerido para no-técnicos: scripts simples de automatización, pandas para análisis, matplotlib para visualización básica.

### 3. SQL para consulta de bases de datos

Fundamental para cualquier rol que trabaje con datos. Un analista que puede escribir queries básicas es infinitamente más valioso que uno que no puede.

Nivel básico: SELECT, WHERE, JOIN, GROUP BY, ORDER BY en cualquier base de datos relacional.

### 4. Herramientas de IA (ChatGPT, Copilot, Gemini)

Las empresas ya esperan que sus empleados usen IA generativa para aumentar productividad. Saber usarlas bien (prompting efectivo, casos de uso correctos, limitaciones) es diferencial en 2025.

### 5. Power BI o Tableau

Los dashboards ejecutivos ya no son tarea exclusiva del equipo de datos. Managers y analistas deben poder crear y actualizar reportes visuales sin depender de IT.

### 6. CRM: Salesforce, HubSpot o similares

Para roles de ventas, marketing y atención al cliente, el manejo de CRM es frecuentemente requisito en lugar de "plus".

### 7. Gestión de proyectos (Notion, Jira, Asana, Monday)

Las empresas organizan su trabajo en herramientas colaborativas digitales. Conocerlas y saber gestionar proyectos en entornos ágiles es habilidad transversal muy valorada.

### 8. Marketing digital: Meta Ads y Google Ads

No solo para marketers. Los gerentes de producto y especialistas de crecimiento necesitan entender cómo funcionan las plataformas de publicidad para tomar mejores decisiones.

### 9. Inglés nivel B2 o superior

La brecha salarial entre quienes hablan inglés y quienes no en LATAM es del 30-50% para el mismo rol. En empresas internacionales y startups tech es requisito no negociable.

### 10. Ciberseguridad básica y protección de datos

Con el aumento de regulaciones de privacidad en LATAM, el conocimiento básico de protección de datos y buenas prácticas de seguridad se ha vuelto transversal.

### Cómo priorizar qué aprender

**Negocios/administración/economía:** Excel avanzado → Python básico → Power BI → SQL

**Marketing/comunicaciones:** Meta Ads → Google Analytics → HubSpot → Excel

**Ingeniería:** Python → SQL → Git → herramientas ágiles

**Para todos:** Inglés (si es tu debilidad más grande, es la inversión con mayor ROI)

---

*Incluye tus habilidades digitales en tu CV de MoonJab y asegúrate de que el ATS las detecte correctamente.*
    `,
    date: '3 Feb 2025',
    readTime: '7 min',
    category: 'Carrera',
    author: 'Salvador',
    authorRole: 'CEO de MoonJab',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66936?w=800&h=450&fit=crop',
    featured: false
  },
  // Salario (4 more)
  {
    id: 'sueldos-tecnologia-latam-2025',
    isoDate: '2025-02-20',
    title: 'Sueldos en tecnología en LATAM 2025: rangos reales por rol y país',
    excerpt: 'Cuánto ganan desarrolladores, diseñadores UX, data analysts y product managers en Perú, México, Colombia, Argentina y Chile en 2025, con datos actualizados.',
    content: `
## Los sueldos tech en LATAM: la brecha que pocos conocen

Los sueldos de tecnología en Latinoamérica tienen una brecha enorme entre empresas locales, multinacionales y empresas globales que contratan remotamente. Conocer estos rangos te da poder de negociación.

*Valores referenciales. Varían según empresa, nivel de inglés, experiencia y modalidad de contratación.*

### Perú — Soles por mes (2025)

| Rol | Junior | Mid | Senior |
|-----|--------|-----|--------|
| Developer Frontend/Backend | S/2,500–4,000 | S/4,000–7,000 | S/7,000–12,000 |
| Data Analyst | S/2,000–3,500 | S/3,500–6,000 | S/6,000–10,000 |
| UX/UI Designer | S/2,000–3,500 | S/3,500–6,000 | S/6,000–9,000 |
| Product Manager | S/3,000–5,000 | S/5,000–9,000 | S/9,000–15,000 |

### México — Pesos por mes (2025)

| Rol | Junior | Mid | Senior |
|-----|--------|-----|--------|
| Developer Frontend/Backend | $15,000–25,000 | $25,000–45,000 | $45,000–80,000 |
| Data Analyst | $12,000–20,000 | $20,000–38,000 | $38,000–65,000 |
| UX/UI Designer | $12,000–20,000 | $20,000–38,000 | $38,000–60,000 |
| Product Manager | $18,000–32,000 | $32,000–60,000 | $60,000–100,000+ |

### Colombia — Millones de pesos por mes (2025)

| Rol | Junior | Mid | Senior |
|-----|--------|-----|--------|
| Developer Frontend/Backend | $3M–6M | $6M–10M | $10M–18M |
| Data Analyst | $2.5M–5M | $5M–9M | $9M–15M |
| UX/UI Designer | $2.5M–5M | $5M–9M | $9M–14M |
| Product Manager | $4M–8M | $8M–14M | $14M–25M+ |

### Chile — CLP por mes (2025)

| Rol | Junior | Mid | Senior |
|-----|--------|-----|--------|
| Developer Frontend/Backend | $900K–1.5M | $1.5M–2.5M | $2.5M–4M+ |
| Data Analyst | $800K–1.4M | $1.4M–2.2M | $2.2M–3.5M |
| UX/UI Designer | $800K–1.4M | $1.4M–2.2M | $2.2M–3.5M |
| Product Manager | $1.2M–2M | $2M–3.5M | $3.5M–6M+ |

### El multiplicador: trabajar en USD

Los roles remotos para empresas de EEUU o Europa pagan en USD — en LATAM puede significar 2-4x el sueldo local. Para desarrolladores con inglés C1:
- Junior: USD $1,500–3,000/mes
- Mid: USD $3,000–6,000/mes
- Senior: USD $6,000–12,000/mes

Plataformas para buscar estos roles: Toptal, Turing.com, Arc.dev, LinkedIn Jobs con filtro "remote" en empresa de EEUU.

### Qué determina tu rango

- **Inglés:** el factor individual con mayor impacto salarial en LATAM
- **Industria:** fintech, SaaS, e-commerce pagan más que retail o manufactura
- **Modalidad:** remoto global > multinacional > empresa local
- **Portafolio:** proyectos demostrables superan títulos para muchos roles tech

---

*Usa MoonJab para crear un CV que refleje correctamente tu nivel y negocia desde una posición de conocimiento.*
    `,
    date: '20 Feb 2025',
    readTime: '8 min',
    category: 'Salario',
    author: 'Salvador',
    authorRole: 'CEO de MoonJab',
    image: 'https://images.unsplash.com/photo-1554224154-26032e6b2e8b?w=800&h=450&fit=crop',
    featured: false
  },
  {
    id: 'pedir-aumento-sueldo-estrategia',
    isoDate: '2025-01-30',
    title: 'Cómo pedir un aumento de sueldo con estrategia (scripts reales incluidos)',
    excerpt: 'El momento ideal, los argumentos correctos y las palabras exactas para negociar un aumento de sueldo y conseguirlo. Con scripts listos para usar.',
    content: `
## El error más caro: no pedir

El 60% de los empleados en LATAM nunca ha pedido un aumento. El resultado: ganan entre 10-30% menos de lo que podrían. Un aumento conseguido hoy tiene efecto compuesto en todos tus sueldos futuros.

### Cuándo pedir: el timing que maximiza probabilidades

**Momentos favorables:**
- Después de un logro visible con impacto medible
- En tu evaluación de desempeño anual
- Cuando asumes responsabilidades nuevas
- Cuando tienes una oferta externa (con cuidado)
- Cuando el mercado tiene muchas vacantes similares a la tuya

**Momentos desfavorables:**
- Después de un error o proyecto que salió mal
- Durante recortes presupuestarios o crisis de la empresa
- En los primeros 6 meses de empleo
- Cuando tu jefe está bajo mucha presión operativa

### Los 3 pilares de preparación

**Pilar 1: Investiga el mercado**
Glassdoor, LinkedIn Salary, Indeed Salaries. Pregunta discretamente a colegas en roles similares. Revisa anuncios con salario visible para tu rol.

**Pilar 2: Documenta tu impacto**
Lista concreta desde tu último ajuste: proyectos completados (con resultados), responsabilidades nuevas, problemas resueltos, ahorros o ingresos generados.

**Pilar 3: Define tus números**
- Ideal: 15-20% sobre sueldo actual
- Target: 10-15% (donde realmente quieres llegar)
- Mínimo: 7-8% (por debajo de esto, considera si vale la pena quedarte)

### Scripts reales para pedir el aumento

**Para solicitar la reunión:**
"Hola [jefe], me gustaría agendar 30 minutos para hablar sobre mi compensación y mis objetivos. ¿Tienes disponibilidad esta semana?"

**Para abrir la conversación:**
"Quiero hablar sobre mi compensación. He reflexionado sobre el valor que he aportado en el último año y creo que hay espacio para ajustar mi sueldo en línea con el mercado y mis nuevas responsabilidades."

**Para presentar tu caso:**
"Desde [fecha], he [logro 1 con número] y asumí [responsabilidad nueva]. Al investigar el mercado para mi rol, encuentro que el rango es de [X a Y]. Me gustaría llegar a [número específico]."

**Si dicen que no hay presupuesto ahora:**
"Lo entiendo. ¿Podemos acordar un número concreto y una fecha específica para revisarlo? Me gustaría saber qué métricas necesito alcanzar para que esto sea posible."

### La oferta externa: úsala con cuidado

Es el argumento más fuerte pero también el más arriesgado. Solo úsalo si genuinamente estás dispuesto a aceptar esa oferta si no te igualan.

### Después de la reunión

- Si dijeron sí: pídelo por escrito
- Si dijeron no ahora: acuerda fecha y criterios concretos
- Si dijeron no definitivamente: evalúa si quieres seguir o buscar

---

*Practica tu conversación de negociación salarial con el simulador de MoonJab antes de tenerla en la vida real.*
    `,
    date: '30 Ene 2025',
    readTime: '7 min',
    category: 'Salario',
    author: 'Salvador',
    authorRole: 'CEO de MoonJab',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&h=450&fit=crop',
    featured: false
  },
  {
    id: 'beneficios-laborales-negociar-latam',
    isoDate: '2025-01-15',
    title: 'Más allá del sueldo: qué beneficios laborales negociar en LATAM',
    excerpt: 'Cuando el salario base es el límite, hay mucho más que puedes negociar. Guía de beneficios laborales por tipo de empresa en Latinoamérica.',
    content: `
## El paquete completo vale más que el sueldo base

Los beneficios laborales pueden representar el 20-40% adicional al sueldo base. Un candidato que negocia solo el salario deja mucho valor sobre la mesa. Los beneficios frecuentemente tienen más flexibilidad que el sueldo base, que suele estar atado a bandas salariales internas rígidas.

### Beneficios económicos directos

- **Bono de firma:** pago único al ingresar, típico en sectores con alta demanda de talento
- **Bono de desempeño:** porcentaje del sueldo anual atado a objetivos (común en ventas, consultoría, finanzas)
- **Participación en utilidades:** obligatorio en México y Brasil, voluntario en otros países
- **Stock options o equity:** principalmente en startups y empresas tech

### Beneficios de salud

- **Seguro médico privado** (para ti y familia): puede representar $200-500 USD/mes de valor
- Seguro dental y visual
- Programa de bienestar mental (sesiones con psicólogos, apps de meditación)
- Membresía de gimnasio

### Beneficios de tiempo

- **Días de vacaciones adicionales** (más allá del mínimo legal)
- **Días de trabajo remoto** (si el rol es presencial o híbrido)
- Horario flexible (entrada y salida ajustable)
- Viernes de salida temprana
- Licencia parental extendida

### Beneficios de desarrollo

- **Presupuesto de capacitación y cursos:** $500-2,000 USD/año en empresas medianas
- Pago de certificaciones profesionales (AWS, PMP, CFA, etc.)
- Acceso a plataformas de aprendizaje (LinkedIn Learning, Coursera, Platzi para empresas)
- Tiempo laboral para proyectos de aprendizaje

### Beneficios operativos

- Subsidio de transporte o parking
- Alimentación (casino subsidiado, vales de comida)
- Subsidio de internet y equipo para home office
- Celular corporativo
- Equipamiento completo de oficina en casa

### Estrategia: cómo negociarlos

**Paso 1:** Prioriza qué beneficios te importan más antes de la conversación.

**Paso 2:** Presenta el paquete completo, no elemento por elemento. "Si el sueldo no puede moverse, ¿podría incluir [X, Y, Z]?"

**Paso 3:** Cuantifica el valor cuando puedas. "El seguro médico privado equivale a aproximadamente $300 USD mensuales. ¿Podría incluirse?"

### Lo que raramente dan sin negociar

Suelen incluirse sin pedirlo: seguro médico básico, vacaciones mínimas legales, aguinaldo legal.

Raramente incluyen sin negociar: días extra de vacaciones, presupuesto de capacitación personal, trabajo remoto adicional, bono de firma, equipamiento completo de home office.

---

*MoonJab te prepara para conseguir el trabajo y para negociar las mejores condiciones desde el primer día.*
    `,
    date: '15 Ene 2025',
    readTime: '7 min',
    category: 'Salario',
    author: 'Salvador',
    authorRole: 'CEO de MoonJab',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=450&fit=crop',
    featured: false
  },
  {
    id: 'freelance-vs-empleo-economia-latam',
    isoDate: '2025-01-08',
    title: 'Freelance vs. empleo formal en LATAM: ¿qué conviene más en 2025?',
    excerpt: 'Comparativa real entre trabajar como independiente o en relación de dependencia en Latinoamérica, con números reales y factores que la mayoría ignora.',
    content: `
## La pregunta que más frecuentemente evitan responder con números

"¿Debo ser freelance o buscar un empleo fijo?" La respuesta honesta: depende de tus prioridades, tolerancia al riesgo y etapa de carrera. Pero hay factores concretos que la mayoría ignora al tomar esta decisión.

### La trampa del ingreso bruto

Si un empleo ofrece $2,000 USD/mes y como freelance facturas $3,000 USD/mes, ¿ganas más como freelance? No necesariamente.

**Lo que el empleo formal incluye (y el freelance no):**
- Seguridad social y pensión (el empleador paga una parte)
- Seguro médico (si es parte del beneficio)
- Vacaciones pagadas (15-30 días/año = 4-8% del salario bruto)
- Aguinaldo o decimotercer mes (obligatorio en muchos países = 8.3% mensual)
- Estabilidad de ingreso sin costo de adquisición de clientes
- Herramientas, equipo y espacio de trabajo

**Lo que el freelance requiere pagar tú:**
- Seguro médico propio
- Cotización de pensión propia
- Impuestos completos sin beneficios laborales
- Marketing y adquisición de clientes (tiempo = dinero)
- Herramientas y software
- Costo de meses entre clientes (el downtime no se paga)

### Regla práctica: el multiplicador freelance

Para igualar el beneficio real de un empleo con sueldo X, como freelance debes facturar aproximadamente 1.4 a 1.6 veces X. Si el empleo paga $2,000 USD, necesitas facturar $2,800-3,200 para estar en posición equivalente.

### Las ventajas reales del freelance

- Diversificación: múltiples clientes, no dependes de uno
- Flexibilidad total: horarios, lugar, proyectos
- Potencial ilimitado de ingreso (el mercado limita, no un jefe)
- Control de carrera: eliges con quién trabajas y en qué

### Las ventajas reales del empleo (que los freelancers subestiman)

- Estabilidad predecible: sabes cuánto entra cada mes
- Protección legal y social
- Aprendizaje estructurado: mentores, feedback continuo
- "Trabajé en [empresa conocida]" abre puertas que el freelance no abre

### ¿Cuándo freelance tiene sentido?

- Tienes habilidades específicas con demanda clara (diseño, programación, copywriting)
- Ya tienes una red de clientes potenciales
- Al menos 2-3 años de experiencia en tu área
- Puedes mantener 3-6 meses de gastos como colchón
- Tienes tolerancia emocional a la incertidumbre económica

### La estrategia del freelance paralelo

Muchos en LATAM optan por el mejor de ambos mundos: empleo de tiempo completo + proyectos freelance fuera de horario. Esto construye portafolio y flujo de clientes antes de dar el salto.

*Importante: verifica que tu contrato permita actividades freelance en áreas no competitivas con tu empleador.*

---

*Sea cual sea tu camino, MoonJab te ayuda a presentar tu experiencia de la mejor manera posible.*
    `,
    date: '8 Ene 2025',
    readTime: '8 min',
    category: 'Salario',
    author: 'Salvador',
    authorRole: 'CEO de MoonJab',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=450&fit=crop',
    featured: false
  }
];

const Blog = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [...new Set(blogPosts.map(post => post.category))];
  const filteredPosts = selectedCategory 
    ? blogPosts.filter(p => p.category === selectedCategory)
    : blogPosts;

  const featuredPost = blogPosts.find(p => p.featured);
  const regularPosts = filteredPosts.filter(p => !p.featured || selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Blog de Empleabilidad — CV ATS, Entrevistas y Primer Empleo"
        description="Guías prácticas sobre cómo crear un CV optimizado para ATS, preparar entrevistas laborales y conseguir tu primer trabajo o prácticas profesionales en LATAM."
        path="/blog"
        keywords="blog empleabilidad latam, cv ats, entrevistas de trabajo, primer empleo estudiante, prácticas profesionales, carrera universitaria"
        breadcrumbs={[{ name: 'Blog', url: 'https://moonjab.com/blog' }]}
        schema={[
          {
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            '@id': 'https://moonjab.com/blog#collection',
            name: 'Blog MoonJab — Empleabilidad para Estudiantes LATAM',
            description: 'Guías prácticas sobre CV, entrevistas, networking, salarios y carrera profesional para estudiantes universitarios en Latinoamérica.',
            url: 'https://moonjab.com/blog',
            publisher: { '@id': 'https://moonjab.com/#organization' },
            inLanguage: 'es',
            about: [
              { '@type': 'Thing', name: 'Curriculum Vitae' },
              { '@type': 'Thing', name: 'Entrevistas de trabajo' },
              { '@type': 'Thing', name: 'Primer empleo' },
              { '@type': 'Thing', name: 'Empleabilidad en LATAM' },
            ],
          },
          {
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            '@id': 'https://moonjab.com/blog#posts',
            name: 'Artículos del blog MoonJab',
            itemListElement: blogPosts.slice(0, 10).map((post, idx) => ({
              '@type': 'ListItem',
              position: idx + 1,
              name: post.title,
              url: `https://moonjab.com/blog/${post.id}`,
              description: post.excerpt,
            })),
          },
        ]}
      />
      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/50">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between max-w-7xl">
          <OfficialLogo size="lg" to="/" />
          <ThemeToggle />
        </div>
      </nav>

      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl sm:text-6xl font-heading font-bold mb-4 tracking-tight">
              Blog
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Consejos prácticos, tendencias y recursos para impulsar tu carrera profesional
            </p>
          </motion.div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <Button
              variant={selectedCategory === null ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(null)}
            >
              Todos
            </Button>
            {categories.map(cat => (
              <Button
                key={cat}
                variant={selectedCategory === cat ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && !selectedCategory && (
        <section className="pb-16">
          <div className="container mx-auto px-6 max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card 
                className="overflow-hidden cursor-pointer group hover:shadow-2xl transition-all duration-300"
                onClick={() => navigate(`/blog/${featuredPost.id}`)}
              >
                <div className="grid md:grid-cols-2">
                  <div className="aspect-video md:aspect-auto overflow-hidden">
                    <img 
                      src={featuredPost.image} 
                      alt={featuredPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <Badge className="w-fit mb-4 bg-primary/10 text-primary hover:bg-primary/20">
                      {featuredPost.category}
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-primary transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-6">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {featuredPost.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {featuredPost.readTime}
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
      )}

      {/* Regular Posts */}
      <section className="pb-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Card 
                  className="overflow-hidden cursor-pointer group hover:shadow-xl transition-all duration-300 h-full flex flex-col"
                  onClick={() => navigate(`/blog/${post.id}`)}
                >
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <Badge variant="secondary" className="w-fit mb-3">
                      {post.category}
                    </Badge>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2 flex-1">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground pt-4 border-t">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Hub */}
      <section className="py-16 border-t border-border/30">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold mb-2">Herramientas gratuitas de MoonJab</h2>
            <p className="text-muted-foreground">Usa estas herramientas mientras aplicas lo que aprendes en el blog</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: 'CV Builder con IA', desc: 'Crea tu currículum optimizado para ATS en minutos', to: '/cv-builder', label: 'Crear CV gratis' },
              { title: 'Simulador de Entrevistas', desc: 'Practica con preguntas reales y feedback inmediato de IA', to: '/interview-prep', label: 'Practicar ahora' },
              { title: 'Verificador ATS', desc: 'Descubre si tu CV pasa los filtros automáticos de las empresas', to: '/verificador-ats', label: 'Verificar mi CV' },
              { title: 'Guía de Salarios', desc: 'Consulta rangos salariales por rol y país en LATAM', to: '/salario', label: 'Ver salarios' },
              { title: 'Plantillas de CV', desc: 'Plantillas profesionales por profesión, listas para usar', to: '/plantillas-cv', label: 'Ver plantillas' },
              { title: 'Preguntas de Entrevista', desc: 'Banco de preguntas reales por rol e industria', to: '/preguntas-de-entrevista', label: 'Ver preguntas' },
            ].map((tool) => (
              <Link
                key={tool.to}
                to={tool.to}
                className="group flex flex-col p-5 rounded-xl border border-border/50 bg-card hover:border-primary/40 hover:shadow-md transition-all"
              >
                <p className="font-semibold mb-1 group-hover:text-primary transition-colors">{tool.title}</p>
                <p className="text-sm text-muted-foreground flex-1 mb-3">{tool.desc}</p>
                <span className="text-xs font-medium text-primary flex items-center gap-1">
                  {tool.label} <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Recibe los mejores consejos en tu inbox
          </h2>
          <p className="text-muted-foreground mb-8">
            Únete a 10,000+ profesionales que reciben tips semanales para impulsar su carrera.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <input
              type="email"
              placeholder="tu@email.com"
              className="px-4 py-3 rounded-lg border bg-background flex-1 max-w-sm"
            />
            <Button className="px-8">
              Suscribirse
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container mx-auto px-6 max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition-colors">← Inicio</Link>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/cv-builder" className="hover:text-foreground transition-colors">CV Builder</Link>
            <Link to="/interview-prep" className="hover:text-foreground transition-colors">Simulador Entrevistas</Link>
            <Link to="/verificador-ats" className="hover:text-foreground transition-colors">Verificador ATS</Link>
            <Link to="/salario" className="hover:text-foreground transition-colors">Guía Salarios</Link>
            <Link to="/plantillas-cv" className="hover:text-foreground transition-colors">Plantillas CV</Link>
            <Link to="/preguntas-de-entrevista" className="hover:text-foreground transition-colors">Preguntas Entrevista</Link>
            <Link to="/pricing" className="hover:text-foreground transition-colors">Precios</Link>
            <Link to="/about" className="hover:text-foreground transition-colors">Nosotros</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Blog;
