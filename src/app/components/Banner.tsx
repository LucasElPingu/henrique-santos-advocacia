// ./src/components/Banner.tsx

import React from 'react';
import styles from './Banner.module.css';
import { HeroForm } from './HeroForm'; // Importa o componente de formulário separado

/**
 * Componente Banner
 * Serve como o container principal para a imagem de fundo
 * e posiciona o formulário (HeroForm) dentro dele.
 */
export function Banner() {
  return (
    <section className={styles.bannerContainer}>
      {/* ALTERAÇÃO: O componente do formulário agora é um filho direto do banner,
          sendo posicionado pelo Flexbox do container pai. */}
      <HeroForm />
    </section>
  );
}
