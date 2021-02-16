const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

const isDevelopment = process.env.NODE_ENV === 'development'

const developmentConfig = {
  mode: 'development',
  target: 'electron-main',
  entry: {
    main: './src/main/main.ts',
  },
  output: {
    path: path.resolve(__dirname, './dist/main'),
    filename: '[name].js',
  },
  devtool: 'source-map',
  node: {
    __dirname: false,
    __filename: false,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(
        process.env.NODE_ENV || 'development'
      ),
    }),
  ],
};

const productionConfig = webpackMerge.smart(developmentConfig, {
  mode: 'production',
  devtool: false,
})

module.exports = isDevelopment ? developmentConfig : productionConfig;
