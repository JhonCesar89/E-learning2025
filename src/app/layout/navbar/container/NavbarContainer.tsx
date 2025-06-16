'use client';

import React, { useState, ChangeEvent, KeyboardEvent } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import NavbarMenu from '../menu/NavbarMenu'
import { aboutUsItems } from '../data/aboutUsItems'
import PaymentMethods from '../modals/payment/PaymentMethods'
import ContactForm from '../modals/contact/ContactForm'
import styles from '../styles/NavbarContainer.module.css'
import courses from '../data/courses'

interface NavbarContainerProps {
  onRegisterClick?: () => void;
}

const NavbarContainer: React.FC<NavbarContainerProps> = ({ onRegisterClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [coursesFiltered, setCoursesFiltered] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const router = useRouter();

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Update search term state
    setSearchTerm(value);

    //Inmediately filter results
    if (value.trim()){
      const filtered = courses.filter(course =>
        course.toLocaleLowerCase().includes(value.toLowerCase())
      );
      setCoursesFiltered(filtered);
    } else {
      setCoursesFiltered([]);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleSearch = () => {
    if (searchTerm.trim()) {
      const filtered = courses.filter(course =>
        course.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setCoursesFiltered(filtered);
    } else {
      setCoursesFiltered([]);
    }
  };

  const handleResultClick = (courseName: string) => {
    setSearchTerm('');
    setCoursesFiltered([]);

    const slug = courseName.toLowerCase().replace(/\s+/g, '-');
    router.push(`/courses/${slug}`);
  };

  const handleAboutUsClick = (label: string, path: string) => {
    if (label === 'Payment Methods') {
      setIsPaymentModalOpen(true);
    } else if (label === 'Contact') {
      setIsContactModalOpen(true);
    } else {
      router.push(path);
    }
  };


  return (
    <>
      <nav className={styles.navbar}>
        {/* Logo + E-learning Text */}
        <div className={styles.brand}>
          <Image
            src="/logo.png"
            alt="Skill Login Logo"
            width={130}
            height={80}
            className={styles.logoImage}
            priority
          />
          <Link href="/" className={styles.brandText}>E-learning</Link>
        </div>

        {/* Centered Links */}
        <div className={styles.navContainer}>
          <ul className={styles.navLinks}>
            <li>
              {/* Register */}
              <button onClick={onRegisterClick} className={styles.navButton}>
                Registrate
              </button>
            </li>
            <li>
              {/* About Us */}
              <div className={styles.dropdown}>
                <span className={styles.dropdownTitle}>¿Quiénes somos?</span>
                <div className={styles.dropdownContent}>
                  {aboutUsItems.map(item => (
                    <button
                      key={item.path}
                      onClick={() => handleAboutUsClick(item.label, item.path)}
                      className={styles.dropdownItem}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </li>
            <li>
              {/* Login */}
              <Link href="/login">Log In</Link>
            </li>
          </ul>
        </div>

        {/* Search */}
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Busque el curso..."
            value={searchTerm}
            onChange={handleSearchChange}
            onKeyDown={handleKeyDown}
            className={styles.searchInput}
          />
          {coursesFiltered.length > 0 && (
            <ul className={styles.searchResults}>
              {coursesFiltered.map(course => (
                <li
                  key={course}
                  onClick={() => handleResultClick(course)}
                  className={styles.searchResultItem}
                >
                  {course}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Menu */}
        <NavbarMenu menuOpen={menuOpen} toggleMenu={toggleMenu} />
      </nav>

      {/* Payment Modal */}
      <PaymentMethods
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
      />

      <ContactForm
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        title="Ponte en contacto con nosotros"
        description="Comuníquese con nuestro equipo directamente desde aquí para asesoría sobre nuestros servicios e inscripciones."
        variant="navbar"
      />
    </>
  );
};

export default NavbarContainer;