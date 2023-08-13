import {createAsyncThunk} from '@reduxjs/toolkit';
import {ValuesProp} from 'src/screens/Auth/AuthTypes';

export const loginThunk = createAsyncThunk(
  'auth/loginThunk',
  async (values: ValuesProp) => {
    const {email, password} = values;

    if (email === 'test' && password === '123456') {
      return 'token';
    } else {
      throw Error('Error');
    }
  },
);
