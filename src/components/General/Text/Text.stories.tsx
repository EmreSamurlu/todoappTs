import Text, {type TxtProps} from './Text';

import type {Meta, StoryObj} from '@storybook/react-native';

const TextMeta: Meta<TxtProps> = {
  args: {
    text: 'Hello World',
  },
  title: 'Text',
  component: Text,
};

export default TextMeta;

export const Basic: StoryObj<TxtProps> = {};
