import DropdownButton, {DropdownButtonProps} from './DropdownButton';
import type {Meta, StoryObj} from '@storybook/react-native';

const DropdownButtonMeta: Meta<DropdownButtonProps> = {
  title: 'DropdownButton',
  component: DropdownButton,
  argTypes: {
    handleDropPress: {action: 'pressed the DropdownButton'},
  },
  args: {
    selectedValue: 'DropdownButton',
  },
};

export default DropdownButtonMeta;

export const Basic: StoryObj<DropdownButtonProps> = {};
