import React from 'react';

import {themeStyles} from '../src/styles';
import {NavigationContainer} from '@react-navigation/native';
import {View, useColorScheme} from 'react-native';

const deco = (Story: any) => {
  const scheme = useColorScheme();

  return (
    <View style={{paddingVertical: 24, alignItems: 'center'}}>
      <NavigationContainer
        theme={scheme === 'dark' ? themeStyles.dark : themeStyles.light}>
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
