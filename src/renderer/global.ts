const info = window._INFO;

window.ipcRenderer?.invoke('getGlobal', 'author').then(([author]) => {
  const message = [
    `%c[electron-pro]%c`,
    `%cauther%c`,
    `${author}`,
    `%cinfo%c`,
    ...Object.keys(info).map((infoKey) => `${infoKey}: ${info[infoKey]}`),
  ];
  console.log(
    message.join('\n'),
    'font-weight: bold',
    'font-weight: normal',
    'font-weight: bold',
    'font-weight: normal',
    'font-weight: bold',
    'font-weight: normal',
  );
});
