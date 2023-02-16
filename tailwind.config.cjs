module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'mobile': '576px',
      'tablet': '768px',
      'laptop-low': '992px',
      'laptop-high': '1200px',
      'desktop': '1400px'
    },
    extend: {
      fontSize: {
        '10px': '10px',
        '12px': '12px',
        '14px': '14px',
        'normal': '16px',
        '18px': '18px',
        '20px': '20px',
        '24px': '24px',
        '28px': '28px',
        '30px': '30px',
        '35px': '35px',
        '40px': '40px'
      },
      colors: {
        primary: '#245d7b',
        layer: '#f2f2f2',
        "bg-custom": '#fff',
        "text-1": '#0f172a',
        "text-2": '#475569'
      },
      maxWidth: {
        '1k2': '1200px',
        '1k6': '1600px'
      },
      minWidth: {
        '300px': '300px'
      },
      spacing: {
        '1': '5px',
        '2': '10px',
        '3': '15px',
        '4': '20px',
        '5': '25px',
        '6': '30px',
        '7': '35px',
        '8': '40px',
        '101percent': '101%',
        '400': '400px',
        '300': '300px',
        '100vh': '100vh'
      },
      dropShadow: {
        'h1-custom': '0 25px 25px rgb(16 153 215 / 28%)'
      },



    },
  },
  plugins: [],
}