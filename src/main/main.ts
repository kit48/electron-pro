import * as path from 'path';
import { format, pathToFileURL } from 'url';
import { app, BrowserWindow, ipcMain } from 'electron';

import { author } from '../../package.json';
import setApplicationMenu from './utils/menu';
import { oneKeyInput } from './utils/key';

global.author = `${author.name} <${author.url}>`;

let win: Electron.BrowserWindow | null;

function createWindow() {
  win = new BrowserWindow({
    height: 600,
    width: 800,
    webPreferences: {
      // about remote: https://www.electronjs.org/docs/api/remote#remote
      // enableRemoteModule break change: https://www.electronjs.org/docs/breaking-changes#default-changed-enableremotemodule-defaults-to-false
      // 官方不建议使用 remote 模块：https://medium.com/@nornagon/electrons-remote-module-considered-harmful-70d69500f31
      enableRemoteModule: false,
      // 存在安全问题：https://www.electronjs.org/docs/tutorial/security#2-do-not-enable-nodejs-integration-for-remote-content
      nodeIntegration: false,
      preload: path.join(__dirname, './preload.js'),
    },
  });

  setApplicationMenu();

  if (process.env.NODE_ENV === 'development') {
    win.loadURL('http://localhost:8000/#/');
    win.webContents.openDevTools();
  } else {
    win.loadURL(format(pathToFileURL(path.join(__dirname, './index.html'))));
  }

  /**
   * 根据[官方文档](https://www.electronjs.org/docs/api/web-contents#contentssetdevtoolswebcontentsdevtoolswebcontents)的介绍
   * “developers have very limited control of” 推测不能在 DevTools 中监听按键事件，故当前无法在聚焦 DevTools 通过 F12 关闭 DevTools。
   */
  win.webContents.on('before-input-event', (_, input) => {
    if (oneKeyInput(input, 'f12')) {
      win?.webContents.toggleDevTools();
    }
    if (oneKeyInput(input, 'f5')) {
      win?.webContents.reload();
    }
  });

  win.on('closed', () => {
    win = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});

ipcMain.handle('getGlobal', async (_, ...names) => {
  return names.map((item) => global[item]);
});
