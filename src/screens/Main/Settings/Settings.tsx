import React from 'react';
import {View} from 'react-native';

import {Button, Page} from '../../../components';
import styles from './Settings.styles';
import {useNavigation} from '@react-navigation/native';
import {routeNames} from '../../../navigation/route-names';
import {useDispatch} from 'react-redux';
import {logoutThunk} from '../../../redux/features/auth/thunks';
import {clearToken} from '../../../redux/features/auth';

const Settings = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleNavigationPress = (selectedNav: string) => {
    navigation.navigate(selectedNav as never);
  };
  const handleLogout = () => {
    dispatch(logoutThunk() as any);
    dispatch(clearToken());
  };
  return (
    <Page pageStyle={styles.page_container} goBack={false}>
      <View style={styles.button_top_container}>
        <Button
          color={'blue'}
          label="Profile"
          onPress={() => handleNavigationPress(routeNames.Profile)}
          type={'default'}
        />
        <Button
          color={'blue'}
          label="User Prefences"
          onPress={() => handleNavigationPress(routeNames.UserPrefs)}
          type={'default'}
        />
        <Button
          color={'blue'}
          label="App Info"
          onPress={() => handleNavigationPress(routeNames.AppInfo)}
          type={'outline'}
        />
      </View>
      <View style={styles.logout_button_container}>
        <Button
          color={'red'}
          label="Logout"
          onPress={handleLogout}
          type={'outline'}
        />
      </View>
    </Page>
  );
};

export default Settings;
