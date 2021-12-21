const { app, BrowserWindow } = require("electron");
const path = require("path");


app.on("ready", () => {
    const mainWindow = new BrowserWindow({
        webPreferences: {
            devTools: false,
            nodeIntegration: true
        }
    });
    mainWindow.loadFile(path.join(__dirname, "public/index.html"));
    mainWindow.webContents.openDevTools();
})