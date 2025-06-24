export interface Course {
  title: string;
  intro: string;
  benefits: string[];
  enrollMessage: string;
  images: string[];
  startDate: string;
  courseDuration: string;
  price: string;
  overlayTexts: string[];
  video?: string;
  // Add other fields as needed
  // For example: prerequisites, target audience, etc.
}
const courseData: Record<string, Course> = {
  'scrum-master': {
    title: 'Scrum Master Certified',
    intro: 'El Scrum Master constituye un perfil profesional de trabajo colaborativo y de liderazgo dentro del marco de trabajo Scrum. Es el facilitador del equipo Scrum, encargado de asegurar que se sigan los principios y prácticas de Scrum, ayudando al equipo a alcanzar sus objetivos de sprint. El Scrum Master trabaja para eliminar impedimentos, fomentar la autoorganización y promover un ambiente de mejora continua.',
    benefits: [
      'Dirige las reuniones diarias de preparación y planificación.',
      'Facilita la comunicación entre el equipo y los stakeholders.',
      'Elimina impedimentos que afectan al equipo.',
      'Promueve la mejora continua del equipo Scrum.',
      'Asegura que se sigan los principios y prácticas de Scrum.',
      'Fomenta la autoorganización del equipo.',
      'Ayuda al equipo a alcanzar sus objetivos de sprint.',
      'Protege al equipo de interrupciones externas.',
      'Promueve la transparencia y la visibilidad del trabajo del equipo.',
      'Facilita la resolución de conflictos dentro del equipo.',
      'Ayuda a los miembros del equipo a crecer profesionalmente.',
      'Fomenta un espacio y ambiente colaborativo...',
      'Entrena al equipo en los principios de Scrum...',
    ],
    enrollMessage: 'Te abrirá las puertas a numerosas carreras profesionales en el ámbito de la gestión de proyectos y el desarrollo ágil. Conviértete en un Scrum Master certificado y lidera equipos hacia el éxito. Gestionarás proyectos de manera efectiva, facilitando la colaboración y la mejora continua. Aprende a eliminar obstáculos, fomentar la autoorganización y asegurar que los equipos sigan los principios de Scrum.',
    images: ['/images/Scrum.svg', '/images/Master.svg'],
    overlayTexts: ['¡Aprendé con expertos certificados!','¡Impulsá tu carrera profesional!'],
    video: 'https://5c6bb710f7cb59a6e319-940183694b4ffb2b59b7fef660660cc2.ssl.cf1.rackcdn.com/Scrumstudy_SMC.mp4',
    startDate: '15 de Julio',
    courseDuration: '8 semanas/ 16 clases',
    price: '$250.000 ARS',
  },
  'ux-design': {
    title: 'UX Design',
    intro: 'El UX Designer se encarga de mejorar la experiencia del usuario en productos digitales. Es un profesional clave en el diseño centrado en el usuario, que investiga, prototipa y prueba interfaces para garantizar que sean intuitivas y efectivas. Su objetivo es crear productos digitales que satisfagan las necesidades y expectativas de los usuarios, mejorando la usabilidad y la satisfacción general.',
    benefits: [
      'Investiga y comprende las necesidades del usuario.',
      'Analiza comportamientos de usuario y tendencias.',
      'Prototipa interfaces efectivas y atractivas.',
      'Colabora con equipos de producto y desarrollo.',
      'Realiza pruebas de usabilidad y análisis de feedback.',
      'Optimiza la experiencia del usuario en productos digitales.',
      'Diseña flujos de usuario intuitivos y eficientes.',
      'Aplica principios de diseño centrado en el usuario.',
      'Mejora la accesibilidad de productos digitales.',
      'Colabora con UI Designers para crear interfaces atractivas.',
    ],
    enrollMessage: 'Aprende cómo mejorar experiencias digitales desde el diseño. Conviértete en un experto en UX Design y transforma la forma en que los usuarios interactúan con productos digitales. Aumenta tu carrera profesional con habilidades en investigación, prototipado y pruebas de usabilidad.',
    images: ['/images/Design-UX.svg', '/images/UX-design.svg'],
    overlayTexts: ['¡Aprendé con expertos certificados!', '¡Impulsá tu carrera profesional!'],
    video: 'https://www.youtube.com/embed/qIrON3eK38A?si=WSVGWAppLuuBhRn5',
    startDate: '18 de Julio',
    courseDuration: '8 semanas/ 16 clases',
    price: '$150.000 ARS',
  },
  'ui-design': {
    title: 'UI Design',
    intro: 'El UI Designer se enfoca en el diseño visual y la interacción de las interfaces digitales. Es un profesional clave en la creación de experiencias digitales atractivas y funcionales que cautivan a los usuarios. Componen elementos visuales, tipografía, colores y disposición de los elementos en la pantalla para garantizar que las interfaces sean intuitivas y agradables a la vista.',
    benefits: [
      'Crea interfaces atractivas y funcionales.',
      'Diseña elementos visuales coherentes.',
      'Colabora con UX Designers y desarrolladores.',
      'Utiliza herramientas de diseño gráfico y prototipado.',
      'Aplica principios de diseño visual y tipografía.',
      'Desarrolla guías de estilo y sistemas de diseño.',
      'Optimiza la experiencia visual del usuario.',
      'Realiza pruebas de usabilidad visual.',
      'Crea prototipos interactivos de alta fidelidad.',
      'Diseña para diferentes plataformas y dispositivos.',
      'Mantiene la consistencia visual en productos digitales.',
      'Aplica principios de diseño responsivo.',
      'Colabora en la creación de experiencias digitales atractivas.',
    ],
    enrollMessage: 'Aprende cómo mejorar experiencias digitales desde el diseño visual. Conviértete en un experto en UI Design y transforma la forma en que los usuarios interactúan con productos digitales. Aumenta tu carrera profesional con habilidades en diseño visual, prototipado y pruebas de usabilidad.',
    images: ['/images/Design-UI.svg', '/images/UI-Design.svg'],
    overlayTexts: ['¡Aprendé con expertos certificados!', '¡Impulsá tu carrera profesional!'],
    video: 'https://www.youtube.com/embed/FbYfNw4Whx8?si=Vh0jQEJyLsDn_oid&amp;start=22',
    startDate: '21 de Julio',
    courseDuration: '8 semanas/ 16 clases',
    price: '$150.000 ARS',
  },
  'full-stack-developer': {
    title: 'Full Stack Developer',
    intro: 'Un desarrollador full-stack es un profesional de la informática capaz de trabajar tanto en el front-end como en el back-end de una aplicación web, abarcando todas las capas de desarrollo. Esto significa que puede encargarse del diseño y la interfaz de usuario (front-end) hasta la gestión de bases de datos y la lógica del servidor (back-end).',
    benefits: [
      'Desarrolla aplicaciones web completas.',
      'Integra bases de datos y servicios backend.',
      'Crea interfaces de usuario interactivas.',
      'Utiliza tecnologías frontend como HTML, CSS y JavaScript.',
      'Implementa lógica de negocio en el backend.',
      'Gestiona servidores y despliegue de aplicaciones.',
      'Optimiza el rendimiento de aplicaciones web.',
      'Colabora con equipos multidisciplinarios.',
      'Resuelve problemas de escalabilidad y seguridad.',
      'Mantiene y actualiza aplicaciones existentes.',
      'Aplica principios de diseño responsivo.',
      'Desarrolla APIs y servicios web.',
      'Utiliza frameworks y bibliotecas modernas.',
    ],
    enrollMessage: 'Conviértete en un desarrollador integral capaz de manejar todo el stack tecnológico. Encuentra aquí tu camino hacia el éxito en el desarrollo web. La gran demanda existente requiere profesionales en Full Stack Development, capaces de crear aplicaciones completas y eficientes. Aprende a integrar bases de datos, diseñar interfaces atractivas y gestionar servidores.',
    images: ['/images/developer.svg', '/images/Developer.svg'],
    overlayTexts: ['¡Aprendé con expertos certificados!', '¡Impulsá tu carrera profesional!'],
    video: 'https://www.youtube.com/embed/8xnb_63XCYQ?si=gCj-j7-srHvgdqhS',
    startDate: '23 de Julio',
    courseDuration: '8 semanas/ 16 clases',
    price: '$200.000 ARS',
  },
  'agile-coach': {
    title: 'Agile Coach',
    intro: 'Un Agile Coach es un profesional especializado en la implementación y mejora de prácticas ágiles dentro de una organización. Su objetivo es guiar a equipos y organizaciones en la adopción de metodologías ágiles, promoviendo una cultura de colaboración, adaptabilidad y mejora continua. El Agile Coach trabaja con equipos para optimizar sus procesos, fomentar la autoorganización y asegurar que se sigan los principios ágiles.',
    benefits: [
      'Es un guía para la adopción de metodologías ágiles.',
      'Facilita la transformación cultural hacia la agilidad.',
      'Promueve la mejora continua y la autoorganización.',
      'Ayuda a eliminar impedimentos y obstáculos.',
      'Colabora con líderes y stakeholders para alinear objetivos.',
      'Realiza capacitaciones y talleres sobre prácticas ágiles.',
      'Fomenta la colaboración y la comunicación efectiva.',
      'Implementa métricas para medir el rendimiento del equipo.',
      'Asesora en la creación de equipos multidisciplinarios.',
      'Desarrolla estrategias para mejorar la eficiencia del equipo.',
      'Aplica principios de coaching y mentoring.',
      'Facilita la resolución de conflictos dentro del equipo.',
      'Promueve la transparencia y la visibilidad del trabajo del equipo.',
    ],
    enrollMessage: 'Conviértete en un desarrollador integral capaz de manejar todo el stack tecnológico. Encuentra aquí tu camino hacia el éxito en el desarrollo web y la gestión ágil de proyectos. Existe gran demanda de profesionales que puedan liderar equipos ágiles y mejorar la eficiencia organizacional. La gran demanda existente require profesionales que puedan liderar equipos ágiles y mejorar la eficiencia organizacional.',
    images: ['/images/Coach.svg', '/images/Agile.svg'],
    overlayTexts: ['¡Aprendé con expertos certificados!', '¡Impulsá tu carrera profesional!'],
    video: 'https://5c6bb710f7cb59a6e319-940183694b4ffb2b59b7fef660660cc2.ssl.cf1.rackcdn.com/SCRUMstudy_AEC.mp4',
    startDate: '23 de Julio',
    courseDuration: '8 semanas/ 16 clases',
    price: '$200.000 ARS',
  },
  // Add other courses here...
}

export default courseData;