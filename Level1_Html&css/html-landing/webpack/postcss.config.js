const path = require('path');

module.exports = {
  //   parser: "sugarss",
  plugins: {
    'postcss-import': {},
    'postcss-preset-env': {
      overrideBrowserslist: [
        '> 1%',
        'maintained node versions',
        'not ie <= 8',
        'not dead',
        'ie 10',
      ],
    },
    cssnano: {},
  },
};
