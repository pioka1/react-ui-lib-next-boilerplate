import { ThemeProvider } from "@emotion/react";
import { withThemes } from "@react-theming/storybook-addon";

import { eCorpTestTheme1, eCorpTestTheme2, GlobalStyles } from "../src";

const themes = [eCorpTestTheme1, eCorpTestTheme2];

const providerFn = ({ theme, children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);
const themingDecorator = withThemes(null, themes, { providerFn });

export const decorators = [themingDecorator];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
