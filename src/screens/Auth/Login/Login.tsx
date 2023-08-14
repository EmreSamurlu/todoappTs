import React from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';

import {LoginForm, Page, Visual} from '../../../components';
import styles from './Login.styles';
import {useSelector} from 'react-redux';
import {RootState} from '@redux/store';
export interface LoginProps {}

const Login = () => {
  const {theme} = useSelector((state: RootState) => state.theme);
  return (
    <Page pageStyle={styles.page_container}>
      <KeyboardAvoidingView
        style={styles.page_container}
        keyboardVerticalOffset={-100}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <Visual
          image={theme === 'dark' ? 'logo_no_background' : 'logo_blue'}
          imageStyle={styles.logo}
        />
        <LoginForm />
      </KeyboardAvoidingView>
    </Page>
  );
};

export default Login;
