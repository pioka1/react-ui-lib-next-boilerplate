import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Grid as GridUi } from "./Grid";
import { TextBox } from "../TextBox/TextBox";

export default {
  title: "atoms/Grid",
  component: GridUi
} as ComponentMeta<typeof GridUi>;

const Template: ComponentStory<typeof GridUi> = (args) => (
  <GridUi {...args}>
    <TextBox backgroundColor={"navy"} color={"#FFFFFF"}>TextBox</TextBox>
    <TextBox backgroundColor={"navy"} color={"#FFFFFF"}>TextBox</TextBox>
    <TextBox backgroundColor={"navy"} color={"#FFFFFF"}>TextBox</TextBox>
    <TextBox backgroundColor={"navy"} color={"#FFFFFF"}>TextBox</TextBox>
    <TextBox backgroundColor={"navy"} color={"#FFFFFF"}>TextBox</TextBox>
    <TextBox backgroundColor={"navy"} color={"#FFFFFF"}>TextBox</TextBox>
    <TextBox backgroundColor={"navy"} color={"#FFFFFF"}>TextBox</TextBox>
    <TextBox backgroundColor={"navy"} color={"#FFFFFF"}>TextBox</TextBox>
    <TextBox backgroundColor={"navy"} color={"#FFFFFF"}>TextBox</TextBox>
    <TextBox backgroundColor={"navy"} color={"#FFFFFF"}>TextBox</TextBox>
    <TextBox backgroundColor={"navy"} color={"#FFFFFF"}>TextBox</TextBox>
    <TextBox backgroundColor={"navy"} color={"#FFFFFF"}>TextBox</TextBox>
  </GridUi>
);

export const Grid = Template.bind({});
Grid.args = {
  colsSm: 2,
  colsMd: 4,
  colsLg: 8,
  gap: "10px"
};
