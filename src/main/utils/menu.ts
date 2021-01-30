import { Menu, MenuItemConstructorOptions, app } from 'electron';

const template: MenuItemConstructorOptions[] = [
  {
    label: 'Edit',
    submenu: [
      { role: 'undo' },
      { role: 'redo' },
      { type: 'separator' },
      { role: 'cut' },
      { role: 'copy' },
      { role: 'paste' },
      { role: 'pasteAndMatchStyle' },
      { role: 'delete' },
      { role: 'selectAll' },
    ],
  },
  {
    label: 'View',
    submenu: [
      { role: 'reload' },
      { role: 'forceReload' },
      { role: 'toggleDevTools' },
      { type: 'separator' },
      { role: 'resetZoom' },
      { role: 'zoomIn' },
      { role: 'zoomOut' },
      { type: 'separator' },
      { role: 'togglefullscreen' },
    ],
  },
  {
    label: 'Window',
    role: 'window',
    submenu: [{ role: 'minimize' }, { role: 'close' }],
  },
  {
    label: 'Help',
    submenu: [
      {
        label: 'doc',
        submenu: [
          {
            label: 'doc',
          },
        ],
      },
    ],
  },
];

if (process.platform === 'darwin') {
  template.unshift({
    label: app.getName(),
    submenu: [
      {
        role: 'about',
        label: 'about',
      },
      {
        type: 'separator',
      },
      {
        label: 'preferences',
      },
      {
        type: 'separator',
      },
      {
        role: 'quit',
        label: 'quit',
      },
    ],
  });
}

export default function() {
  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
}

