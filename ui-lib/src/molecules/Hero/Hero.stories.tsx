import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Hero as HeroUi } from "./Hero";
import { Button } from "../../atoms";

export default {
  title: "atoms/Hero",
  component: HeroUi
} as ComponentMeta<typeof HeroUi>;

const Template: ComponentStory<typeof HeroUi> = (args) => <HeroUi {...args} />;

export const Hero = Template.bind({});
Hero.args = {
  backgroundImageSrc: "https://www.businessfinland.fi/4a9de7/globalassets/international-customers/work-in-finland/main-picture-for-landing-page.jpg",
  text: "Land your dream job in Finland",
  textColor: "#FFFFFF",
  buttons: [
    <Button text="See open jobs" backgroundColor="#FFFFFF" color="#002DA1" key="foo" />,
    <Button text="Get going" backgroundColor="#FFFFFF" color="#002DA1" key="bar" />,
  ]
};
