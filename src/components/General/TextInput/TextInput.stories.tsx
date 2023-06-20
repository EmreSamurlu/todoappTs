import TextInput, {type TextInputProps} from './TextInput';
import type {Meta, StoryObj} from '@storybook/react-native';

const TextInputMeta: Meta<TextInputProps> = {
  argTypes: {
    onChangeText: {action: 'onChangeText'},
  },
  args: {
    placeholder: 'Dummy Placeholder',
    type: 'with_label',
  },
  title: 'TextInput',
  component: TextInput,
};

export default TextInputMeta;
export const Basic: StoryObj<TextInputProps> = {};
export const WithLabel: StoryObj<TextInputProps> = {
  args: {
    type: 'with_label',
  },
};
export const WithLabelAndIcon: StoryObj<TextInputProps> = {
  args: {
    type: 'with_label_and_icon',
  },
};
export const BasicDark: StoryObj<TextInputProps> = {};
