import MaterialIcon, {type IconProps} from './MaterialIcon';
import type {Meta, StoryObj} from '@storybook/react-native';

const MaterialIconMeta: Meta<IconProps> = {
  args: {
    iconName: 'calendar',
    iconSize: 48,
    iconColor: '#1294F2',
  },
  title: 'MaterialIcon',
  component: MaterialIcon,
};

export default MaterialIconMeta;
export const Basic: StoryObj<IconProps> = {};
