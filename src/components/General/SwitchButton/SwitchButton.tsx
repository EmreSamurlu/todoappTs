import React, {FC, useState} from 'react';
import {View, Switch} from 'react-native';
import {useTheme} from '@react-navigation/native';

import {styles} from './SwitchButton.styles';
import Text from '../Text/Text';

export interface SwitchButtonProps {
  falseValue: string;
  trueValue: string;
}

const SwitchButton: FC<SwitchButtonProps> = ({falseValue, trueValue}) => {
  const {colors} = useTheme();
  const [isEnabled, setIsEnabled] = useState<boolean>(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <Text
        text={falseValue}
        textStyle={[styles.value, {color: colors.text}]}
      />
      <Switch
        trackColor={{false: colors.card, true: colors.blue}}
        thumbColor={isEnabled ? colors.check : colors.border}
        ios_backgroundColor={colors.passive}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <Text text={trueValue} textStyle={[styles.value, {color: colors.text}]} />
    </View>
  );
};

export default SwitchButton;
