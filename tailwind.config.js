module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      primary: "#0A192F",
      offset: "#19273B",
      // primary: "#420FE7",
      // background: "#19273B",
      slide: "#420FE7",
      secondary: "#CCD6F6",
      accent: "#8892B0",
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
