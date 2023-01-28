import { withThemes } from '@react-theming/storybook-addon';
import { ThemeProvider } from 'styled-components';
import { theme as ThemeA } from '../../../packages/core/src/theme-a';
import { theme as ThemeB } from '../../../packages/core/src/theme-b';

export const parameters = {
  layout: 'centered',
  viewMode: 'docs',
  actions: { argTypesRegex: '^on[A-Z].*' },
  options: {
    showPanel: true,
    isFullscreen: false,
    storySort: {
      method: 'alphabetical',
      order: ['Introduction', 'Components', 'Foundations', 'Changelog'],
    },
  },
  controls: {
    disable: false,
    expanded: false,
    hideNoControlsWarning: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  exportedParameter: 'exportedParameter',
  a11y: {
    config: {},
    options: {
      checks: { 'color-contrast': { options: { noScroll: true } } },
      restoreScroll: true,
    },
  },
};

export const globalTypes = {
  theme: {
    name: 'Tresdoce UI',
    description: 'Global theme for components',
    defaultValue: 'light',
  },
};

export const decorators = [
  withThemes(ThemeProvider, [
    { name: 'Theme A', ...ThemeA },
    { name: 'Theme B', ...ThemeB },
  ]),
];
