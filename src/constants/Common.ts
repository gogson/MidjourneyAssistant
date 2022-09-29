const Common: Array<PromptOption> = [
  {
    label: 'Detailed',
    hint: 'For images with intricate details',
    checked: false,
    promptValue: 'intricate details, very detailed, 8k',
  },
  {
    label: 'Photo-realism',
    hint: 'Give a photorealastic feel to the image',
    checked: false,
    promptValue: 'photorealistic, ultra photoreal',
  },
  {
    label: 'Unreal engine',
    hint: 'Give a 3D render feel to the image',
    checked: false,
    promptValue: 'unreal engine',
  },
  {
    label: 'Octane render',
    hint: 'Give a 3D render feel to the image',
    checked: false,
    promptValue: 'octane render',
  },
  {
    label: 'Black & White',
    hint: 'For black and white monochrom rendering',
    checked: false,
    promptValue: 'monochromic, black and white render',
  },
  {
    label: 'No blur',
    hint: 'Avoid blurring in image',
    checked: false,
    promptValue: '--no blur',
  },
  {
    label: 'Studio Ghibli',
    hint: 'Gives a cool Ghibli illustration style',
    checked: false,
    promptValue: 'studio ghibli style',
  },
  {
    label: 'Cyberpunk',
    hint: 'Gives a cool Cyberpunk futuristic render',
    checked: false,
    promptValue: 'cyberpunk, futuristic',
  },
];

export default Common;
