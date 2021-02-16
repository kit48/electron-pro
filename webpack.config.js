const webpackMerge = require('webpack-merge');

const webpackBaseConfig = require('./webpack.config.base');

module.exports = webpackMerge.smart(webpackBaseConfig, {
  target: 'electron-main',
  entry: {
    preload: './src/main/preload.ts',
    main: './src/main/main.ts',
  },
});
