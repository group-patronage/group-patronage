/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '300px',
        // => @media (min-width: 300px) { ... }
  
        sm: '640px',
        // => @media (min-width: 640px) { ... }
  
        md: '768px',
        // => @media (min-width: 768px) { ... }
  
        lg: '1024px',
        // => @media (min-width: 1024px) { ... }
  
        xl: '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
          mdl: "768px",
          lg: "960px",
          lgl: "1024px",
   
       },

      fontFamily: {
        epilogue: ['Epilogue', 'sans-serif'],
      },
      boxShadow: {
        secondary: '10px 10px 20px rgba(2, 2, 2, 0.25)',
      },
    },
  },
 
  plugins: [],
}
