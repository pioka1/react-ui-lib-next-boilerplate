import React from "react";
import { ComponentMeta } from "@storybook/react";

import { Button as ButtonUi } from "./Button";

export default {
	title: "atoms/Button",
	component: ButtonUi,
} as ComponentMeta<typeof ButtonUi>;

export const Button = () => <ButtonUi>Text</ButtonUi>;
