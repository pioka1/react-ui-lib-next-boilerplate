import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Button as ButtonUi } from "./Button";
import { ECorpIcon, ECorpIconSize } from "../Icon/Icon";

export default {
  title: "atoms/Button",
  component: ButtonUi
} as ComponentMeta<typeof ButtonUi>;

const Template: ComponentStory<typeof ButtonUi> = (args) => <ButtonUi {...args} />;

export const Button = Template.bind({});
Button.args = {
  backgroundColor: "#ff5c5c",
  color: "white",
  text: "Drink",
  icon: ECorpIcon.DRINK,
  iconPosition: "right",
  iconSize: ECorpIconSize.MD,
  iconColor: "white"
};
