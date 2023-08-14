export interface ThemeProps {
  theme: string;
  themeError: object | null;
  themeLoading: boolean;
}

export interface AuthProps {
  token: string;
  tokenError: object | null;
  tokenLoading: boolean;

  createUser: string;
  createUserError: object | null;
  createUserLoading: boolean;
}
