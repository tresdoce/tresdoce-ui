import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import CSSReset from '../css-reset';
import { ITheme } from '../common-theme/interfaces';
import { themeA, themeB } from '..';

export interface ProviderProps {
  theme?: ITheme;
  reset?: boolean;
  variant: 'theme-a' | 'theme-b';
  children: React.ReactNode;
}

export const Provider: FC<ProviderProps> = ({
  children,
  variant = 'theme-a',
  theme,
  reset = true,
}) => {
  const themes = {
    'theme-a': themeA,
    'theme-b': themeB,
  };

  return (
    <ThemeProvider theme={theme || themes[variant]}>
      {reset && <CSSReset />}
      {children}
    </ThemeProvider>
  );
};
