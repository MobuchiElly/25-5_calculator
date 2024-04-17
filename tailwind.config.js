/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}', './index.html'],
  theme: {
    extend: {
      fontFamily: {
        'ibm-plex-mono': [ 'monospace'],
        'ibm-plex-mono-mono': ['IBM Plex Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}

