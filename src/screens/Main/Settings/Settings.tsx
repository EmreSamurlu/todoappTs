import React, {useState} from 'react';
import {View} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';

import {Button, LogoutCard, Modal, Page} from '@components';
import {clearToken} from '@features';
import {getDimensions} from '@utils';

import {routeNames} from '../../../navigation/route-names';
import {logoutThunk} from '../../../redux/features/auth/thunks';
import styles from './Settings.styles';

const Settings = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [isLogoutVisible, setIsLogoutVisible] = useState<boolean>(false);

  const handleNavigationPress = (selectedNav: string) => {
    navigation.navigate(selectedNav as never);
  };
  const handleLogout = () => {
    dispatch(logoutThunk() as any);
    dispatch(clearToken());
  };
  const handleBackdropPress = () => {
    setIsLogoutVisible(false);
  };
  return (
    <Page pageStyle={styles.page_container} goBack={false} pageTitle="">
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
          onPress={() => setIsLogoutVisible(true)}
          type={'outline'}
        />
      </View>
      {isLogoutVisible && (
        <Modal
          onBackdropPress={() => handleBackdropPress()}
          deviceHeight={+getDimensions().height}
          deviceWidth={+getDimensions().width}
          isVisible={isLogoutVisible}>
          <View style={styles.logout_card}>
            <LogoutCard userName="Test" handleLogout={() => handleLogout()} />
          </View>
        </Modal>
      )}
    </Page>
  );
};

export default Settings;
