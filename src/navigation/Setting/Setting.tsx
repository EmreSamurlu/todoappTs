import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {settingRoutes} from './setting-routes';

interface RootStackParams {
  [key: string]: undefined;
}

const Stack = createNativeStackNavigator<RootStackParams>();
const Setting = () => {
  return (
    <Stack.Navigator>
      {settingRoutes.map(route => (
        <Stack.Screen
          key={route.name}
          name={route.name}
          component={route.component}
          options={route.options}
        />
      ))}
    </Stack.Navigator>
  );
};

export default Setting;
