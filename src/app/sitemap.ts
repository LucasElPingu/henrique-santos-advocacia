// ./src/app/sitemap.ts

import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  // URL base do seu site. Altere para o seu domínio final quando o tiver.
  const baseUrl = 'https://www.henriquesantosadvocacia.com.br';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly', // Com que frequência a página muda? (yearly, monthly, weekly)
      priority: 1, // Prioridade da página (de 0.0 a 1.0)
    },
    // Se no futuro criar outras páginas (ex: /blog), adicione-as aqui.
  ]
}
