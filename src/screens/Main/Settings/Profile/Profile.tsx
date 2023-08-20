import {View, Text} from 'react-native';
import React from 'react';
import {Page} from '../../../../components';

import styles from './Profile.styles';

const Profile = () => {
  return (
    <Page pageStyle={styles.page_container} goBack>
      <View>
        <Text>Profile</Text>
      </View>
    </Page>
  );
};

export default Profile;
