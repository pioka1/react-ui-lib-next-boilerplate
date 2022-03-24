import { addDecorator } from "@storybook/react";
import { withThemesProvider } from "storybook-addon-emotion-theme";

const theme1 = {
  name: "ECorp Test Theme 1",
  color: {
    primary: "red",
    secondary: "#555",
    tertiary: "#777"
  }
};
const theme2 = {
  name: "ECorp Test Theme 2",
  color: {
    primary: "blue",
    secondary: "#555",
    tertiary: "#777"
  }
};

const themes = [theme1, theme2];
addDecorator(withThemesProvider(themes));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
