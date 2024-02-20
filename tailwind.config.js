/** @type {import('tailwindcss').Config} */
  module.exports ={
  content: [ "./src/**/*.{html,js,jsx,ts,tsx}",],
  theme: {
    backgroundColor:theme=>({
      ...theme('colors'),
      'primary':'#fffff',
      'secondary':'ffed4a'
    }),
    corePlugins:{
      backgroundColor:true
    },
    extend: {},
  },
  daisyui:{
    theme:[]
  },
  plugins: [require("daisyui")],
}