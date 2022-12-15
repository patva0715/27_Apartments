/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {

    extend: {
      colors: {
        black: '#1f1f1f'
      },
    },
    fontSize: {
      sm: ['3.2vw', '3.6vw'],
      md: ['4.2vw', '4.6vw'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
    }
  },
  plugins: [],
}
