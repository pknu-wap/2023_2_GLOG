import { createTheme } from '@mui/material';

export const lightTheme = createTheme({
  typography: {
    fontFamily: 'SUITE',
  },
  breakpoints: {
    values: {
      xl: 1440,
      lg: 1280,
      md: 900,
      sm: 600,
      xs: 460,
    },
  },
  spacing: 4,

  palette: {
    mode: 'light',
    primary: {
      main: '#F94144',
      light: 'rgba(249,65,68,0.6)',
      lighter: 'rgba(249,65,68,0.2)',
      contrastText: '#fff',
    },
    secondary: {
      main: 'rgb(240, 240, 240)',
    },
    subColor: {
      main: 'rgb(250, 250, 250)',
    },
    shadowColor: {
      main: 'rgba(0, 0, 0, 0.1)',
      dark: 'rgba(0, 0, 0, 0.2)',
    },
    themeColor: {
      main: 'rgb(250, 250, 250)',
    },
    oppositeColor: {
      main: '#000000',
    },
    white: {
      main: '#ffffff',
    },
    law: {
      main: '#EBEDF0',
    },
  },
});
