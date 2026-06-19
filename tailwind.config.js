/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#16994a',
          800: '#12863f',
          900: '#0c5c2c',
          950: '#052e16',
        },
        gold: {
          50: '#fdf8eb',
          100: '#faeec8',
          200: '#f5db91',
          300: '#efc358',
          400: '#d4a828',
          500: '#b88a1e',
          600: '#966e17',
          700: '#755311',
          800: '#5a3f0d',
          900: '#3d2b09',
        },
        maroon: {
          50: '#fdf2f2',
          100: '#fce3e3',
          200: '#f9c6c6',
          300: '#f49a9a',
          400: '#ec6060',
          500: '#df3535',
          600: '#c32020',
          700: '#a31919',
          800: '#8b1a1a',
          900: '#711515',
        },
        cream: '#FAF8F3',
        parchment: '#F5F0E8',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        playfair: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['Lora', 'Georgia', 'serif'],
        lora: ['Lora', 'Georgia', 'serif'],
        ui: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 2px 12px rgba(18, 134, 63, 0.08)',
        'card-hover': '0 8px 32px rgba(18, 134, 63, 0.16)',
        gold: '0 2px 8px rgba(212, 168, 40, 0.25)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
