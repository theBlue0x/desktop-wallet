const { app, BrowserWindow, Menu} = require('electron');
const contextMenu = require('electron-context-menu');
const path = require('path');
const url = require('url');

let mainWindow;

contextMenu({
  cut: true,
  copy: true,
  paste: true,
  showSearchWithGoogle: false,
  showLookUpSelection: false,
  showCopyImage: false,
  showInspectElement: false
});

function createWindow () {
  mainWindow = new BrowserWindow({
    icon: path.join(app.getAppPath(), 'icons/icon.png'),
    width: 800,
    height: 600,
    background : '#000',
    setIcon: 'icons/icon.png',
     webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      spellcheck: false
    }
  });

  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    return {
      action: 'allow',
      overrideBrowserWindowOptions: {
        icon: path.join(app.getAppPath(), 'icons/icon.png'),
      }
    }
  })

  mainWindow.loadURL('http://localhost:2022');

  var template = [{
        label: "File",
        submenu: [
            { label: "Quit", accelerator: "Command+Q", click: function() { app.quit(); }}
        ]}, {
        label: "Edit",
        submenu: [
            { label: "Undo", accelerator: "CmdOrCtrl+Z", selector: "undo:" },
            { label: "Redo", accelerator: "Shift+CmdOrCtrl+Z", selector: "redo:" },
            { type: "separator" },
            { label: "Cut", accelerator: "CmdOrCtrl+X", selector: "cut:" },
            { label: "Copy", accelerator: "CmdOrCtrl+C", selector: "copy:" },
            { label: "Paste", accelerator: "CmdOrCtrl+V", selector: "paste:" },
            { label: "Select All", accelerator: "CmdOrCtrl+A", selector: "selectAll:" }
        ]}, {
        label: 'View',
        submenu: [
            {role: 'togglefullscreen'},
            {type: 'separator'},
            {role: 'zoomin'},
            {role: 'zoomout'},
        ]}, {
        label: 'Window',
        submenu: [
            {role: 'minimize'}
        ]}
  ];

  Menu.setApplicationMenu(Menu.buildFromTemplate(template));
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})