console.log("index js working");
console.log("started ");
const { app, BrowserWindow } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    width: 400,  // temporary small size
    height: 400,
    frame: false,
    transparent: true,
    alwaysOnTop: true,
    skipTaskbar: true,   // optional: hide from taskbar
    focusable: false,    // optional: prevents stealing focus
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  win.loadFile("index.html");

  // 🔥 Auto resize to actual content size
win.webContents.on("did-finish-load", () => {
  win.webContents.executeJavaScript(`
    const rect = document.body.getBoundingClientRect();
    [Math.ceil(rect.width), Math.ceil(rect.height)];
  `).then(([w, h]) => {
    win.setSize(w, h);
  });
});
}

app.whenReady().then(createWindow);
