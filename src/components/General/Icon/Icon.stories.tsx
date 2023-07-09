import Icon, {type IconProps} from './Icon';
import type {Meta, StoryObj} from '@storybook/react-native';

const IconMeta: Meta<IconProps> = {
  args: {
    iconName: 'calendar',
    iconSize: 48,
    iconColor: '#1294F2',
  },
  title: 'Icon',
  component: Icon,
};

export default IconMeta;
export const Basic: StoryObj<IconProps> = {};
