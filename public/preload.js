// preload.js
const { contextBridge, ipcRenderer } = require('electron')


contextBridge.exposeInMainWorld('electron', {
    readJSON: (fileName) => {
        return ipcRenderer.invoke('read-json', fileName)
    },
    writeJSON: (fileName, content) => {
        ipcRenderer.send('write-json', fileName, content);
    },
});