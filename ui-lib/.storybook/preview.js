import { ThemeProvider } from "@emotion/react";
import { addDecorator } from "@storybook/react";
import { withThemes } from "@react-theming/storybook-addon";

import { eCorpTestTheme1, eCorpTestTheme2 } from "../src";

const themes = [eCorpTestTheme1, eCorpTestTheme2];
addDecorator(withThemes(ThemeProvider, themes));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
