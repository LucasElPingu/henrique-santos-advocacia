import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Adicionando nossa paleta de cores para uso fácil no projeto
      colors: {
        'brand-gold': '#DBCA82',
        'brand-bronze': '#CC8A40',
        'brand-dark': '#161615',
      },
      // Exemplo de como adicionar fontes personalizadas, se quisermos no futuro
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'], // Exemplo usando a fonte Inter
      },
    },
  },
  plugins: [],
}
export default config
