const MJChaos: Array<PromptOption> = [
  { label: 'No chaos', hint: '', checked: true, promptValue: '' },
  { label: 'Low chaos', hint: '', checked: false, promptValue: '--chaos 20' },
  {
    label: 'Medium chaos',
    hint: '',
    checked: false,
    promptValue: '--chaos 40',
  },
  { label: 'High chaos', hint: '', checked: false, promptValue: '--chaos 70' },
  {
    label: 'Very high chaos',
    hint: '',
    checked: false,
    promptValue: '--chaos 100',
  },
];

export default MJChaos;
