import React, {FC} from 'react';
import {Pressable} from 'react-native';
import {useTheme} from '@react-navigation/native';

import styles from './DropdownList.styles';
import Text from '../Text';
import FontIcon from '../FontIcon';

export interface DropdownListProps {
  selectedValue: string;
  handleDropPress: () => void;
}

const DropdownList: FC<DropdownListProps> = ({
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

export default DropdownList;
