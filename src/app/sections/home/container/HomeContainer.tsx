// src/containers/HomeContainer.tsx
'use client';

import React, { useEffect } from 'react'
import PromotionsCarousel from './PromotionsContainer'
import styles from '../styles/HomeContainer.module.css'
import MultipleItems from '../components/courses/items/MultipleItems'
import NavbarContainer from '@/app/layout/navbar/container/NavbarContainer';
import { Palette, Brain, Speech, Laptop, Hammer, Zap, Users, Handshake } from 'lucide-react'

interface HomeContainerProps {
  onRegisterClick: () => void;
}

const HomeContainer: React.FC<HomeContainerProps> = ({ onRegisterClick }) => {
  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(".presentation");
      if (section) {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight - 50) {
          section.classList.add("show");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>  
      <NavbarContainer onRegisterClick={onRegisterClick} />
      <div className={styles.homeContainer}>
        <div className={styles.promotionsHeader}>
            <p className={styles.ctaText}>¡No te pierdas nuestras promociones!</p>
        </div>
        <section className={styles.promotionsBanners}>
          <PromotionsCarousel />
        </section>

        <header className={styles.homeHeader}>
          <h1 className={styles.homeTitle}>Bienvenidos a SkilLogin Academy</h1>
          <h2 className={styles.homeSubtitle}>Transforma tu carrera, ofrecemos cursos en tecnología, coaching, design UX/UI, Scrum, Product Owner y más!</h2>
        </header>

        <section className={styles.academicOffer}>
          <div className={styles.academicHeader}>
            <h2>Oferta académica destacada</h2>
            <p>Explora nuestros cursos diseñados para potenciar tu crecimiento profesional.</p>
          </div>

          <div className={styles.placeholderCarousel}>
            <MultipleItems />
          </div>
        </section>

        <section className={styles.presentation}>
          <h3 className={styles.sectionTitle}>La puerta de entrada a tu futuro profesional en tecnología.</h3>
          <p className={styles.sectionText}>
            En <strong>SkilLogin Academy:</strong><br></br>Entendemos que el mundo de la tecnología evoluciona rápidamente y la necesidad de profesionales
            altamente capacitados nunca ha sido mayor. Es por eso que hemos creado un espacio dedicado a la formación de líderes en la integración y
            entrega continua, con un enfoque práctico y alineado con las demandas del mercado actual.
            Nos enorgullece ofrecer un enfoque de aprendizaje integral y accesible, donde cada estudiante adquiere tanto conocimientos técnicos, destacando también
            las habilidades necesarias para afrontar los desafíos reales en el mundo laboral, profesional, educacional y en proyectos personales.</p>

          <h4 className={styles.subsectionTitle}>Cursos destacados</h4>
          <ul className={styles.coursesList}>
            <li>
              <Palette className={styles.icon} /> <strong>Design UX/UI</strong></li>
                <p className={styles.textDescription}>Curso avanzado para profundizar en las herramientas, metodologías, estrategias de investigación, creación de proto-users y diseño estructural en figma. Con especial análisis en el diseño centrado al usuario, funcional e intuitivo. 
                Con un diseño de una interfaz de calidad.</p>
            <li>
              <Brain className={styles.icon} /> <strong>Scrum Master Certified</strong></li>
                <p className={styles.textDescription}>Curso oficial para convertirte en un líder ágil en la gestión de equipos, facilitador, resolutor y coach en prácticas ágiles. Con un plus adicional: podrás tomar la certificación de Scrum Master Certified en la plataforma Scrun Study, quienes compartirán material de estudio, simuladores de exámen y el E-BOOK Scrum.</p>
            <li>
              <Speech className={styles.icon} /> <strong>Agile Coach Fundamentals</strong></li>
                <p className={styles.textDescription}>Aprende a guiar equipos en la implementación de metodologías ágiles basados en la iteración, mejora continua e implementación de eventos.</p>
            <li>
              <Laptop className={styles.icon} />  <strong>Software Develop</strong></li>
                <p className={styles.textDescription}>Capacitación especializada en programación con uno de los frameworks más utilizados: React, TypeScrip, CSS, HTML, y utilizando distintas herramientas para la gestión de archivos y versiones. Crearemos una página web diseñando un fronted y backend profesional, escalable y eficiente.</p>
          </ul>

          <h4 className={styles.subsectionTitle}>¿Por qué elegirnos?</h4>
          <ul className={styles.benefitsList}>
            <li>
            <Hammer className={styles.icon} /> <strong>Porque brindamos: Formación práctica</strong></li>
              <p className={styles.textDescription}> Aprende con proyectos reales que simulan el entorno laboral.</p>
            <li>
              <Zap className={styles.icon} /> <strong>Utilizamos: Métodos efectivos y tecnologías modernas</strong></li>
              <p className={styles.textDescription}> Desarrolla competencias en herramientas, métodos y estrategias para aplicar las mejores prácticas que acompañen la evolución tecnológica en cualquier ámbito.</p>
            <li>
              <Users className={styles.icon} /> <strong>Bridamos nuevos espacios: Comunidad activa y colaborativa incorporada en nuestra platforma.</strong></li>
              <p className={styles.textDescription}> Únete a una comunidad dinámica de estudiantes y profesionales dispuestos a compartir conocimientos y colaborar.</p>
            <li>
              <Handshake className={styles.icon} /> <strong>Seremos guías en tu crecimiento: Acompañamiento Continuo</strong></li>
              <p className={styles.textDescription}> No estarás solo. Nuestros instructores y mentores estarán contigo en cada paso del camino.</p>
          </ul>

          <h4 className={styles.subsectionTitle}>Profesores de alto nivel</h4>
          <p className={styles.sectionText}>Nuestros equipo de profesionales son líderes activos en departamentos involucrados con el crecimiento tecnológico continuo. Su experiencia práctica y su enfoque en la transmisión de conocimientos son claves para formar a los nuevos expertos de la
          tecnología.</p>

          <h4 className={styles.subsectionTitle}>Tu futuro comienza aquí</h4>
          <p className={styles.sectionText}>
            Con nosotros estarás listo para liderar equipos y soluciones con una mentalidad ágil... Únete a una comunidad dinámica de estudiantes y profesionales dispuestos a compartir conocimientos
            y colaborar.
          </p>
          <p className={styles.inscriptionsText}>¡Inscríbete ahora y forma parte de la próxima generación de profesionales!</p>
        </section>
      </div>
    </>
    );
  };

export default HomeContainer;