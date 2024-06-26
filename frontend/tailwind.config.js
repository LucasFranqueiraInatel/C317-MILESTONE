/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        Inter: ['Inter', 'sans-serif'],
      },
      fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
      colors: {
        'lightGreen': '#99FFAF',
        'lightBlack': '#090909',
        'grayStroke': '#202020',
        'input': '#D8DADC',
        'inputStroke': '#D8DADC',
        'textLightBlack':'#222222',
        'gold':'#DCC07C'
      }
    },
  },
  variants: {
    extend: {
      fontStyle: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    },
  },
  plugins: [],
}

