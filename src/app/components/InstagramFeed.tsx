// ./src/components/InstagramFeed.tsx

import React from 'react';
// Image e FontAwesomeIcon não são mais necessários aqui
import styles from './InstagramFeed.module.css';

// Dados de exemplo para os posts
const posts = [
  { id: 1, postUrl: 'https://www.instagram.com/p/C7xH9Y4JoZY/' },
  { id: 2, postUrl: 'https://www.instagram.com/p/DKe7iY0OuPa/' },
  { id: 3, postUrl: 'https://www.instagram.com/p/DKc1hDppbLl/' },
  { id: 4, postUrl: 'https://www.instagram.com/p/DJFY902Jtig/' },
  { id: 5, postUrl: 'https://www.instagram.com/p/DIMtL_xJqig/' },
  { id: 6, postUrl: 'https://www.instagram.com/p/DFF4BuKJtRS/' },
  { id: 7, postUrl: 'https://www.instagram.com/p/DFDU0suJUKh/' },
];

export function InstagramFeed() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Publicações Recentes</h2>
      <p className={styles.subtitle}>
        Acompanhe as nossas novidades no <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">@seu_instagram</a>
      </p>
      <div className={styles.grid}>
        {posts.map(post => (
          <a key={post.id} href={post.postUrl} target="_blank" rel="noopener noreferrer" className={styles.post}>
            {/* ALTERAÇÃO: A imagem foi substituída pelo marcador de posição. */}
            <span>imagem</span>
          </a>
        ))}
      </div>
    </section>
  );
}
