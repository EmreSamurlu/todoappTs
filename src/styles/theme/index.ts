import '@react-navigation/native';
export {darkTheme} from './dark';
export {lightTheme} from './light';

// Override the theme in react native navigation to accept our custom theme props.
declare module '@react-navigation/native' {
  export type ExtendedTheme = {
    dark: boolean;
    colors: {
      primary: string;
      background: string;
      card: string;
      border: string;
      text: string;
      secondaryText: string;
      buttonText: string;
      notification: string;
      blue: string;
      red: string;
      check: string;
    };
  };
  export function useTheme(): ExtendedTheme;
}
