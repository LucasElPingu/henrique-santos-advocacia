// src/app/escritorio/page.tsx

import React from 'react';
import Image from 'next/image';
import styles from './escritorio.module.css';

export default function EscritorioPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Atuação em todo o território nacional
      </h1>

      <div className={styles.grid}>
        <div className={styles.imageSection}>
            <h3 className={styles.subtitle}>Matriz: João Pessoa/PB</h3>
          <Image
            src="/images/escritorio1.jpg"
            alt="Escritório 1"
            width={400}
            height={600}
            className={styles.image}
          />
          <p className={styles.description}>
            Nosso escritório conta com estrutura moderna e acolhedora para oferecer o melhor atendimento aos clientes.
          </p>
        </div>

        <div className={styles.imageSection}>
            <h3 className={styles.subtitle}>Filial: Recife/PE</h3>
          <Image
            src="/images/escritorio2.jpg"
            alt="Escritório 2"
            width={400}
            height={600}
            className={styles.image}
          />
          <p className={styles.description}>
            Nossa nova filial em Recife reforça nosso compromisso com a presença nacional, oferecendo atendimento de excelência.
          </p>
        </div>
      </div>
    </div>
  );
}
