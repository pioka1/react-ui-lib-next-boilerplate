import { Page } from "./templates/Page";
import { TextBox } from "./components/TextBox/TextBox";

const config = {
	componentMappings: {
		"wif-lm:pages/page": Page,
		"wif-lm:components/textbox": TextBox,
	},
};

export { config };
