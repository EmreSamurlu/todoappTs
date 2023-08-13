import {ThemeProps} from '@redux/types/reduxTypes';

export const initialState: ThemeProps = {
  theme: 'light',
  themeError: null,
  themeLoading: false,
};
