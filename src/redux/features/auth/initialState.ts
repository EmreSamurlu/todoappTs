import {AuthProps} from '../../types/reduxTypes';

export const initialState: AuthProps = {
  token: '',
  tokenError: null,
  tokenLoading: false,

  createUser: '',
  createUserError: null,
  createUserLoading: false,

  logout: '',
  logoutError: null,
  logoutLoading: false,
};
