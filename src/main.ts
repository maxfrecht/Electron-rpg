import { app, BrowserWindow } from "electron";
declare var __dirname: string;
let mainWindow: Electron.BrowserWindow;

function onReady() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 500,
    minHeight: 500,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  const fileName = `file://${__dirname}/index.html`;
  mainWindow.loadURL(fileName);
  mainWindow.on("close", () => app.quit());
}

app.on("ready", () => onReady());
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
//console.log(`Electron Version ${app.getVersion()}`)
try {
  require("electron-reloader")(module);
} catch (_) {}
