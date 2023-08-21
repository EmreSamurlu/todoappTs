import {createAsyncThunk} from '@reduxjs/toolkit';
import {LoginFormProps} from '../../../../screens/Auth/AuthTypes';

export const loginThunk = createAsyncThunk(
  'auth/loginThunk',
  async (values: LoginFormProps) => {
    const {email, password} = values;

    if (email === 'test' && password === '123456') {
      return 'token';
    } else {
      throw Error('Error');
    }
  },
);
