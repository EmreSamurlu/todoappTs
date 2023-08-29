import SwitchButton, {SwitchButtonProps} from './SwitchButton';
import type {Meta, StoryObj} from '@storybook/react-native';

const SwitchButtonMeta: Meta<SwitchButtonProps> = {
  title: 'SwitchButton',
  component: SwitchButton,
  args: {
    falseValue: 'False Value',
    trueValue: 'True Value',
  },
};

export default SwitchButtonMeta;

export const Basic: StoryObj<SwitchButtonProps> = {};
