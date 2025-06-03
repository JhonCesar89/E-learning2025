
'use client';

import React from 'react';
import Image from 'next/image';
import styles from '../styles/CoursePage.module.css';

const CoursePage: React.FC = () => {
  return (
    <div className={styles.majorContainer}>
      <div className={styles.mainLayout}>
        <div className={styles.firstContent}>
          <header className={styles.secondHeader}>
            <h1 className={styles.principalTitle}>
              Comienza hoy tu carrera en: Scrum Master Certified
            </h1>
          </header>

          <section className={styles.courseIntroduction}>
            <h3 className={styles.courseSectionTitle}>¿Qué es ser un Scrum Master Certified?</h3>
            <p>
              El <b>Scrum Master</b> constituye un perfil profesional de trabajo colaborativo que permite agilizar mucho más el desempeño dentro de un equipo...
            </p>
          </section>

          <section className={styles.courseBenefits}>
            <h3 className={styles.courseSectionTitle}>Beneficios de aprender Scrum Master.</h3>
            <ul className={styles.courseList}>
              <li>Dirige las reuniones diarias de preparación, revisiones y demostraciones.</li>
              <li>Fomenta un espacio y ambiente colaborativo centrado en las personas.</li>
              <li>Entrena al equipo en los principios de Scrum y las mejores prácticas.</li>
              <li>Facilita la discusión abierta y la resolución de conflictos.</li>
              <li>Identifica y resuelve proactivamente los problemas.</li>
              <li>Mantiene estrecha relación con stakeholders.</li>
              <li>Actualiza las actividades en una herramienta de seguimiento.</li>
              <li>Colabora activamente con el Product Owner para potenciar los resultados.</li>
            </ul>
          </section>

          <section className={styles.courseSection}>
            <h3 className={styles.courseSectionTitle}>Inscríbete el Curso de Scrum Master.</h3>
            <p>
              El <b>Scrum Master</b> te abrirá las puertas a numerosas carreras, empresas e industrias...
            </p>
            <div className={styles.courseImages}>
              <Image src="/images/scrumMaster.svg" alt="Presentación del Curso 1" />
              <Image src="/images/ScrumMaster.svg" alt="Presentación del Curso 2" />
            </div>
          </section>
        </div>
      </div>      
    </div>
  );
};

export default CoursePage;
