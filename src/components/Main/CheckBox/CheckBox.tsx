import {Pressable} from 'react-native';
import React, {FC, useState} from 'react';
import {useTheme} from '@react-navigation/native';

import styles from './CheckBox.styles';
import {FontIcon} from '../../General';

export interface CheckBoxProps {}

const CheckBox: FC<CheckBoxProps> = () => {
  const {colors} = useTheme();
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const handleIconPress = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Pressable
      onPress={handleIconPress}
      style={[
        styles.container,
        {
          borderColor: colors.border,
          backgroundColor: colors.background,
        },
      ]}>
      {isChecked && (
        <FontIcon iconName={'check'} iconColor={colors.check} iconSize={18} />
      )}
    </Pressable>
  );
};

export default CheckBox;
