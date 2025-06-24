import React from 'react'
import styles from '../../styles/PaymentMethods.module.css'
import { PaymentMethodsProps } from './types/modal'

const PaymentMethods: React.FC<PaymentMethodsProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className={styles.modalBackdrop} onClick={onClose}></div>

      <div className={styles.paymentModal}>
        <button className={styles.closeBtn} onClick={onClose}>✖</button>

        <h2 className={styles.title}>Métodos de Pago Aceptados</h2>
        <p className={styles.description}>Aceptamos los siguientes métodos de pago:</p>

        <div className={styles.paymentOptions}>
          <div className={styles.paymentItem}>

            <i className={`fas fa-credit-card ${styles.paymentIcon}`}></i>
            <span>Tarjetas de Crédito/Débito</span>
          </div>
          <div className={styles.paymentItem}>
            <i className={`fab fa-paypal ${styles.paymentIcon}`}></i>
            <span className={styles.paymentLabel}>PayPal</span>
          </div>
          <div className={styles.paymentItem}>
            <i className={`fas fa-university ${styles.paymentIcon}`}></i>
            <span className={styles.paymentLabel}>Transferencias Bancarias</span>
          </div>
          <div className={styles.paymentItem}>
            <i className={`fas fa-mobile-alt ${styles.paymentIcon}`}></i>
            <span className={styles.paymentLabel}>Billeteras Virtuales</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentMethods;