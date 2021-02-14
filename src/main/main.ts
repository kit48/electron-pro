import * as path from 'path';
import * as url from 'url';
import { app, BrowserWindow } from 'electron';

import setApplicationMenu from './utils/menu';
import { oneKeyInput } from './utils/key';

let win: Electron.BrowserWindow | null;

function createWindow() {
  win = new BrowserWindow({
    height: 600,
    width: 800,
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: true,
      enableRemoteModule: true,
    },
  });

  setApplicationMenu();

  global.title = 'Yay! Welcome to Electron Pro!';

  if (process.env.NODE_ENV === 'development') {
    win.loadURL('http://localhost:8000/#/');
    win.webContents.openDevTools();
  } else {
    win.loadURL(
      url.format({
        pathname: path.join(__dirname, './index.html'),
        protocol: 'file',
        slashes: true,
      }),
    );
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
