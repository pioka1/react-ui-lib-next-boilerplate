import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Logo as LogoUi } from "./Logo";

export default {
  title: "atoms/Logo",
  component: LogoUi
} as ComponentMeta<typeof LogoUi>;

const Template: ComponentStory<typeof LogoUi> = (args) => (
  <div style={{ backgroundColor: "blue", padding: "20px" }}>
    <LogoUi {...args} />
  </div>
);

export const Logo = Template.bind({});
Logo.args = {
  color: "white"
};
