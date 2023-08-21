import React, {FC} from 'react';
import {View} from 'react-native';
import {useTheme} from '@react-navigation/native';

import Text from '../Text/Text';
import styles from './TextBox.styles';

export interface TextBoxProps {
  label: string;
  value: string;
}

const TextBox: FC<TextBoxProps> = ({label, value}) => {
  const {colors} = useTheme();
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.card,
          borderBottomColor: colors.blue,
        },
      ]}>
      <View style={[styles.text_container]}>
        <Text text={label} textStyle={[styles.label, {color: colors.blue}]} />
        <Text text={value} textStyle={[styles.value, {color: colors.text}]} />
      </View>
    </View>
  );
};

export default TextBox;
