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
    primary: "#002DA1",
    secondary: "#191919",
    tertiary: "#D9EBFC",
    white: "#FFFFFF",
    black: "#000000",
  },
  typography: {
    fontFamily: {
      name: "Finlandica",
      srcRegular: "url('/fonts/finlandica-regular.woff') format('woff')",
      srcBold: "url('/fonts/finlandica-bold.woff') format('woff')",
    },
    fontSize: {
      xs: "0.8rem",
      sm: "1.2rem",
      md: "1.6rem",
      lg: "2.0rem",
      xl: "3.0rem",
    }
  }
};

export const locales = [
  "en",
  "sv"
];

export const MGNL_HOST = process.env.NEXT_PUBLIC_MGNL_HOST;
export const MGNL_AUTHOR = process.env.NEXT_PUBLIC_MGNL_AUTHOR;
export const MGNL_ROOT = process.env.NEXT_PUBLIC_MGNL_ROOT;
export const MGNL_API_PAGES = process.env.NEXT_PUBLIC_MGNL_API_PAGES;
export const MGNL_API_PAGENAV = process.env.NEXT_PUBLIC_MGNL_API_PAGENAV;
export const MGNL_API_TEMPLATE = process.env.NEXT_PUBLIC_MGNL_API_TEMPLATE;
