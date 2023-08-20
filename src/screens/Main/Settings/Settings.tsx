import React from 'react';
import {View} from 'react-native';

import {Button, Page} from '../../../components';
import styles from './Settings.styles';
import {useNavigation} from '@react-navigation/native';
import {routeNames} from '../../../navigation/route-names';

const Settings = () => {
  const navigation = useNavigation();
  const handleButton = () => {
    console.log('Pressed');
  };
  const handleNavigationPress = (selectedNav: string) => {
    navigation.navigate(selectedNav as never);
  };
  return (
    <Page pageStyle={styles.page_container}>
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
          onPress={handleButton}
          type={'outline'}
        />
      </View>
    </Page>
  );
};

export default Settings;
