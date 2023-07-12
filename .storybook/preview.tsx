import React from 'react';

import {themeStyles} from '../src/styles';
import {NavigationContainer} from '@react-navigation/native';


const deco = (Story: any) => {
  return(
  <NavigationContainer
    theme={themeStyles['light']}>
    <Story />
  </NavigationContainer>
)};

export const decorators = [deco];

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
