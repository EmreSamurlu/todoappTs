import {createAsyncThunk} from '@reduxjs/toolkit';
import {ValuesProp} from 'src/screens/Auth/AuthTypes';

export const signupThunk = createAsyncThunk(
  'auth/signupThunk',
  async (values: ValuesProp) => {
    const {email, password, re_password} = values;

    if (email === 'test' && password === '123456' && password === re_password) {
      return 'token';
    } else {
      throw Error('Error');
    }
  },
);
