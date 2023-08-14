import TextButton, {type TextButtonProps} from './TextButton';
import type {Meta, StoryObj} from '@storybook/react-native';

const TextButtonMeta: Meta<TextButtonProps> = {
  title: 'TextButton',
  component: TextButton,
  args: {
    label: 'Test Label',
  },
  argTypes: {
    onButtonPress: {action: 'pressed the button'},
  },
};

export default TextButtonMeta;

export const Basic: StoryObj<TextButtonProps> = {};
