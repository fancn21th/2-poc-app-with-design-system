import type { Preview } from '@storybook/react';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { createGlobalStyle } from 'styled-components';

/**
 *  1. default storybook setting
 *  2. follow https://storybook.js.org/recipes/styled-components
 **/

const GlobalStyles = createGlobalStyle`
  body {
    color: red;
  }
`;

export const decorators = [
  withThemeFromJSXProvider({
    GlobalStyles, // Adds your GlobalStyle component to all stories
  }),
];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
