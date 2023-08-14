import {createSlice} from '@reduxjs/toolkit';

import {initialState} from './initialState';
import {loginThunk, signupThunk} from './thunks';

export default createSlice({
  name: 'theme',
  initialState,
  reducers: {
    clearCreateUserState: state => {
      state.createUser = '';
    },
  },
  extraReducers: builder => {
    builder.addCase(loginThunk.pending, state => {
      state.tokenLoading = true;
    });
    builder.addCase(loginThunk.fulfilled, (state, action) => {
      state.token = typeof action.payload === 'string' ? action.payload : '';
      state.tokenLoading = false;
    });
    builder.addCase(loginThunk.rejected, (state, action) => {
      state.tokenError = action;
      state.tokenLoading = false;
    });
    builder.addCase(signupThunk.pending, state => {
      state.createUserLoading = true;
    });
    builder.addCase(signupThunk.fulfilled, (state, action) => {
      state.createUser =
        typeof action.payload === 'string' ? action.payload : '';
      state.createUserLoading = false;
    });
    builder.addCase(signupThunk.rejected, (state, action) => {
      state.createUserError = action;
      state.createUserLoading = false;
    });
  },
});
