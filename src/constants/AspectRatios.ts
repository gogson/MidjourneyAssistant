const AspectRatios: Array<PromptOption> = [
  { label: 'Default', hint: 'Square', promptValue: '--ar 1:1', checked: true },
  {
    label: 'SVGA (4:3)',
    hint: 'Landscape',
    promptValue: '--ar 4:3',
    checked: false,
  },
  {
    label: 'WXGA (5:3)',
    hint: 'Landscape',
    promptValue: '--ar 5:3',
    checked: false,
  },
  {
    label: '4K (16:9)',
    hint: 'Landscape',
    promptValue: '--ar 16:9',
    checked: false,
  },
  {
    label: 'SXGA (5:4)',
    hint: 'Landscape',
    promptValue: '--ar 5:4',
    checked: false,
  },
  { label: '1:3', hint: 'Portrait', promptValue: '--ar 1:3', checked: false },
  { label: '9:16', hint: 'Portrait', promptValue: '--ar 9:16', checked: false },
  { label: '9:21', hint: 'Portrait', promptValue: '--ar 9:21', checked: false },
  { label: '5:7', hint: 'Portrait', promptValue: '--ar 5:7', checked: false },
  {
    label: '13:19',
    hint: 'Portrait',
    promptValue: '--ar 13:19',
    checked: false,
  }, // 5:4 4:3 3:2 16:9
];

export default AspectRatios;
