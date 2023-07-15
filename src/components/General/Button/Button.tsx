/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import styles from './Button.styles';
import Text from '../Text/Text';
import {getKeyValue} from '../../../utils/utils';
import Icon from '../Icon/Icon';
export interface ButtonProps {
  onPress: () => void;
  iconName: string;
  label: string;
  type: any;
  color: any;
}

const Button: React.FC<ButtonProps> = ({
  onPress,
  label,
  iconName,
  color = 'blue',
  type = 'default',
}) => {
  const {colors} = useTheme();

  const styleType = getKeyValue(styles)(type);
  const selectedColor = getKeyValue(colors)(color);
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styleType.container,
        {
          backgroundColor: type !== 'outline' ? selectedColor : 'transparent',
          borderColor: type === 'outline' ? selectedColor : 'transparent',
        },
      ]}
      activeOpacity={0.8}>
      <View style={styleType.text_box}>
        <Icon
          iconSize={24}
          iconName={iconName}
          iconColor={type !== 'icon' ? selectedColor : colors.buttonText}
        />
        {type !== 'icon' && (
          <Text
            text={label}
            textStyle={[
              styleType.label,
              {color: type === 'outline' ? selectedColor : colors.buttonText},
            ]}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Button;
