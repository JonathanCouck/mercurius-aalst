module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      'green': '#217226',
      'lgreen': '#31a839',
      'white': '#ffffff',
      'black': '#000000',
      'gray': '#e5e5e5',
      'lgray': '#f5f5f5'
    },
    fontFamily: {
      'rockwell': ['rockwell', 'sans-serif']
    },
    fontSize: {
      '404': '10rem',
      'nietGevonden': '4rem',
      'title': '2rem',
      'subtitle': '1.5rem',
    },
    screens: {
      'sm': '640px',
      'md': '850px',
      'lg': '950px',
      'nav': '1000px'
    },
    extend: {
      animation: {
        fadeIn: "fadeIn 1s ease-in forwards"
      },
      boxShadow: {
        'act': '5px 5px 10px 2px rgba(0, 0, 0, 0.3)',
        'button': '0px 0px 7px 5px rgba(0, 0, 0, 0.3)',
      },
      height: {
        'box': '36rem',
      }
    }
  },
  plugins: [],
};