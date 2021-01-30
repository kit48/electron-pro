import * as Electron from 'electron';

const electron: typeof Electron = window.require('electron');
const { ipcRenderer, remote } = electron;
const { getGlobal, shell } = remote;

export {
  shell,
  remote,
  electron,
  getGlobal,
  ipcRenderer,
};
