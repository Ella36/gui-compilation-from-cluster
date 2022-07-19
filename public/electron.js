const path = require('path');

const { app, BrowserWindow, ipcMain, shell } = require('electron')
const isDev = require('electron-is-dev');

const express = require('express')
const expressApp = express();
const port = 5001;
const cors = require('cors');

const fs = require('fs')

expressApp.use(cors());
expressApp.options('*', cors());
expressApp.use(express.json());
expressApp.use(express.urlencoded({ extended: true }));

expressApp.get("/app-details", (req, res) => {
    res.send(app.name);
});

expressApp.get("/close-app", (req, res) => {
    app.quit();
});

expressApp.listen(port);

function createWindow() {
    // Create the browser window.
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
        },
    });

    // and load the index.html of the app.
    // win.loadFile("index.html");
    win.loadURL(
        isDev
            ? 'http://localhost:3000'
            : `file://${path.join(__dirname, '../build/index.html')}`
    );
    // Open the DevTools.
    if (isDev) {
        win.webContents.openDevTools({ mode: 'detach' });
    };

    // Open links in default browser
    win.webContents.on('new-window', function(e, url) {
        e.preventDefault();
        shell.openExternal(url);
    });
};

ipcMain.handle('read-json', (_, fileName) => {
    const fileContent = fs.readFileSync(fileName, { encoding: 'utf-8' })
    console.debug(`read json! ${fileContent}`)
    json = JSON.parse(fileContent);
    return json
});

ipcMain.on('write-file', (_, fileName, fileContent) => {
    console.debug(`saving! ${fileContent}`)
    fs.writeFile(fileName, fileContent, function (err) {
        if (err) {
            console.debug(err);
        }
        else {
            console.debug("The file was saved!");
        }
    });
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});