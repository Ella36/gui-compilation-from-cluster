// preload.js
const { contextBridge, ipcRenderer } = require('electron')


contextBridge.exposeInMainWorld('electron', {
    readFile: async (fileName) => {
        return await ipcRenderer.invoke('read-file', fileName)
    },
    writeFile: (fileName, content) => {
        ipcRenderer.send('write-file', fileName, content);
    },
});