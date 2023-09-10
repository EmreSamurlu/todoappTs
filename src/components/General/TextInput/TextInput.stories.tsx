import type {Meta, StoryObj} from '@storybook/react-native';

import TextInput, {type TextInputProps} from './TextInput';

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
export const WithLabel: StoryObj<TextInputProps> = {
  args: {
    type: 'with_label',
    label: 'Label',
  },
};
export const WithLabelAndIcon: StoryObj<TextInputProps> = {
  args: {
    type: 'with_label',
    label: 'Label',
    iconName: 'calendar',
  },
};
