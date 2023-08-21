import DropdownList, {DropdownListProps} from './DropdownList';
import type {Meta, StoryObj} from '@storybook/react-native';

const DropdownListMeta: Meta<DropdownListProps> = {
  title: 'DropdownList',
  component: DropdownList,
  argTypes: {
    handleDropPress: {action: 'pressed the DropdownList'},
  },
  args: {
    selectedValue: 'DropdownList',
  },
};

export default DropdownListMeta;

export const Basic: StoryObj<DropdownListProps> = {};
