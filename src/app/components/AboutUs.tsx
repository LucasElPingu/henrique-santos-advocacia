// ./src/components/AboutUs.tsx

import React from 'react';
import styles from './AboutUs.module.css';
import Image from 'next/image';

export function AboutUs() {
  return (
    // O ID é adicionado aqui para que o link do header possa rolar para esta seção.
    <section id="about-us" className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.textColumn}>
          <h2 className={styles.title}>A Nossa Trajetória</h2>
          <p className={styles.text}>
              Somos um escritório de advocacia, sediado em João Pessoa, Paraíba. Atuamos de forma comprometida e ética na defesa dos interesses dos nossos clientes, oferecendo um atendimento personalizado e soluções jurídicas eficientes.
              Nosso time possui expertise em diversas áreas do Direito, incluindo Direito do Trabalho, Direito Civil, Direito de Família, Direito Empresarial, Direito Tributário, Direito da Saúde, Direito Previdenciário, entre outros. Estamos prontos para oferecer suporte completo, com agilidade e excelência, em cada etapa do seu caso.
              Nosso compromisso é construir relações de confiança e entregar resultados que realmente façam a diferença. Conte conosco.
          </p>
        </div>
        <div className={styles.imageColumn}>
          <Image
            src="/images/aboutus.png"
            alt="Imagem do interior do escritório de advocacia"
            width={500}
            height={400}
            className={styles.image}
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
    </section>
  );
}
