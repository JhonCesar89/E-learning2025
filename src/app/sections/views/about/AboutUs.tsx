'use client'

import React, { useEffect, useState } from "react"
import Image from 'next/image'
import styles from "../styles/AboutUs.module.css"

function AboutUs() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      id="aboutUs"
      className={`${styles["aboutUsContainer"]} ${isVisible ? styles.visible : ""}`}
    >
      <section className={styles["introSection"]}>
        <h1 className={styles["sectionTitle"]}>Bienvenidos</h1>
        <h2 className={styles["sectionSubtitle"]}>
          Te invitamos a descubrir nuestra misión y valores.
        </h2>
        <p className={styles["introText"]}>
          En <b>Skill Login Academy</b>, creemos en la evolución tecnológica responsable y en
          la formación de profesionales preparados para enfrentar los desafíos
          del mundo digital.
        </p>
      </section>

      <section className={styles["originSection"]}>
        <h2 className={styles["sectionSubtitle"]}>
          ¿Cómo y por qué nació: Skill Login Academy?
        </h2>
        <p className={styles["originText"]}>
          La idea nació en el año 2020 (post-pandemia) cuando tres amigos
          profesionales con gran trayectoria y experiencia en el ámbito
          tecnológico idearon una manera de crecer las habilidades para potenciar
          a otros a ser expertos en el rubro, así cerrar la brecha entre la
          educación y el mundo laboral. El objetivo principal es ofrecer un
          ambiente cómodo/flexible de aprendizaje que aborde conocimientos
          técnicos, desarrolle habilidades prácticas para dominar novedosas
          herramientas y generar una mentalidad de crecimiento continuo.
          <br />
          <br />
          Deseamos que cada profesional que elija nuestra comunidad educativa
          pueda adaptarse rápidamente a las exigentes demandas del sector
          tecnológico para contribuir de manera ética y eficiente a su entorno
          laboral con alta respuesta de adaptación.
        </p>
      </section>

      <section className={styles["missionSection"]}>
        <h2 className={styles["sectionSubtitle"]}>Nuestra Misión.</h2>
        <p className={styles["missionText"]}>
          Nos enfocamos en guiar a los nuevos profesionales para que puedan
          adaptarse fácilmente a cualquier ámbito profesional, o bien para iniciar
          sus propios proyectos que inspiren a la humanidad a comprometerse con
          la evolución tecnológica limpia, legal y transparente.
        </p>
      </section>

      <section className={styles["valuesSection"]}>
        <h2 className={styles["sectionSubtitle"]}>Nuestros Valores.</h2>
        <p className={styles["valuesText"]}>
          Nuestro team se focaliza en las personas, en impulsar el potencial que
          cada una posee, en el respeto mutuo para colaborar con grandes equipos
          de tecnología. Concientizar sobre los desafíos tecnológicos en relación
          con el medio ambiente, administrar eficientemente los recursos y
          promover las buenas prácticas. Lograr un cambio positivo y dar
          continuidad a un legado fiel a nuestra filosofía.
        </p>
      </section>

      <section className={styles["teamSection"]}>
        <h2 className={styles["sectionSubtitle"]}>Nuestro Líder de expertos & Founder: </h2>
        <div className={styles["teamMembers"]}>
          <div className={`${styles["teamMember"]} ${styles["teamImage"]}`}>
            <Image
              src="/team/jony.jpg"
              alt="Founder"
              width={200}
              height={200}
              className={styles["teamMemberImage"]}
            />
            <h3 className={styles["teamMemberName"]}>Jonathan L. Gutiérrez López</h3>
            <p className={styles["teamMemberRole"]}>
              Project Manager Sr. (PMP)</p>
            <p className={styles["teamMemberRole"]}>Scrum Master Certified (SMC)</p>
            <p className={styles["teamMemberRole"]}>Full Stack Developer</p>
            <p className={styles["teamMemberRole"]}>Design UX/UI</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;