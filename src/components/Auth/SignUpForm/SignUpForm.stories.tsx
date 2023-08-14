import {SignUpFormProps} from 'src/screens/Auth/AuthTypes';
import SignUpForm from './SignUpForm';
import type {Meta, StoryObj} from '@storybook/react-native';

const SignUpFormMeta: Meta<SignUpFormProps> = {
  title: 'SignUpForm',
  component: SignUpForm,
  args: {
    email: 'example@test.com',
    password: '123456',
    re_password: '123456',
  },
};

export default SignUpFormMeta;

export const Basic: StoryObj<SignUpFormProps> = {};
