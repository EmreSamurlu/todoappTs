import {AuthProps} from '@redux/types/reduxTypes';

export const initialState: AuthProps = {
  token: '',
  tokenError: null,
  tokenLoading: false,

  createUser: '',
  createUserError: null,
  createUserLoading: false,
};
