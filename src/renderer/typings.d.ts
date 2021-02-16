declare module '*.less';

interface Window {
  g_umi: { version: string };

  ipcRenderer: Electron.IpcRenderer;
  _INFO: { [k: string]: any };
}
