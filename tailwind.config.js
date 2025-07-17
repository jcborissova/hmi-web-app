/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        wave: 'waveMotion 4s linear infinite',
      },
      keyframes: {
        waveMotion: {
          '0%': { backgroundPositionX: '0%' },
          '100%': { backgroundPositionX: '200%' },
        },
      },
    },
  },
  plugins: [],
}
