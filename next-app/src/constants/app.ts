import { ECorpTheme } from "@ecorp/ui-lib";

export const wifTheme: ECorpTheme = {
  name: "Work In Finland Theme",
  breakpoints: {
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1440,
  },
  color: {
    primary: "#002da1",
    secondary: "#555",
    tertiary: "#777",
    white: "#FFFFFF"
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

export const locales = [
  "en",
  "sv"
];
