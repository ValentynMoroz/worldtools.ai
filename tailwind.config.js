import plugin from 'tailwindcss';

/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '16px', // Падінг за замовчуванням
        sm: '16px', // Для малих екранів
        md: '32px', // Для середніх екранів
        lg: '64px', // Для великих екранів
        xl: '128px', // Для ще більших екранів
        '2xl': '128px', // Для найбільших екранів
      },
    },
    extend: {
      screens: {
        m: '100%',
        sm: '390px',
        md: '768px',
        lg: '1024px',
        xl: '1440px',
        '2xl': '1920px',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Робимо 'Poppins' шрифтом за замовчуванням для всіх sans-serif елементів
      },

      colors: {
        whiteTransparent: 'rgba(255, 255, 255, 0.65)',
        inputTransparent: 'rgba(255, 255, 255, 0.25)',
        cardsTransparent: 'rgba(255, 255, 255, 0.05)',
        cardsHover: 'rgba(255, 255, 255, 0.1)',

        cardsBorder: 'rgba(255, 255, 255, 0.6)',
        cardsText: 'rgba(255, 255, 255, 0.5)',
        input: 'rgba(255, 255, 255, 0.07)',
        inputText: 'rgba(255, 255, 255, 0.35)',
        pricingText: 'rgba(255, 255, 255, 0.8)',
        pricingBorder: 'rgba(255, 255, 255, 0.3)',
        modalBorder: 'rgba(255, 255, 255, 0.15)',
        blackTransparent: 'rgba(0, 0, 0, 0.7)',
        blackChat: 'rgba(0, 0, 0, 0.5)',
        border: 'rgba(255, 255, 255, 0.9)',
        bgCards: 'rgba(255, 255, 255, 0.2)',
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('active', ['&:active', '&.router-link-active']);
    }),
    require('tailwind-scrollbar'),
  ],
};

export default config;
