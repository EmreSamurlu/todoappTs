import React, {useEffect, useState} from 'react';
import {useColorScheme} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useDispatch, useSelector} from 'react-redux';

import {setTheme} from '../redux/features/theme';
import {RootState} from '../redux/store';
import Auth from './Auth/Auth';
import Main from './Main/Main';
import {navigationOptions, routeNames} from './route-names';
import {themeStyles} from '../styles';

const Stack = createNativeStackNavigator();

const Router: React.FC = () => {
  const dispatch = useDispatch();
  const scheme = useColorScheme();
  const {theme} = useSelector((state: RootState) => state.theme);
  const {token} = useSelector((state: RootState) => state.auth);
  const [selectedTheme, setSelectedTheme] = useState<string>();
  const [isSignedIn, setIsSignedIn] = useState<Boolean>(false);

  useEffect(() => {
    if (theme) {
      setSelectedTheme(theme);
    }
    if (scheme) {
      setSelectedTheme(scheme);
      dispatch(setTheme(scheme));
    }
  }, [dispatch, scheme, theme]);

  useEffect(() => {
    if (token) {
      setIsSignedIn(true);
    }
  }, [token]);

  return (
    <NavigationContainer
      theme={selectedTheme === 'dark' ? themeStyles.dark : themeStyles.light}>
      <Stack.Navigator screenOptions={navigationOptions}>
        {isSignedIn ? (
          <Stack.Screen name={routeNames.MainStack} component={Main} />
        ) : (
          <Stack.Screen name={routeNames.AuthStack} component={Auth} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
