import ArtStyle from './ArtStyle';
import AspectRatios from './AspectRatios';
import Common from './Common';
import Lighting from './Lighting';
import MJChaos from './MJChaos';
import MJStyling from './MJStyling';

const PromptSettings = {
  AspectRatios: {
    label: 'Aspect Ratio',
    type: 'choice',
    options: AspectRatios,
  },
  Lighting: {
    label: 'Lighting',
    type: 'choice',
    options: Lighting,
  },
  MJStyling: {
    label: 'MJ Styling',
    type: 'choice',
    options: MJStyling,
  },
  MJChaos: {
    label: 'MJ Chaos',
    type: 'choice',
    options: MJChaos,
  },
  Common: {
    label: 'Common',
    type: 'select',
    options: Common,
  },
  ArtStyle: {
    label: 'Art Style',
    type: 'choice',
    options: ArtStyle,
  },
};

export default PromptSettings;
