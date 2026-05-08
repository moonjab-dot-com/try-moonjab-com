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
    id: 'como-preparar-una-entrevista-tecnica',
    isoDate: '2024-12-05',
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
    readTime: '8 min',
    category: 'Entrevistas',
    author: 'María González',
    authorRole: 'CEO de MoonJab',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=450&fit=crop',
    featured: true
  },
  {
    id: 'networking-para-conseguir-empleo',
    isoDate: '2024-12-02',
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
    readTime: '6 min',
    category: 'Networking',
    author: 'Carlos Rodríguez',
    authorRole: 'Head of Growth',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=450&fit=crop',
    featured: false
  },
  {
    id: '10-errores-en-tu-cv',
    isoDate: '2024-11-28',
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
    readTime: '7 min',
    category: 'CV',
    author: 'Ana Martínez',
    authorRole: 'Head of Product',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=450&fit=crop',
    featured: false
  },
  {
    id: 'como-cambiar-de-carrera-a-los-30',
    isoDate: '2024-11-25',
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
    readTime: '10 min',
    category: 'Carrera',
    author: 'María González',
    authorRole: 'CEO de MoonJab',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=450&fit=crop',
    featured: false
  },
  {
    id: 'como-negociar-tu-salario',
    isoDate: '2024-11-20',
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
    readTime: '8 min',
    category: 'Salario',
    author: 'Carlos Rodríguez',
    authorRole: 'Head of Growth',
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
    author: 'Ana Martínez',
    authorRole: 'Head of Product',
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
    author: 'Ana Martínez',
    authorRole: 'Head of Product',
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
    author: 'Carlos Rodríguez',
    authorRole: 'Head of Growth',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=450&fit=crop',
    featured: false
  }
];

const blogListSchema = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  '@id': 'https://moonjab.com/blog#blog',
  name: 'Blog MoonJab — Empleabilidad y Carrera para Estudiantes LATAM',
  description: 'Guías expertas sobre CV con IA, preparación de entrevistas y desarrollo de carrera para estudiantes en LATAM.',
  url: 'https://moonjab.com/blog',
  publisher: { '@id': 'https://moonjab.com/#organization' },
  inLanguage: 'es',
  blogPost: blogPosts.map(post => ({
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    url: `https://moonjab.com/blog/${post.id}`,
    datePublished: post.isoDate,
    author: { '@type': 'Person', name: post.author },
    image: post.image,
  })),
};

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
        title="Blog de Empleabilidad para Estudiantes | CV, Entrevistas y Carrera"
        description="Guías expertas sobre CV con IA, preparación de entrevistas, networking y carrera para estudiantes en Perú, México, Colombia, Argentina y Chile. Recursos gratuitos y actualizados."
        path="/blog"
        keywords="blog empleabilidad, consejos CV, preparación entrevistas trabajo, carrera estudiantes LATAM, networking profesional, negociar salario"
        breadcrumbs={[{ name: 'Blog', url: 'https://moonjab.com/blog' }]}
        schema={blogListSchema}
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
                      width="800"
                      height="450"
                      loading="eager"
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
                      width="800"
                      height="450"
                      loading="lazy"
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
        <div className="container mx-auto px-6 text-center">
          <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
            ← Volver al inicio
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Blog;
