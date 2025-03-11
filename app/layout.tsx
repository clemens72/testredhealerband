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