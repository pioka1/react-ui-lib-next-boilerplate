import { addDecorator } from "@storybook/react";
import { withThemesProvider } from "storybook-addon-styled-component-theme";

const theme1 = {
  name: "ECorp Test Theme 1",
  color: {
    primary: "red",
    secondary: "#555",
    tertiary: "#777"
  },
  iconSize: {
    xs: 15,
    sm: 20,
    md: 25,
    lg: 30,
    xl: 50,
  }
};
const theme2 = {
  name: "ECorp Test Theme 2",
  color: {
    primary: "blue",
    secondary: "#555",
    tertiary: "#777"
  },
  iconSize: {
    xs: 15,
    sm: 20,
    md: 25,
    lg: 30,
    xl: 50,
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
