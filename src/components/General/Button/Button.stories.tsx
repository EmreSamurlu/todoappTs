import Button, {type ButtonProps} from './Button';
import type {Meta, StoryObj} from '@storybook/react-native';

const ButtonMeta: Meta<ButtonProps> = {
  title: 'Button',
  component: Button,
  argTypes: {
    onPress: {action: 'pressed the button'},
  },
  args: {
    label: 'Button',
    type: 'default',
  },
};

export default ButtonMeta;

export const Basic: StoryObj<ButtonProps> = {
  args: {
    label: 'Button',
    type: 'default',
  },
};
export const Outline: StoryObj<ButtonProps> = {
  args: {
    label: 'Button',
    type: 'outline',
    iconName: 'plus',
  },
};
export const Icon: StoryObj<ButtonProps> = {
  args: {
    type: 'icon',
    iconName: 'plus',
  },
};
