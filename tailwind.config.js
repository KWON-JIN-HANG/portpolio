/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        colors: {
          primary: 'var(--primary-color)',
          secondary: 'var(--secondary-color)',
          accent: 'var(--accent-color)',
        },
      },
    },
    plugins: [],
    darkMode: 'media',
  }