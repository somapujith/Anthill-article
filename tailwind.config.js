export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ant: {
          black: '#080808',
          red: '#e5232c',
          redDark: '#b81b23',
          gray: '#1a1a1a',
          muted: '#888888',
          border: '#1e1e1e',
        }
      },
      fontFamily: {
        archivo: ['Archivo', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
