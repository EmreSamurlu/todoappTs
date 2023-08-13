import React, {useState} from 'react';
import {TextInput as Input, View} from 'react-native';
import styles from './TextInput.styles';
import {useTheme} from '@react-navigation/native';
import {getKeyValue} from '../../../utils/utils';
import Text from '../Text/Text';
import FontIcon from '../FontIcon';

export interface TextInputProps {
  onChangeText: (text: string) => void;
  value: string;
  placeholder: string;
  type?: any;
  label?: string;
  iconName?: string;
  secureTextEntry?: boolean;
  autoCap?: string | any;
}

const TextInput: React.FC<TextInputProps> = ({
  onChangeText,
  placeholder,
  type = 'default',
  label,
  iconName,
  value,
  secureTextEntry = false,
  autoCap = 'none',
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
      <View style={[styleType.text_container]}>
        {type === 'with_label' && (
          <Text
            text={label}
            textStyle={[styleType.label, {color: colors.blue}]}
          />
        )}
        <Input
          style={[styleType.input, {color: colors.text}]}
          onEndEditing={() => setIsFocused(false)}
          onFocus={() => setIsFocused(true)}
          onChangeText={onChangeText}
          placeholder={placeholder}
          value={value}
          secureTextEntry={secureTextEntry}
          autoCapitalize={autoCap}
        />
      </View>
      {iconName && (
        <View style={[styleType.icon]}>
          <FontIcon iconName={iconName} iconColor={colors.blue} iconSize={24} />
        </View>
      )}
    </View>
  );
};

export default TextInput;
