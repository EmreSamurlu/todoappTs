import {createSlice} from '@reduxjs/toolkit';

import {initialState} from './initialState';
import {loginThunk} from './thunks/loginThunk';

export default createSlice({
  name: 'theme',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(loginThunk.pending, state => {
      state.tokenLoading = true;
    });
    builder.addCase(loginThunk.fulfilled, (state, action) => {
      console.log('FULFILLED');
      state.token = typeof action.payload === 'string' ? action.payload : '';
      state.tokenLoading = false;
    });
    builder.addCase(loginThunk.rejected, (state, action) => {
      console.log('REJECT');
      state.tokenError = action;
      state.tokenLoading = false;
    });
  },
});
