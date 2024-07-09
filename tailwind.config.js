// tailwind.config.js
module.exports = {
    theme: {
      extend: {
        width: {
          '2/3-minus-2.5rem': 'calc(66.666667% - 2.5rem)', // Adjust this if your ml-10 value is different
        },
      },
    },
    plugins: [],
  };