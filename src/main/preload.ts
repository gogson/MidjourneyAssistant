import {
  contextBridge,
  ipcRenderer,
  IpcRendererEvent,
  clipboard,
} from 'electron';

export type Channels = 'ipc-example';

contextBridge.exposeInMainWorld('electron', {
  clipboard,
  refreshTheme() {
    ipcRenderer.send('refresh-theme');
  },
  onRefreshTheme: (callback) => ipcRenderer.on('on-refresh-theme', callback),
  onRefreshPrompt: (callback) => ipcRenderer.on('on-refresh-options', callback),
  store: {
    getSettings() {
      return ipcRenderer.sendSync('electron-store-get', 'settings');
    },
    getHistory() {
      return ipcRenderer.sendSync('electron-store-get', 'history');
    },
    updateSettings(settings) {
      ipcRenderer.send('electron-store-set', 'settings', settings);
    },
    getSection(sectionName) {
      return ipcRenderer.sendSync(
        'electron-store-get',
        `settings.${sectionName}`
      );
    },
    updateSection(sectionName, section) {
      ipcRenderer.send(
        'electron-store-set',
        `settings.${sectionName}`,
        section
      );
      ipcRenderer.send('refresh-options');
    },
    saveToHistory(promptValue, promptOptions, fullPrompt) {
      ipcRenderer.send('save-to-history', {
        promptValue,
        promptOptions,
        fullPrompt,
      });
    },
    clearHistory() {
      ipcRenderer.send('electron-store-set', 'history', []);
    },
    get(key) {
      return ipcRenderer.sendSync('electron-store-get', key);
    },
    set(property, val) {
      ipcRenderer.send('electron-store-set', property, val);
    },
  },
  ipcRenderer: {
    computePrompt() {
      return ipcRenderer.sendSync('generate-prompt');
    },
    sendMessage(channel: Channels, args: unknown[]) {
      ipcRenderer.send(channel, args);
    },
    on(channel: Channels, func: (...args: unknown[]) => void) {
      const subscription = (_event: IpcRendererEvent, ...args: unknown[]) =>
        func(...args);
      ipcRenderer.on(channel, subscription);

      return () => ipcRenderer.removeListener(channel, subscription);
    },
    once(channel: Channels, func: (...args: unknown[]) => void) {
      ipcRenderer.once(channel, (_event, ...args) => func(...args));
    },
  },
});
