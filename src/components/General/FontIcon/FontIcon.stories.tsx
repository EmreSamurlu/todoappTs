import FontIcon, {type IconProps} from './FontIcon';
import type {Meta, StoryObj} from '@storybook/react-native';

const FontIconMeta: Meta<IconProps> = {
  args: {
    iconName: 'calendar',
    iconSize: 48,
    iconColor: '#1294F2',
  },
  title: 'FontIcon',
  component: FontIcon,
};

export default FontIconMeta;
export const Basic: StoryObj<IconProps> = {};
