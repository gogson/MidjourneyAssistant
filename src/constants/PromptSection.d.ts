declare global {
  enum PromptType {
    Choice = 'choice',
    Select = 'select',
  }

  interface PromptSection {
    label: string;
    type: PromptType;
    options: Array<PromptOption>;
  }
}

export {};
