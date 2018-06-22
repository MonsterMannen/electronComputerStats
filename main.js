const electron = require('electron');

const {app, BrowserWindow, globalShortcut} = electron;

let mainWindow;

function init(){
    mainWindow = new BrowserWindow({
        width: 600,
        height: 700,
        frame: false
    });
    mainWindow.loadURL(`file:${__dirname}//mainWindow.html`);
    
    globalShortcut.register('CommandOrControl+Q', () => {
        app.quit();
    });
}

app.on('ready', init);
