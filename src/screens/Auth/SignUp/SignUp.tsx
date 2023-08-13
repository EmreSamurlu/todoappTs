import React from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';

import {Page, Visual, SignUpForm} from '../../../components';
import styles from './SignUp.styles';
import {useSelector} from 'react-redux';
import {RootState} from '@redux/store';

const SignUp = () => {
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
        <SignUpForm />
      </KeyboardAvoidingView>
    </Page>
  );
};

export default SignUp;
