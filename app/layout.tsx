import * as React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import VisualProvider from './components/ParallaxProvider';
import theme from './theme';
import TopBar from './components/TopBar';
import TimeProvider from './components/TimeProvider';

export default async function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet" />
      </head>
      <body>
        <TimeProvider>
          <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <ThemeProvider theme={theme}>
              <VisualProvider>
                <TopBar />
                <CssBaseline />
                {props.children}
              </VisualProvider>
            </ThemeProvider>
          </AppRouterCacheProvider>
        </TimeProvider>
      </body>
    </html>
  );
}