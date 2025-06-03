'use client'

import React, { useState } from "react"
import styles from "../styles/FAQ.module.css"
import ContactForm from "@/app/layout/navbar/modals/contact/ContactForm"

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const faqs = [
    {
        question: "¿Qué es Skill-Login Academy?",
        answer: "Es una comunidad educativa dedicada a formar profesionales en tecnología con un enfoque práctico e innovador."
      },
      {
        question: "¿Cómo me inscribo en un curso?",
        answer: "Puedes inscribirte en nuestros cursos a través de la sección 'Formas de Pago', donde encontrarás toda la información sobre métodos de inscripción y costos. También puedes inscribirte haciendo click en el botón 'inscribirse' o bien en el botón de inscripción que se encuentra en la página de cada curso que se encuentra en el margen izquierdo."
      },
      {
        question: "¿Los cursos son 100% online?",
        answer: "Existen dos modalidades: 1- Disponemos de cursos que son completamente online los cuales cuentan con asistencia de un experto para evacuar dudas sobre el contenido, permitiéndote estudiar desde cualquier lugar y a tu propio ritmo. 2 - Hay cursos que poseen clases sincróncias de manera online y personalizadas guiadas por nuestros expertos quienes acompañarán al estudiante durante la trayectoria del curso elegido."
      },
      {
        question: "¿Qué recursos brindan?",
        answer: "Cada curso cuenta con su propio contenido: videos y archivos .PDF completos que explican de manera clara y concisa los temas dados. Además, cada módulo cuenta con un cuestionario de nivelación al final del mismo, y cada curso se cuenta con un exámen integrador final. También, brindamos un foro para la evacuación y consulta de dudas respectivas a cada tema para afianzar el intermcabio de ideas y colaboración entre estudiantes de la comunidad."
      },  
      {
        question: "¿Entregan certificados al finalizar los cursos?",
        answer: "Sí, al completar un curso recibirás un diploma de finalización reconocido por ''Skill Login Academy'' junto con un portfolio estructurado que representa la práctica realizada durante el curso y al pasar el examen de certificación recibirás un certificado de instituciones reconocidas internacionalmente. Somos Partner SCRUMstudy y PeopleCert, instituciones reconocidas mundialmente."
      },
      {
        question: "¿Cómo puedo contactar con soporte?",
        answer: "Si necesitas ayuda, puedes escribirnos a nuestro correo de soporte 'support@skill-login.com' o completar el formulario en la sección de contacto."
      },
      {
        question: "¿Cuáles son los medios de pago aceptados",
        answer: "Ofrecemos formas de pago por transferencia mediante el sistema de pago de Mercado Pago para mayor seguridad y el uso de varias tarjetas de débito y crédito através del mismo. A disposición se encuentra la sección 'Ver métodos de  pagos'."
      }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.faqContainer}>
      <h2 className={styles.faqTitle}>Preguntas frecuentes</h2>
      <p className={styles.faqDescription}>
      Estas son algunas preguntas comunes. Haga clic para ampliar y obtener más información.
      </p>
      <div className={styles.faqList}>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`${styles.faqItem} ${openIndex === index ? styles.open : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className={styles.faqQuestion}>
              <span>{faq.question}</span>
              <span className={styles.faqIcon}>{openIndex === index ? "▲" : "▼"}</span>
            </div>
            <div className={styles.faqAnswer}>{faq.answer}</div>
          </div>
        ))}
      </div>

      <div className={styles.faqContact}>
        <p className={styles.faqContactText}>
            ¿No encuentra lo que busca?
        </p>
        <button className={styles.faqContactBtn} onClick={openModal} >
          Contacte con nosotros.
        </button>
        <ContactForm isOpen={isModalOpen} onClose={closeModal} title="¿Aún tienes preguntas?"
          description="Envíenos su consulta y nos pondremos en contacto con usted."
          variant="faq"
        />
      </div>
    </div>
  );
};

export default FAQ;