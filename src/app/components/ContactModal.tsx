// ./src/components/ContactModal.tsx
'use client';

import React from 'react';
import styles from './ContactModal.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneVolume, faEnvelope, faMapMarkerAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  if (!isOpen) return null;

  const address = "Condomínio Empresarial Newton Almeida - R. Alm. Barroso, 438 - Sala 108 - Centro, João Pessoa - PB, 58013-120";

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} />
        </button>

        <div className={styles.infoColumn}>
          <h2 className={styles.title}>Fale Conosco</h2>
          <ul className={styles.contactList}>
            <li className={styles.contactItem}>
              <FontAwesomeIcon icon={faPhoneVolume} className={styles.contactIcon} />
              <a href="tel:+5583991233104">+55 (83) 9 8199-1912</a>
            </li>
            <li className={styles.contactItem}>
              <FontAwesomeIcon icon={faWhatsapp} className={styles.contactIcon} />
              <a href="https://wa.me/8381991912" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            </li>
            <li className={styles.contactItem}>
              <FontAwesomeIcon icon={faInstagram} className={styles.contactIcon} />
              <a href="https://www.instagram.com/henriquesantos.advogado/" target="_blank" rel="noopener noreferrer">@henriquesantos.advogado</a>
            </li>
            <li className={styles.contactItem}>
              <FontAwesomeIcon icon={faEnvelope} className={styles.contactIcon} />
              <a href="mailto:henriquesantosadvocacia.contato@gmail.com">henriquesantosadvocacia.contato@gmail.com</a>
            </li>
            <li className={styles.contactItem}>
              <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.contactIcon} />
              <span>{address}</span>
            </li>
          </ul>
        </div>
        
        <div className={styles.mapContainer}>
          <iframe
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.983949823023!2d-34.8864756852258!3d-7.127818994851088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7acdd616335123d%3A0x8e8735f5f5f3e7b!2sCondom%C3%ADnio%20Empresarial%20Newton%20Almeida!5e0!3m2!1spt-BR!2sbr!4v1686835899999!5m2!1spt-BR!2sbr`}
          ></iframe>
        </div>
      </div>
    </div>
  );
}
