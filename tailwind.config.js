module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      primary: "#0A192F",
      secondary: "#CCD6F6",
      accent: "#F3F2F4",
    },
    extend: {
      fontFamily: {
        'codeLight': ['FiraCodeLight'],
        'codeMedium': ['FiraCodeMedium'],
        'codeBold': ['FiraCodeBold'],
        'sans': ['Roboto', 'Helvetica', 'Arial', 'sans-serif']
      }
    },
  },
  plugins: [],
}
