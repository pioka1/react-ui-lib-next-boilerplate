import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Button as ButtonUi } from "./Button";
import { ECorpIcon } from "../Icon/Icon";

export default {
	title: "atoms/Button",
	component: ButtonUi
} as ComponentMeta<typeof ButtonUi>;

const Template: ComponentStory<typeof ButtonUi> = (args) => <ButtonUi {...args} />;

export const Button = Template.bind({});
Button.args = {
	text: "Text",
	icon: ECorpIcon.DRINK,
	iconPosition: "right",
	iconSize: 25,
	iconColor: "#000000"
};
