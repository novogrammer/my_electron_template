const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const ipcMain = electron.ipcMain;
const shell = electron.shell;

const path = require('path');
const url = require('url');
const os = require('os');


let mainWindow=null;

function createWindow () {
  mainWindow = new BrowserWindow({width: 800, height: 600});
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true,
  }));
  
  mainWindow.webContents.on('new-window',function(event,url){
    event.preventDefault();
    shell.openExternal(url);
  });
  
  //mainWindow.webContents.openDevTools();

  //mainWindow.on('closed', function () {
  //  mainWindow = null;
  //});
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
  //if (process.platform !== 'darwin') {
    app.quit();
  //}
});

/*
app.on('activate', function () {
  if (mainWindow === null) {
    createWindow();
  }
});
*/
