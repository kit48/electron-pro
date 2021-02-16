// https://umijs.org/config/
import { defineConfig } from 'umi';

import routes from './routes';

export default defineConfig({
  antd: {},
  history: {
    type: 'hash',
  },
  title: 'Electron Pro',
  dynamicImport: {},
  // umi routes: https://umijs.org/docs/routing
  routes,
  publicPath: './',
  outputPath: `../../dist/renderer`,
});
