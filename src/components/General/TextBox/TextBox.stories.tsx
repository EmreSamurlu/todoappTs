import TextBox, {TextBoxProps} from './TextBox';
import type {Meta, StoryObj} from '@storybook/react-native';

const TextBoxMeta: Meta<TextBoxProps> = {
  title: 'TextBox',
  component: TextBox,
  args: {
    label: 'Test Label',
    value: 'Test Value',
  },
};

export default TextBoxMeta;

export const Basic: StoryObj<TextBoxProps> = {};
