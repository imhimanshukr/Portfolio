module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
        colors: {
          'main-yellow': '#F1B317',
          'main-dark': '#111111',
          'skyBlue': '#437FFF',
          'dark-bg2': '#2B2A2A',
          'main-green': '#72b626',
          'main-white': '#F1F1F1',
          'para-clr': '#313131',
          'exp-light-time-bg': '#eee',
          'exp-dark-time-bg': '#2b2a2a',
          'about-card-dark': '#333',
          'about-card-light': '#e4e4e4',
        },
        animation: {
          'spin-slow': 'spin 10s linear infinite',
        },
    },
  },
  plugins: [],
}