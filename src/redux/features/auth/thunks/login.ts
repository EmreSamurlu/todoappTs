import {showMessage} from 'react-native-flash-message';

import {createAsyncThunk} from '@reduxjs/toolkit';

import {LoginFormProps} from '../../../../screens/Auth/AuthTypes';

export const loginThunk = createAsyncThunk(
  'auth/loginThunk',
  async (values: LoginFormProps) => {
    const {email, password} = values;

    if (email === 'test' && password === '123456') {
      showMessage({
        message: 'Login Successful',
        type: 'success',
      });
      return 'token';
    } else {
      showMessage({
        message: 'Wrong Credentials',
        type: 'warning',
      });
      throw Error('Error');
    }
  },
);
