import LogoutCard, {type LogoutCardProps} from './LogoutCard';
import type {Meta, StoryObj} from '@storybook/react-native';

const LogoutCardMeta: Meta<LogoutCardProps> = {
  title: 'LogoutCard',
  component: LogoutCard,
  args: {
    userName: 'Test User',
  },
};

export default LogoutCardMeta;

export const Basic: StoryObj<LogoutCardProps> = {};
