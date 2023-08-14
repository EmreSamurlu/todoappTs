import {createAsyncThunk} from '@reduxjs/toolkit';
import {SignUpFormProps} from 'src/screens/Auth/AuthTypes';

export const signupThunk = createAsyncThunk(
  'auth/signupThunk',
  async (values: SignUpFormProps) => {
    const {email, password, re_password} = values;

    if (email === 'test' && password === '123456' && password === re_password) {
      return 'User Created';
    } else {
      throw Error('Error');
    }
  },
);
