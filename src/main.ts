import { app, BrowserWindow, ipcMain } from 'electron';
import * as path from 'path';
import { getDeviceInfo } from './adb';

ipcMain.handle('get-device-info', async () => {
  try {
    return await getDeviceInfo();
  } catch (err: any) {
    return { error: err.message };
  }
});

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  });

  win.loadFile(path.join(__dirname, '../public/index.html'));
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
