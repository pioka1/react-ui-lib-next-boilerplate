import { Page } from "./templates/Page";
import { TextBox, Hero } from "./components";

export const config = {
  componentMappings: {
    "wif-lm:pages/page": Page,
    "wif-lm:components/textbox": TextBox,
    "wif-lm:components/hero": Hero,
  },
};
