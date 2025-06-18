// ./src/components/Footer.tsx
'use client'
import React from 'react';
import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copyright}>
          &copy; {currentYear} Henrique Santos Advocacia. Todos os direitos reservados.
        </p>
        <div className={styles.socialLinks}>
          <a href="https://www.instagram.com/henriquesantos.advogado/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    </footer>
  );
}
