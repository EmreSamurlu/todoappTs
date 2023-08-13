import LoginForm, {type LoginFormProps} from './LoginForm';
import type {Meta, StoryObj} from '@storybook/react-native';

const LoginFormMeta: Meta<LoginFormProps> = {
  title: 'LoginForm',
  component: LoginForm,
  args: {
    userName: 'Test User',
  },
};

export default LoginFormMeta;

export const Basic: StoryObj<LoginFormProps> = {};
