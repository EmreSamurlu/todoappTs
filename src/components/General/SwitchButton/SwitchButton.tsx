import React, {FC} from 'react';
import {View, Switch} from 'react-native';
import {useTheme} from '@react-navigation/native';

import {styles} from './SwitchButton.styles';
import Text from '../Text/Text';

export interface SwitchButtonProps {
  falseValue: string;
  trueValue: string;
  isEnabled: boolean;
  toggleSwitch: (isEnabled: boolean) => void;
}

const SwitchButton: FC<SwitchButtonProps> = ({
  falseValue,
  trueValue,
  isEnabled,
  toggleSwitch,
}) => {
  const {colors} = useTheme();

  return (
    <View style={styles.container}>
      <Text
        text={falseValue}
        textStyle={[styles.value, {color: colors.text}]}
      />
      <Switch
        trackColor={{
          false: colors.switchFalse,
          true: colors.border,
        }}
        thumbColor={isEnabled ? colors.switchTrue : colors.border}
        ios_backgroundColor={colors.border}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <Text text={trueValue} textStyle={[styles.value, {color: colors.text}]} />
    </View>
  );
};

export default SwitchButton;
