import React from 'react';
import {View} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation, useTheme} from '@react-navigation/native';
import {Page, Text, Button, Visual} from '../../../components';
import styles from './LandingPage.styles';
import {routeNames} from '../../../navigation/route-names';
import {useSelector} from 'react-redux';
import {RootState} from '@redux/store';

export type RootStackParamList = {
  LandingPage: undefined;
};

const LandingPage = () => {
  const {theme} = useSelector((state: RootState) => state.theme);
  const {colors} = useTheme();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleRedirect = (selectedNav: string) => {
    if (selectedNav === 'login') {
      navigation.navigate(routeNames.Login as never);
    }
    if (selectedNav === 'signup') {
      navigation.navigate(routeNames.SignUp as never);
    }
  };
  return (
    <Page pageStyle={styles.page_container}>
      <Visual
        image={theme === 'dark' ? 'logo_no_background' : 'logo_blue'}
        imageStyle={styles.logo}
      />
      <Text
        text={'Welcome'}
        textStyle={[styles.welcome, {color: colors.text}]}
      />
      <View style={styles.container}>
        <Button
          color={'blue'}
          label="Login"
          onPress={() => handleRedirect('login')}
          type={'default'}
        />
        <Button
          color={'blue'}
          label="SignUp"
          onPress={() => handleRedirect('signup')}
          type={'default'}
        />
      </View>
    </Page>
  );
};

export default LandingPage;
