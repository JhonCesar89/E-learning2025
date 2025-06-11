// src/app/courses/[slug]/page.tsx
'use client';

import { useParams } from 'next/navigation'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import styles from '../styles/CoursePage.module.css'
import Navbar from '../../layout/navbar/Navbar'

const courseData: Record<string, {
  title: string;
  intro: string;
  benefits: string[];
  enrollMessage: string;
  images: string[];
}> = {
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
    images: ['/images/scrumMaster.svg', '/images/ScrumMaster.svg'],
  },
  'ux-design': {
    title: 'UX Design',
    intro: 'El UX Designer se encarga de mejorar la experiencia del usuario en productos digitales. Es un profesional clave en el diseño centrado en el usuario, que investiga, prototipa y prueba interfaces para garantizar que sean intuitivas y efectivas. Su objetivo es crear productos digitales que satisfagan las necesidades y expectativas de los usuarios, mejorando la usabilidad y la satisfacción general.',
    benefits: [
      'Investiga y comprende las necesidades del usuario.',
      'Analiza comportamientos de usuario.',
      'Prototipa interfaces efectivas.',
      'Colabora con equipos de producto y desarrollo.',
      'Realiza pruebas de usabilidad.',
      'Optimiza la experiencia del usuario.',
      'Diseña flujos de usuario intuitivos.',
      'Crea wireframes y prototipos interactivos.',
      'Utiliza herramientas de diseño UX.',
      'Aplica principios de diseño centrado en el usuario.',
      'Mejora la accesibilidad de productos digitales.',
      'Desarrolla estrategias de diseño basadas en datos.',
      'Colabora con UI Designers para crear interfaces atractivas.',
    ],
    enrollMessage: 'Aprende cómo mejorar experiencias digitales desde el diseño. Conviértete en un experto en UX Design y transforma la forma en que los usuarios interactúan con productos digitales. Aumenta tu carrera profesional con habilidades en investigación, prototipado y pruebas de usabilidad.',
    images: ['/images/ux.svg', '/images/ui.svg'],
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
    enrollMessage: 'Aprende cómo mejorar experiencias digitales desde el diseño.',
    images: ['/images/ux.svg', '/images/ui.svg'],
  },
  'full-stack-developer': {
    title: 'Full Stack Developer',
    intro: 'El Full Stack Developer es un profesional versátil que domina tanto el frontend como el backend del desarrollo web.',
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
    enrollMessage: 'Conviértete en un desarrollador integral capaz de manejar todo el stack tecnológico. Encuentra aquí tu camino hacia el éxito en el desarrollo web.',
    images: ['/images/ui.svg', '/images/ui.svg'],
  },
  // Add other courses here...
};

export default function CoursePage() {
  const { slug } = useParams();
  const router = useRouter();
  const course = courseData[slug as string];

  if (!course) {
    router.push('/404'); // Redirigir a una página 404
    return null; // O puedes mostrar un mensaje de error
  }
  // Renderizar la página del curso
  // Aquí puedes usar el slug para buscar los datos del curso en tu base de datos o API
  // Por simplicidad, usamos un objeto courseData simulado
  // que contiene los datos de los cursos.

  return (
    <>
      <Navbar />
      
      <div className={styles.majorContainer}>
        <div className={styles.mainLayout}>
          <div className={styles.firstContent}>
            <header className={styles.secondHeader}>
              <h1 className={styles.principalTitle}>
                Comienza hoy tu carrera en: {course.title}
              </h1>
            </header>

            <section className={styles.courseIntroduction}>
              <h3 className={styles.courseSectionTitle}>
                ¿Qué es ser un {course.title}?
              </h3>
              <p>{course.intro}</p>
            </section>

            <section className={styles.courseBenefits}>
              <h3 className={styles.courseSectionTitle}>Beneficios de aprender {course.title}.</h3>
              <ul className={styles.courseList}>
                {course.benefits.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </section>

            <section className={styles.courseSection}>
              <h3 className={styles.courseSectionTitle}>Inscríbete al Curso de {course.title}.</h3>
              <p>{course.enrollMessage}</p>
              <div className={styles.courseImages}>
                {course.images.map((src, i) => (
                  <Image key={i} src={src} alt={`Curso ${course.title} ${i + 1}`} width={400} height={300} />
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
