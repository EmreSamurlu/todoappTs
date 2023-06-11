import React, {useEffect, useState} from 'react';
import {useColorScheme} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useDispatch, useSelector} from 'react-redux';

import {setTheme} from '../redux/features/theme';
import {RootState} from '../redux/store';
import {darkTheme, lightTheme} from '../styles/theme';
import Auth from './Auth/Auth';
import routeNames, {navigationOptions} from './route-names';

const Stack = createNativeStackNavigator();

const Router: React.FC = () => {
  const dispatch = useDispatch();
  const scheme = useColorScheme();
  const {theme} = useSelector((state: RootState) => state.theme);
  const [selectedTheme, setSelectedTheme] = useState<string>();
  console.log(theme);

  useEffect(() => {
    if (theme) {
      setSelectedTheme(theme);
    }
    if (scheme) {
      setSelectedTheme(scheme);
      dispatch(setTheme(scheme));
    }
  }, [dispatch, scheme, theme]);

  // const [isSignedIn, setIsSignedIn] = useState<Boolean>();

  // setIsSignedIn(true);

  return (
    <NavigationContainer
      theme={selectedTheme === 'dark' ? darkTheme : lightTheme}>
      <Stack.Navigator screenOptions={navigationOptions}>
        <Stack.Screen name={routeNames.AuthStack} component={Auth} />
        {/* {isSignedIn ? (
        ) : (
          <Stack.Screen name="MainStack" component={Main} />
        )} */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
