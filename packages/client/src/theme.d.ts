import { Theme, ThemeOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  export interface BlogTheme extends Theme {
    bgColors: {
      regular: string;
      red: string;
    }
  }

  interface BlogThemeOptions extends ThemeOptions {
    [key: string]: any;
  }

  export function createTheme(options?: BlogTheme | BlogThemeOptions): BlogTheme;
}
