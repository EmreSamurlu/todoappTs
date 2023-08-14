import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import authRoutes, {authOptions} from './auth-routes';

interface RootStackParams {
  [key: string]: undefined;
}

const Stack = createNativeStackNavigator<RootStackParams>();
const Auth = () => {
  return (
    <Stack.Navigator screenOptions={authOptions}>
      {authRoutes.map(route => (
        <Stack.Screen
          key={route.routeName}
          name={route.routeName}
          component={route.component}
          options={route.options}
        />
      ))}
    </Stack.Navigator>
  );
};

export default Auth;
