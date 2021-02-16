import { ipcRenderer } from 'electron';
import { version as umiVersion } from 'umi/package.json';

// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
// 在 preload 中打印信息时，控制台中会显示本文件完整路径，观感不好，故通过 _INFO 字段使其在渲染进程中打印
window._INFO = {
  umi: umiVersion,
  node: process.versions.node,
  chrome: process.versions.chrome,
  electron: process.versions.electron,
};

window.ipcRenderer = ipcRenderer;
