import { ThemeProvider } from "@emotion/react";
import { withThemes } from "@react-theming/storybook-addon";

import { GlobalStyles } from "../src";

const storybookTheme = {
  name: "ECorp Test Theme 1",
  breakpoints: {
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1440,
  },
  color: {
    primary: "#74D0FF",
    secondary: "#555",
    tertiary: "#777"
  },
  typography: {
    fontFamily: {
      name: "Finlandica",
      srcRegular: "url('/fonts/finlandica-regular.woff') format('woff')",
      srcBold: "url('/fonts/finlandica-bold.woff') format('woff')",
    },
    fontSize: {
      xs: "0.5rem",
      sm: "0.8rem",
      md: "1.0rem",
      lg: "1.2rem",
      xl: "1.5rem",
    }
  }
};

const themes = [storybookTheme];

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
