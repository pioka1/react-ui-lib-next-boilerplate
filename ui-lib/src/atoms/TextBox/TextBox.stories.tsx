import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { TextBox as TextBoxUi } from "./TextBox";

export default {
  title: "atoms/TextBox",
  component: TextBoxUi
} as ComponentMeta<typeof TextBoxUi>;

const Template: ComponentStory<typeof TextBoxUi> = (args) => <TextBoxUi {...args}>TextBox</TextBoxUi>;

export const TextBox = Template.bind({});
TextBox.storyName = "TextBox";
TextBox.args = {
  color: "red",
  backgroundColor: "blue"
};
