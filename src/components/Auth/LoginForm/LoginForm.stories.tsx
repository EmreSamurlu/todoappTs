import {LoginFormProps} from 'src/screens/Auth/AuthTypes';
import LoginForm from './LoginForm';
import type {Meta, StoryObj} from '@storybook/react-native';

const LoginFormMeta: Meta<LoginFormProps> = {
  title: 'LoginForm',
  component: LoginForm,
  args: {
    email: 'example@test.com',
    password: '123456',
  },
};

export default LoginFormMeta;

export const Basic: StoryObj<LoginFormProps> = {};
