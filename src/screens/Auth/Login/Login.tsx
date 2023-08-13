import React from 'react';

import {LoginForm, Page, Visual} from '../../../components';
import styles from './Login.styles';
export interface LoginProps {}

const Login = () => {
  return (
    <Page pageStyle={styles.page_container}>
      <Visual image={'logo_no_background'} imageStyle={styles.logo} />
      <LoginForm />
    </Page>
  );
};

export default Login;
