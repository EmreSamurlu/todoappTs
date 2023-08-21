import Modal, {ModalProps} from './Modal';
import type {Meta, StoryObj} from '@storybook/react-native';

const ModalMeta: Meta<ModalProps> = {
  title: 'Modal',
  component: Modal,
  argTypes: {
    onPress: {action: 'pressed the Modal'},
  },
  args: {
    label: 'Modal',
    type: 'default',
  },
};

export default ModalMeta;

export const Basic: StoryObj<ModalProps> = {
  args: {
    label: 'Modal',
    type: 'default',
  },
};
