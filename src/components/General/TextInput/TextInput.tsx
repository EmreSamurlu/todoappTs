import React from 'react';
import {TextInput as Input, View} from 'react-native';

export interface TextInputProps {
  onChangeText: () => void;
  placeholder: string;
}

const TextInput: React.FC<TextInputProps> = ({onChangeText, placeholder}) => {
  return (
    <View>
      <Input onChangeText={onChangeText} placeholder={placeholder} />
    </View>
  );
};

export default TextInput;
