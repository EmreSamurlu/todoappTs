import React from 'react';
import {Alert, KeyboardAvoidingView, Platform} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';

import {Page, SignUpForm, Visual} from '@components';
import {clearCreateUserState} from '@features';
import {RootState} from '@redux/store';

import styles from './SignUp.styles';

const SignUp = () => {
  const dispatch = useDispatch();
  const {theme} = useSelector((state: RootState) => state.theme);
  const {createUser} = useSelector((state: RootState) => state.auth);

  if (createUser === 'User Created') {
    Alert.alert('User Create Success', 'Please Login', [
      {
        text: 'OK',
        onPress: () => {
          dispatch(clearCreateUserState());
        },
      },
    ]);
  }
  return (
    <Page pageStyle={styles.page_container} goBack={false} pageTitle="">
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
