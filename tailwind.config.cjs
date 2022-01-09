const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      colors: {
        cstm: {
          primary: {
            'dark-magenta': 'hsl(300, 43%, 22%)',
            'soft-pink': 'hsl(333, 80%, 67%)',
          },
          neutral: {
            'dark-grayish-magenta': 'hsl(303, 10%, 53%)',
            'light-grayish-magenta': 'hsl(300, 24%, 96%)',
          },
        },
      },
      fontFamily: {
        spartan: ['Spartan', 'sans-serif'],
      },
    },
  },

  plugins: [],
}

module.exports = config
