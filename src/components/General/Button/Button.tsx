import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';
export interface ButtonProps {
  onPress: () => void;
  text: string;
}

const Button: React.FC<ButtonProps> = ({onPress, text}) => {
  const {colors} = useTheme();

  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor: colors.blue,
        },
      ]}
      onPress={onPress}
      activeOpacity={0.8}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  text: {color: 'white'},
});

export default Button;
