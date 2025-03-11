'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1C1C1C',
      light: '#2D2D2D',
      dark: '#000000',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#A67C52',
      light: '#BF9B77',
      dark: '#8C5E2D',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1C1C1C',
      secondary: '#666666',
    },
  },
  typography: {
    fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
    h1: {
      fontFamily: '"Playfair Display", Georgia, serif',
      fontSize: '4rem',
      fontWeight: 400,
      letterSpacing: '-0.01562em',
      color: '#1C1C1C',
    },
    h2: {
      fontFamily: '"Playfair Display", Georgia, serif',
      fontSize: '3rem',
      fontWeight: 400,
      letterSpacing: '-0.00833em',
      color: '#1C1C1C',
    },
    h3: {
      fontFamily: '"Playfair Display", Georgia, serif',
      fontSize: '2.5rem',
      fontWeight: 400,
      letterSpacing: '0em',
      color: '#1C1C1C',
    },
    h4: {
      fontFamily: '"Playfair Display", Georgia, serif',
      fontSize: '2rem',
      fontWeight: 400,
      letterSpacing: '0.00735em',
      color: '#1C1C1C',
    },
    h5: {
      fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
      fontSize: '1.5rem',
      fontWeight: 400,
      letterSpacing: '0em',
      color: '#1C1C1C',
    },
    h6: {
      fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
      fontSize: '1.25rem',
      fontWeight: 500,
      letterSpacing: '0.0075em',
      color: '#1C1C1C',
    },
    subtitle1: {
      fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
      fontSize: '1rem',
      fontWeight: 400,
      letterSpacing: '0.00938em',
      color: '#666666',
    },
    subtitle2: {
      fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
      fontSize: '0.875rem',
      fontWeight: 500,
      letterSpacing: '0.00714em',
      color: '#666666',
    },
    body1: {
      fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
      fontSize: '1rem',
      fontWeight: 400,
      letterSpacing: '0.00938em',
      lineHeight: 1.7,
      color: '#666666',
    },
    body2: {
      fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
      fontSize: '0.875rem',
      fontWeight: 400,
      letterSpacing: '0.01071em',
      color: '#666666',
    },
    button: {
      fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
      fontSize: '0.875rem',
      fontWeight: 500,
      letterSpacing: '0.02857em',
      textTransform: 'uppercase',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          padding: '12px 24px',
        },
        contained: {
          backgroundColor: '#1C1C1C',
          color: '#FFFFFF',
          '&:hover': {
            backgroundColor: '#2D2D2D',
          },
        },
        outlined: {
          borderColor: '#1C1C1C',
          color: '#1C1C1C',
          '&:hover': {
            backgroundColor: 'rgba(28, 28, 28, 0.04)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
          color: '#1C1C1C',
          boxShadow: 'none',
          borderBottom: '1px solid #E0E0E0',
        },
      },
    },
  },
});

export default theme;