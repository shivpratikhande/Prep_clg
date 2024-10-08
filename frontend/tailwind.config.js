/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      
      backgroundColor: {
        'default': '#f0f0f0', 
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'], // Add custom font family
        'fredoka': ['Fredoka', 'sans-serif'], // Another custom font family
      },
    },
  },
  plugins: [
    require('daisyui'), // Add DaisyUI plugin
  ],
}
