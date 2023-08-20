import {createAsyncThunk} from '@reduxjs/toolkit';

export const logoutThunk = createAsyncThunk(
  'auth/logoutThunk',
  async (_, {getState}) => {
    const {auth} = getState() as any;

    if (auth.token) {
      // dispatch(clearToken());
      return 'token';
    } else {
      throw Error('Error');
    }
  },
);
