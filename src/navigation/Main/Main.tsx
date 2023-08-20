import React, {FC} from 'react';
import {useTheme} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {mainRoutes} from './main-routes';

interface RootStackParams {
  [key: string]: undefined;
}

const Tab = createBottomTabNavigator<RootStackParams>();

const Main: FC = () => {
  const {colors} = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.blue,
        tabBarInactiveTintColor: colors.passive,
        tabBarStyle: {
          borderTopColor: 'transparent',
          paddingTop: 8,
        },
      }}>
      {mainRoutes.map(route => {
        return (
          <Tab.Screen
            key={route.name}
            name={route.name}
            component={route.component}
            options={route.options}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default Main;
