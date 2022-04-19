import React from "react";

import { ECorpIcon, ECorpIconSize, Icon } from "../Icon/Icon";
import { StyledButton } from "./Button.styles";

export interface ButtonProps {
	text: string;
	icon?: ECorpIcon;
	iconSize?: ECorpIconSize;
	iconColor?: string;
	iconPosition?: "left"|"right";
}

export const Button:React.FC<ButtonProps> = (props) => {
	const {
		text,
		icon,
		iconSize,
		iconColor,
		iconPosition,
	} = props;

	return (
		<StyledButton>
			{icon && iconPosition === "left" &&
			<Icon icon={icon} size={iconSize} color={iconColor} />
			}
			{text}
			{icon && iconPosition === "right" &&
			<Icon icon={icon} size={iconSize} color={iconColor} />
			}
		</StyledButton>
	);
};
