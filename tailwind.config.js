/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'mouseScroll': 'mouseScroll 2s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
      },
      keyframes: {
        mouseScroll: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '30%': { transform: 'translateY(0px)', opacity: '1' },
          '60%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(10px)', opacity: '0' }
        },
        'pulse-slow': {
          '0%': { transform: 'scale(1)', opacity: 0.4 },
          '50%': { transform: 'scale(1.5)', opacity: 0.6 },
          '100%': { transform: 'scale(2)', opacity: 0 }
        }
      },
      scale: {
        '125': '1.25',
        '150': '1.5',
        '175': '1.75',
      },
      utilities: {
        '.animation-delay-1000': {
          'animation-delay': '1.3s',
        },
        '.animation-delay-2000': {
          'animation-delay': '2.6s',
        },
      }
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.animation-delay-1000': {
          'animation-delay': '1.3s',
        },
        '.animation-delay-2000': {
          'animation-delay': '2.6s',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}; 