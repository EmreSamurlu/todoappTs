import React, {FC} from 'react';
import {Pressable} from 'react-native';

import {useTheme} from '@react-navigation/native';

import FontIcon from '../FontIcon';
import Text from '../Text';
import styles from './DropdownButton.styles';

export interface DropdownButtonProps {
  selectedValue: string;
  handleDropPress: () => void;
}

const DropdownButton: FC<DropdownButtonProps> = ({
  selectedValue,
  handleDropPress,
}) => {
  const {colors} = useTheme();
  return (
    <Pressable
      style={[styles.container, {borderColor: colors.blue}]}
      onPress={handleDropPress}>
      <Text
        text={selectedValue}
        textStyle={[styles.value, {color: colors.blue}]}
      />
      <FontIcon
        iconColor={colors.blue}
        iconName={'chevron-down'}
        iconSize={16}
      />
    </Pressable>
  );
};

export default DropdownButton;
