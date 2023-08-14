import {Pressable} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import {useTheme} from '@react-navigation/native';

import styles from './CheckBox.styles';
import {FontIcon} from '../../General';

export interface CheckBoxProps {
  checkStatus: boolean;
}

const CheckBox: FC<CheckBoxProps> = ({checkStatus}) => {
  const {colors} = useTheme();
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const handleIconPress = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    if (checkStatus) {
      setIsChecked(checkStatus);
    }
  }, [checkStatus]);

  return (
    <Pressable
      onPress={handleIconPress}
      style={[
        styles.container,
        {
          borderColor: colors.border,
          backgroundColor: colors.secondBackground,
        },
      ]}>
      {isChecked && (
        <FontIcon iconName={'check'} iconColor={colors.check} iconSize={18} />
      )}
    </Pressable>
  );
};

export default CheckBox;
