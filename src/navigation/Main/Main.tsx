import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import mainRoutes, {mainOptions} from './main-routes';

interface RootStackParams {
  [key: string]: undefined;
}

const Stack = createNativeStackNavigator<RootStackParams>();
const Main = () => {
  return (
    <Stack.Navigator screenOptions={mainOptions}>
      {mainRoutes.map(route => (
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

export default Main;
