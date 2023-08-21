import React from 'react';
import {View} from 'react-native';

import {useTheme} from '@react-navigation/native';
import {Page, Text} from '../../../../components';
import styles from './AppInfo.styles';
import {appInfo} from './info';
import {routeNames} from '../../../../navigation/route-names';

const AppInfo = () => {
  const {colors} = useTheme();
  return (
    <Page
      pageStyle={styles.page_container}
      goBack
      pageTitle={routeNames.AppInfo}>
      {appInfo.map(value => {
        return (
          <View style={styles.field_container} key={value.label}>
            <Text
              text={value.label}
              textStyle={[styles.label, {color: colors.text}]}
            />
            <Text
              text={value.field}
              textStyle={[styles.field, {color: colors.text}]}
            />
          </View>
        );
      })}
    </Page>
  );
};

export default AppInfo;
