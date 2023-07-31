import CheckBox, {type CheckBoxProps} from './CheckBox';
import type {Meta, StoryObj} from '@storybook/react-native';

const CheckBoxMeta: Meta<CheckBoxProps> = {
  title: 'CheckBox',
  component: CheckBox,
  argTypes: {
    onPress: {action: 'pressed the CheckBox'},
  },
  args: {
    label: 'CheckBox',
  },
};

export default CheckBoxMeta;

export const Basic: StoryObj<CheckBoxProps> = {
  args: {
    label: 'CheckBox',
  },
};
