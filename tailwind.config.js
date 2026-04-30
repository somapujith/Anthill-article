export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ant: {
          black: '#000000',
          red: '#e5232c',
          redDark: '#b81b23',
          cyan: '#00f0ff',
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
