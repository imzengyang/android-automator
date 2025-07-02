import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('api', {
  getDeviceInfo: () => ipcRenderer.invoke('get-device-info')
});
