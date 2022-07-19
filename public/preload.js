// preload.js
const { contextBridge, ipcRenderer } = require('electron')


contextBridge.exposeInMainWorld('electron', {
    readJSON: (fileName) => {
        return ipcRenderer.invoke('read-json', fileName)
    },
    writeFile: (fileName, fileContent) => {
        ipcRenderer.send('write-file', fileName, fileContent);
    },
});