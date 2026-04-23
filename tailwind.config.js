/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors (핑크 계열)
        primary: {
          DEFAULT: '#FF8EBF',
          light: '#FFD9E5',
          dark: '#E67AAB',
        },
        // Secondary Colors (퍼플 계열)
        secondary: {
          DEFAULT: '#966988',
          light: '#B88AAD',
          dark: '#7A5570',
        },
        // Neutral Colors
        gray: {
          100: '#F5F5F5',
          200: '#E5E5E5',
          400: '#999999',
          600: '#666666',
          900: '#1A1A1A',
        },
      },
      fontFamily: {
        sans: ['Pretendard', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'DEFAULT': '0 4px 6px rgba(150,105,136,0.1)',
        'lg': '0 10px 20px rgba(150,105,136,0.15)',
        'xl': '0 20px 30px rgba(150,105,136,0.2)',
        'pink': '0 4px 14px rgba(255,142,191,0.3)',
      },
      borderRadius: {
        '3xl': '24px',
      },
    },
  },
  plugins: [],
}
