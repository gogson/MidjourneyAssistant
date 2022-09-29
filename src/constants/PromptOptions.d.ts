declare global {
  interface PromptOption {
    label: string;
    hint?: string;
    image?: string;
    checked: boolean;
    promptValue: string;
  }
}

export {};
