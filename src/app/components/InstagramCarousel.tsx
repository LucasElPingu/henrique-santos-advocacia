// ./src/components/InstagramCarousel.tsx
'use client';

import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import styles from './InstagramCarousel.module.css';

// É crucial que estes imports de CSS venham antes de qualquer outra coisa
// para garantir que os estilos do carrossel são carregados corretamente.
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const posts = [
  { 
    id: 1, 
    postUrl: 'https://www.instagram.com/p/C7xH9Y4JoZY/',
    imageUrl: '/images/1.png',
    description: 'Você sabe o que é alienação parental? Segue a dica!.'
  },
  { 
    id: 2, 
    postUrl: 'https://www.instagram.com/p/DKe7iY0OuPa/',
    imageUrl: '/images/2.png',
    description: 'Em caso de financiamento de automóvel, o comprador tem que tomar cuidado'
  },
  { 
    id: 3, 
    postUrl: 'https://www.instagram.com/p/DKc1hDppbLl/',
    imageUrl: '/images/3.png',
    description: 'Você foi demitida grávida e quer processar a empresa? Segue algumas dicas sobre o assunto! '
  },
  { 
    id: 4, 
    postUrl: 'https://www.instagram.com/p/DJFY902Jtig/',
    imageUrl: '/images/4.png',
    description: 'Você sabia que a rescisão indireta vem sendo um dos meios mais utilizados pelos trabalhadores em razão da crise da saúde mental no mercado de trabalho brasileiro?'
  },
  { 
    id: 5, 
    postUrl: 'https://www.instagram.com/p/DIMtL_xJqig/',
    imageUrl: '/images/5.png',
    description: 'Você já ouviu falar sobre os alimentos gravídicos?! ".'
  },
  { 
    id: 6, 
    postUrl: 'https://www.instagram.com/p/DFF4BuKJtRS/',
    imageUrl: '/images/6.png',
    description: 'Você sabe sobre o “desvio de função” durante o seu contrato de trabalho? '
  },
  { 
    id: 7, 
    postUrl: 'https://www.instagram.com/p/DFDU0suJUKh/',
    imageUrl: '/images/7.png',
    description: 'Você sabe do que se trata o “abandono afetivo”!?'
  },
];

export function InstagramCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // AQUI ESTÁ A CONFIGURAÇÃO PRINCIPAL PARA A ROTAÇÃO AUTOMÁTICA:
    autoplay: true, // Garante que o carrossel comece a girar sozinho.
    autoplaySpeed: 2000, // Define o intervalo de 4 segundos entre cada slide.
    pauseOnHover: true, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Publicações Recentes</h2>
      <p className={styles.subtitle}>
        Acompanhe nosso Instagram <a href="https://www.instagram.com/henriquesantos.advogado/" target="_blank" rel="noopener noreferrer">@henriquesantosadvocacia</a>
      </p>
      <div className={styles.carouselWrapper}>
        <Slider {...settings}>
          {posts.map(post => (
            <div key={post.id} className={styles.carouselCard}>
              <a href={post.postUrl} target="_blank" rel="noopener noreferrer" className={styles.post}>
                <Image
                  src={post.imageUrl}
                  alt="Publicação do Instagram"
                  fill
                  className={styles.postImage}
                />
              </a>
              <div className={styles.descriptionBox}>
                <p className={styles.descriptionText}>{post.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
