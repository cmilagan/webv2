import React from 'react';
import {
    ThemeProvider as Provider,
    createTheme,
    responsiveFontSizes,
} from '@mui/material/styles';
import { BLACK, LIGHTGREY, PURPLE } from '../../utils/constants';

const headingFont = 'Segoe UI';
const bodyFont = 'Segoe UI';

let theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1000,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: PURPLE,
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: BLACK,
      paper: BLACK,
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'monospace',
      'sans-serif',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    allVariants: {
      color: LIGHTGREY,
    },
    h1: {
      fontFamily: headingFont,
      fontSize: '4.5rem',
      fontWeight: 'bold',
      textTransform: 'uppercase',
    },
    h2: {
      fontFamily: headingFont,
      fontSize: '3.2rem',
      fontWeight: 'bold',
      textTransform: 'uppercase',
    },
    h3: {
      fontFamily: headingFont,
      fontSize: '2.3rem',
      fontWeight: 'bold',
      textTransform: 'uppercase',
    },
    h4: {
      fontFamily: headingFont,
      fontSize: '1.7rem',
      fontWeight: 'bold',
      textTransform: 'uppercase',
    },
    h5: {
      fontFamily: headingFont,
      fontSize: '1.5rem',
      fontWeight: 'bold',
    },
    h6: {
      fontFamily: headingFont,
      fontSize: '1rem',
      fontWeight: 'bold',
    },
    subtitle1: {
      fontFamily: bodyFont,
      fontSize: '1rem',
    },
    subtitle2: {
      fontFamily: bodyFont,
      fontSize: '0.8rem',
    },
    body1: {
      fontFamily: bodyFont,
      fontWeight: 500,
      fontSize: '1rem',
    },
    body2: {
      fontFamily: bodyFont,
      fontWeight: 500,
      fontSize: '0.9rem',
    },
  },
});

theme = responsiveFontSizes(theme);

type ThemeProviderProps = React.PropsWithChildren<{}>;

const ThemeProvider = ({ children }: ThemeProviderProps) => {
    return <Provider theme={theme}>{children}</Provider>
};

export default ThemeProvider