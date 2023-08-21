import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {View, useColorScheme} from 'react-native';

import ReduxProvider from '../src/redux/ReduxProvider';
import {themeStyles} from '../src/styles';

const deco = (Story: any) => {
  const scheme = useColorScheme();

  return (
    <ReduxProvider>
      <View style={{paddingVertical: 24, alignItems: 'center'}}>
        <NavigationContainer
          theme={scheme === 'dark' ? themeStyles.dark : themeStyles.light}>
          <Story />
        </NavigationContainer>
      </View>
    </ReduxProvider>
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
