const defaultTheme=require('tailwindcss/defaultTheme')
const allColors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize:{
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
       'base': '1rem',
       'lg': '1.125rem',
       'xl': '1.25rem',
       '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
       '5xl': '3rem',
       '6xl': '4rem',
      '7xl': '5rem',
    },
    extend: {
      borderRadius:{
          '4xl':"2rem",
          '5xl':"2.5rem",
          '6xl':"3rem",
             
      },
      spacing:{
        
        '13': '3.25rem',
        '15': '3.75rem',
      },
      fontFamily:{
          sans: ["'Inter'",...defaultTheme.fontFamily.sans] 
      },
       colors:{
        ...allColors
       }   

    },
  },
  variants: {
    extend: {
      cursor: ['hover', 'focus'],
    },
  },
  plugins: [],
}
