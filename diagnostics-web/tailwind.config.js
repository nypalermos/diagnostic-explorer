

module.exports = {
  content: ["./src/**/*.{html,js}"],

  important: true,
  // mode: 'jit',
  darkMode: true, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': {'min': '640px'},
      'md': {'min': '768px'},
      'lg': {'min': '1024px'},
      'xl': {'min': '1280px'},
      '2xl': {'min': '1536px'},
    },
    minHeight: {
      '4': '1rem',
      '8': '2rem',
      '12': '3rem',
      '16': '4rem',
      '20': '5rem',
      '24': '6rem',
      '28': '7rem',
      '32': '8rem',
      '36': '9rem',
      '40': '10rem',
      '80': '20rem',
    },
    maxHeight: {
      '4': '1rem',
      '8': '2rem',
      '12': '3rem',
      '16': '4rem',
      '20': '5rem',
      '24': '6rem',
      '28': '7rem',
      '32': '8rem',
      '36': '9rem',
      '40': '10rem',
      '80': '20rem',
      '120': '30rem',
    },
    width: {
      '4': '1rem',
      '8': '2rem',
      '12': '3rem',
      '16': '4rem',
      '20': '5rem',
      '24': '6rem',
      '28': '7rem',
      '32': '8rem',
      '36': '9rem',
      '40': '10rem',
      '80': '20rem',
      '100': '25rem',
      '120': '30rem',
      '140': '35rem',
      '160': '40rem',
    },
    minWidth: {
      '4': '1rem',
      '8': '2rem',
      '12': '3rem',
      '16': '4rem',
      '20': '5rem',
      '24': '6rem',
      '28': '7rem',
      '32': '8rem',
      '36': '9rem',
      '40': '10rem',
      '80': '20rem',
      '100': '25rem',
      '120': '30rem',
      '140': '35rem',
      '160': '40rem',
    },
    maxWidth: {
      '4': '1rem',
      '8': '2rem',
      '12': '3rem',
      '16': '4rem',
      '20': '5rem',
      '24': '6rem',
      '28': '7rem',
      '32': '8rem',
      '36': '9rem',
      '40': '10rem',
      '80': '20rem',
      '100': '25rem',
      '120': '30rem',
      '140': '35rem',
      '160': '40rem',
    },
    extend: {
      gridTemplateColumns: {
        '1fr-auto': '1fr auto',
        'auto-1fr': 'auto 1fr',
        'auto-1fr-auto': 'auto 1fr auto',
        'auto-1fr-1fr': 'auto 1fr 1fr',
        'props-xl': 'minmax(10%, auto) 1fr minmax(10%, auto) 1fr',
        'props-sm': 'auto 1fr',
      },
      gridTemplateRows: {
        'auto-1fr': 'auto 1fr',
        '1fr-auto': '1fr auto',
        '1fr-auto-auto': '1fr auto auto',
        'auto-1fr-auto': 'auto 1fr auto',
        'auto-auto-1fr': 'auto auto 1fr',
        'auto-1fr-1fr': 'auto 1fr 1fr',
        '1fr-auto-1fr': '1fr auto 1fr',
      },
      fontSize: {
        'xxs': '0.5rem'
      },
    },
  },
    variants: {
    extend: {},
  },
  plugins: [],
}
