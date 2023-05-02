/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7B39FE',
        secondary: '#CB42AD',
        black: '#080808',
        white: '#ffffff',
        gray: '#7C7C7C'
      },
      fontFamily: {
        techno: ['var(--font-techno)'],
        lexend: ['var(--font-lexend)']
      },
      backgroundImage: {
        gradient: 'linear-gradient(106.56deg, #7B39FE -1.91%, #CB42AD 101.96%)',
        "border-gradient": 'linear-gradient(98.81deg, rgba(255, 255, 255, 0.66) -1.51%, rgba(255, 255, 255, 0.2) 101.22%)',
        "line-gradient": 'linear-gradient(106.56deg, #7B39FE 25.91%, rgba(203, 66, 173, 0.7) 45.47%, rgba(203, 66, 173, 0.1) 92.96%)',
        "table-border": 'linear-gradient(106.56deg, rgba(203, 66, 173, 0.1) -1.91%, #7B39FE 62.47%, rgba(203, 66, 173, 0.1) 101.96%)',
        "footer-gradient": 'linear-gradient(153.65deg, rgba(255, 255, 255, 0) -27.32%, rgba(255, 255, 255, 0.03) 112.18%)',
        "row-gradient": 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.03) 99.48%)',
        "polygon-gradient": 'linear-gradient(100.2deg, rgba(203, 66, 173, 0.1) -3.11%, #7B39FE 85.05%, rgba(203, 66, 173, 0.1) 139.13%)',
        "polygon-border-gradient": 'linear-gradient(94.14deg, rgba(255, 255, 255, 0.46) 0%, rgba(255, 255, 255, 0.50) 10%, rgba(255, 255, 255, 0.2) 50%)  ',
        "collection-table-wrapper-gradient": 'linear-gradient(94.86deg, rgba(203, 66, 173, 0.2) -0.07%, #7B39FE 65.46%, rgba(203, 66, 173, 0.1) 133.77%)',
        "filter-border": 'linear-gradient(103.54deg, rgba(203, 66, 173, 0.1) -0.8%, #7B39FE 66.51%, rgba(203, 66, 173, 0.1) 107.8%)',
        "white-line": 'linear-gradient(98.81deg, rgba(255, 255, 255, 0.46) -1.51%,rgba(255, 255, 255, .3) 40%, rgba(255, 255, 255, 0) 90.22%)',
        "white-line-vertical": 'linear-gradient(160deg, rgba(255, 255, 255, 0.46) -1.51%,rgba(255, 255, 255, .3) 40%, rgba(255, 255, 255, 0) 90.22%)',
        "profile-select-gradient": 'linear-gradient(103.54deg, rgba(203, 66, 173, 0.1) -4.8%, #7B39FE 36.51%, rgba(203, 66, 173, 0.1) 90.8%)',
        "tips-underline": 'linear-gradient(90deg, #000000 0%, rgba(203, 66, 173, 0.1) 0.01%, #7B39FE 54.17%, rgba(203, 66, 173, 0.1) 100%)'
      }
    },
  },
  plugins: [],
}
 






// border-image-source: linear-gradient(106.56deg, rgba(255, 255, 255, 0) -1.91%, rgba(232, 232, 232, 0.3) 51.11%, rgba(255, 255, 255, 0) 101.96%);

















