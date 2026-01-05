// ./src/components/Header.tsx
"use client";

import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import React, { useState } from "react";
import { ContactModal } from "./ContactModal";
import styles from "./Header.module.css";

const navLinks = [
  { name: "Áreas de atuação", targetId: "specialties" },
  { name: "Sobre Nós", targetId: "about-us" },
];



export function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    router.push('/escritorios');
  };

  const handleScroll = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <Link href="/" className={styles.logo}>
            <div className={styles.logoImageContainer}>
              <Image
                src="/images/logo-icon.png"
                alt="Ícone de balança da justiça"
                fill
                sizes="40px"
                priority
              />
            </div>
            <div className={styles.logoTextContainer}>
              <span className={styles.logoTitle}>Henrique Santos</span>
              <span className={styles.logoSubtitle}>
                Advocacia e Consultoria
              </span>
            </div>
          </Link>

          <div className={styles.navRight}>
            <div className={styles.navLinks}>
              {navLinks.map((link) => (
                <React.Fragment key={link.name}>
                  <button
                    onClick={() => handleScroll(link.targetId)}
                    className={styles.link}
                  >
                    {link.name}
                  </button>
                  <div className={styles.separator} />
                </React.Fragment>
              ))}
              <button className={styles.link}
              onClick={handleClick}>Os escritórios</button>
              <div className={styles.separator} />
              <button
                onClick={() => setIsModalOpen(true)}
                className={styles.link}
              >
                Fale Conosco
              </button>
            </div>

            <Link href="https://api.whatsapp.com/send/?phone=8381991912&text&type=phone_number&app_absent=0"  target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
              <FontAwesomeIcon icon={faPhoneVolume} />
              <span>+55 (83) 9 8199-1912</span>
            </Link>
          </div>
        </nav>
      </header>
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
