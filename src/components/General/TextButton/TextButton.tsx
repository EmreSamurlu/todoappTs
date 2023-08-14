import {Pressable} from 'react-native';
import React, {FC} from 'react';
import Text from '../Text';
export interface TextButtonProps {
  label: string;
  labelStyle: object;
  onButtonPress: () => void;
}

const TextButton: FC<TextButtonProps> = ({
  label,
  labelStyle,
  onButtonPress,
}) => {
  return (
    <Pressable onPress={onButtonPress}>
      <Text text={label} textStyle={labelStyle} />
    </Pressable>
  );
};

export default TextButton;
