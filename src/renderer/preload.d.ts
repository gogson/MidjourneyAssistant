/* eslint-disable @typescript-eslint/no-explicit-any */
import { Channels } from 'main/preload';

declare global {
  interface Window {
    electron: {
      [x: string]: any;
      clipboard: any;
      refreshTheme: () => any;
      onRefreshTheme: (calback: any) => any;
      store: {
        get: (key: string) => any;
        set: (key: string, val: any) => void;
        getSettings: () => any;
        getHistory: () => any;
        clearHistory: () => any;
        updateSettings: (val: any) => void;
        getSection: (sectionName: string) => any;
        updateSection: (sectionName: string, section: any) => any;
        saveToHistory: (
          promptValue: string,
          promptOptions: string,
          fullPrompt: string
        ) => any;
        ipcRenderer: {
          computePrompt: () => string;
          sendMessage(channel: Channels, args: unknown[]): void;
          on(
            channel: string,
            func: (...args: unknown[]) => void
          ): (() => void) | undefined;
          once(channel: string, func: (...args: unknown[]) => void): void;
        };
      };
    };
  }
}

export {};
