// menu/NavbarMenu.tsx
import React from 'react'
import styles from '../styles/NavbarMenu.module.css'
import Link from 'next/link'

interface NavbarMenuProps {
  menuOpen: boolean;
  toggleMenu: () => void;
}

const NavbarMenu: React.FC<NavbarMenuProps> = ({ menuOpen, toggleMenu }) => {
  return (
    <div className={styles.menuToggleContainer}>
      <button onClick={toggleMenu} className={styles.menuToggleButton}>
        ☰
      </button>
      {menuOpen && (
        <div className={styles.dropdownMenuExpanded}>
          <ul>
            <li><Link href="/"></Link>Profile</li>
            <li><Link href="/"></Link>Settings</li>
            <li><Link href="/"></Link>Account</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavbarMenu;