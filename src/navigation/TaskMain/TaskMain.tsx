import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {taskMainRoutes} from './taskmain-routes';

interface RootStackParams {
  [key: string]: undefined;
}

const Stack = createNativeStackNavigator<RootStackParams>();
const TaskMain = () => {
  return (
    <Stack.Navigator>
      {taskMainRoutes.map(route => (
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

export default TaskMain;
