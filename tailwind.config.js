/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        base: '#030303',
        surface: '#0a0a0a',
        elevated: '#141414',
        line: 'rgba(255, 255, 255, 0.15)',
        'line-subtle': 'rgba(255, 255, 255, 0.05)',
        primary: '#ffffff',
        secondary: '#8a8a8a',
      },
      fontFamily: {
        brand: ['Cinzel', 'serif'],
        ui: ['Montserrat', 'sans-serif'],
      },
      transitionTimingFunction: {
        slow: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
      },
      keyframes: {
        rotateTile: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        pulseGlow: {
          '0%': { opacity: '0.08' },
          '100%': { opacity: '0.22' },
        },
        drift: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '100%': { transform: 'translate(-30px, -20px) scale(1.04)' },
        },
      },
      animation: {
        rotateTile: 'rotateTile 60s linear infinite',
        pulseGlow: 'pulseGlow 4s ease-in-out infinite alternate',
        drift: 'drift 40s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [],
}

