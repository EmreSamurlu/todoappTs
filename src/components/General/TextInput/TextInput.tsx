import React, {useState} from 'react';
import {TextInput as Input, View} from 'react-native';
import styles from './TextInput.styles';
import {useTheme} from '@react-navigation/native';
import {getKeyValue} from '../../../utils/utils';

export interface TextInputProps {
  onChangeText: (text: string) => void;
  placeholder: string;
  type: any;
}

const TextInput: React.FC<TextInputProps> = ({
  onChangeText,
  placeholder,
  type = 'default',
}) => {
  const {colors} = useTheme();
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const styleType = getKeyValue(styles)(type);

  return (
    <View
      style={[
        styleType.container,
        {
          backgroundColor: colors.card,
          borderBottomColor: isFocused ? colors.blue : colors.border,
        },
      ]}>
      <Input
        onEndEditing={() => setIsFocused(false)}
        onFocus={() => setIsFocused(true)}
        onChangeText={onChangeText}
        placeholder={placeholder}
      />
    </View>
  );
};

export default TextInput;
