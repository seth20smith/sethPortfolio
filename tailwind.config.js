/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-pattern': "url('../public/images/istockphoto3.jpeg')",
        
      })
    },
  },
  plugins: [],
}
