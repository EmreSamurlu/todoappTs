import TextInput, {type TextInputProps} from './TextInput';
import type {Meta, StoryObj} from '@storybook/react-native';

const TextInputMeta: Meta<TextInputProps> = {
  argTypes: {
    onChangeText: {action: 'onChangeText'},
  },
  args: {
    placeholder: 'Dummy Placeholder',
  },
  title: 'TextInput',
  component: TextInput,
};

export default TextInputMeta;
export const Basic: StoryObj<TextInputProps> = {};
