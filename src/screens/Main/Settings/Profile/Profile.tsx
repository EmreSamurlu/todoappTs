import React from 'react';
import {View} from 'react-native';

import {Page, TextBox} from '../../../../components';
import styles from './Profile.styles';

import mockProfile from './mockProfile.json';
import {routeNames} from '../../../../navigation/route-names';

const Profile = () => {
  return (
    <Page
      pageStyle={styles.page_container}
      goBack
      pageTitle={routeNames.Profile}>
      {mockProfile.map(item => {
        return (
          <View key={item.label} style={styles.profile_item}>
            <TextBox label={item.label} value={item.value} />
          </View>
        );
      })}
    </Page>
  );
};

export default Profile;
