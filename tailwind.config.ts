/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/app/**/*.{html,js,jsx,ts,tsx}', './src/components/*.{html,js,jsx,ts,tsx}'],
  theme: {
    colors: {
      text: "var(--text-color)",
      background: "var(--background-color)",
      primary: "var(--primary-color)",
      secondary: "var(--secondary-color)",
      accent: "var(--accent-color)",
    },
    fontFamily: {
      sans: ['Outfit', 'sans-serif'],
      serif: ['Aquire', 'sans-serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
}