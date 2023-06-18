/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        xs: '440px'
      },
      boxShadow: {
        'filterBtn': '1px 1px 4px 0 #000',
        'cardShadowTopRight': '2px 2px 4px 0 #000',
      },
      keyframes: {
        poppins: {
          to:{ width: '50px', height: '50px'}
        }
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false
  },
}