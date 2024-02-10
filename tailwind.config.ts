import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-merriweather)', 'sans-serif'],
      },
      colors: {
        storesy: {
          gray: {
            100: '#f2f2f2',
            200: '#d4d5d2',
            300: '#969696',
            400: '#7c7d7e',
            500: '#333438',
            900: '#141414',
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        shimmer:
          'linear-gradient(to right, #3a3a3a 0%, #3f3f3f 10%, #4a4a4a 20%, #3f3f3f 30%, #3a3a3a 50%, #3a3a3a 100%)',
      },
      backgroundSize: {
        shimmer: '800px 200px',
      },
      keyframes: {
        shimmer: {
          from: {
            'background-position': '-400px 0',
          },
          to: {
            'background-position': '400px 0',
          },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        fadeOut: {
          from: { opacity: '1' },
          to: { opacity: '0' },
        },
        slideDownAndFade: {
          from: {
            opacity: '0',
            transform: 'translateY(-20%)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        rightSlideIn: {
          from: { opacity: '0', transform: 'translateX(-100%)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        rightSlideOut: {
          from: { opacity: '1', transform: 'translateX(0)' },
          to: { opacity: '0', transform: 'translateX(-100%)' },
        },
      },
      animation: {
        shimmer: 'shimmer 1s ease-in-out infinite forwards',
        fade: 'fadeIn 400ms ease-in-out',
        'fade-out': 'fadeOut 400ms ease-in-out',
        'fade-in': 'fadeIn 2s ease-in-out',
        'slide-down-and-fade': 'slideDownAndFade 400ms ease-in-out',
        'right-slide-in': 'rightSlideIn 400ms ease-in-out',
        'right-slide-out': 'rightSlideOut 400ms ease-in-out',
      },
    },
  },
  plugins: [],
};
export default config;
