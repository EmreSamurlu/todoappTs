import React from 'react';
import {TextInput as Input, View} from 'react-native';

interface Props {
  onChangeText: () => void;
}

const TextInput: React.FC<Props> = ({onChangeText}) => {
  return (
    <View>
      <Input onChangeText={onChangeText} />
    </View>
  );
};

export default TextInput;
