import SwitchButton, {SwitchButtonProps} from './SwitchButton';
import type {Meta, StoryObj} from '@storybook/react-native';

const SwitchButtonMeta: Meta<SwitchButtonProps> = {
  title: 'SwitchButton',
  component: SwitchButton,
  argTypes: {
    onPress: {action: 'pressed the SwitchButton'},
  },
  args: {
    label: 'SwitchButton',
    type: 'default',
  },
};

export default SwitchButtonMeta;

export const Basic: StoryObj<SwitchButtonProps> = {
  args: {
    label: 'SwitchButton',
    type: 'default',
  },
};
