import React, {useState} from 'react';
import {TextInput as Input, View} from 'react-native';
import styles from './TextInput.styles';
import {useTheme} from '@react-navigation/native';
import {getKeyValue} from '../../../utils/utils';
import Text from '../Text/Text';
import Icon from '../Icon/Icon';

export interface TextInputProps {
  onChangeText: (text: string) => void;
  placeholder: string;
  type: any;
  label?: string;
  iconName?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  onChangeText,
  placeholder,
  type = 'default',
  label,
  iconName,
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
          style={[styleType.input]}
          onEndEditing={() => setIsFocused(false)}
          onFocus={() => setIsFocused(true)}
          onChangeText={onChangeText}
          placeholder={placeholder}
        />
      </View>
      {iconName && (
        <View style={[styleType.icon]}>
          <Icon iconName={iconName} iconColor={colors.blue} iconSize={24} />
        </View>
      )}
    </View>
  );
};

export default TextInput;
