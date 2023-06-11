import React from 'react';
import {View} from 'react-native';

import {Page, Text} from '../../../components';
import styles from './LandingPage.styles';

const LandingPage = () => {
  return (
    <Page>
      <View>
        <Text text={'Welcome'} textStyle={styles.welcome} />
      </View>
    </Page>
  );
};

export default LandingPage;
