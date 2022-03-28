import React from "react";
import { ComponentMeta } from "@storybook/react";

import { Button as ButtonUi } from "./Button";
import { ECorpIcon } from "../Icon/Icon";

export default {
	title: "atoms/Button",
	component: ButtonUi,
} as ComponentMeta<typeof ButtonUi>;

export const Button = () => <ButtonUi text="Test" icon={ECorpIcon.DRINK} iconPosition="right" />;
