export interface Theme {
  theme: string;
  themeError: object | null;
  themeLoading: boolean;
}

export const initialState: Theme = {
  theme: 'light',
  themeError: null,
  themeLoading: false,
};
