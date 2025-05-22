/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        layoutShift1: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(10px)' }
        },
        layoutShift2: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(10px)' }
        },
        layoutShift3: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'scale-loop': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        }
      },
      animation: {
        'layoutShift1': 'layoutShift1 2s infinite',
        'layoutShift2': 'layoutShift2 2s infinite',
        'layoutShift3': 'layoutShift3 2s infinite',
        'scale-loop': 'scale-loop infinite ease-in-out',
      }
    }
  },
  plugins: []
}