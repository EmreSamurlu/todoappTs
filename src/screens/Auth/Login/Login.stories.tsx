import Login, {type LoginProps} from './Login';
import type {Meta, StoryObj} from '@storybook/react-native';

const LoginMeta: Meta<LoginProps> = {
  title: 'Login',
  component: Login,
  args: {
    frameSize: 40,
    imageUrl: 'https://picsum.photos/200/200',
  },
};

export default LoginMeta;

export const Basic: StoryObj<LoginProps> = {};
