import React from 'react';

import {themeStyles} from '../src/styles';
import {NavigationContainer} from '@react-navigation/native';
import {View} from 'react-native';

const deco = (Story: any) => {
  return (
    <View style={{paddingVertical: 24, alignItems: 'center'}}>
      <NavigationContainer theme={themeStyles['light']}>
        <Story />
      </NavigationContainer>
    </View>
  );
};

export const decorators = [deco];

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
