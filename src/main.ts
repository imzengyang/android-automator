import { app, BrowserWindow, ipcMain } from 'electron';
import * as path from 'path';
import { promisify } from 'util';
import { exec } from 'child_process';

const execAsync = promisify(exec);

ipcMain.handle('get-device-info', async () => {
  try {
    const { stdout: model } = await execAsync('adb shell getprop ro.product.model');
    const { stdout: version } = await execAsync('adb shell getprop ro.build.version.release');
    return { model: model.trim(), version: version.trim() };
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
