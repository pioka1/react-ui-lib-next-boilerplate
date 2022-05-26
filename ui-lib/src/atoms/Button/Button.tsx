import React from "react";

import { ECorpIcon, ECorpIconSize, Icon } from "../Icon/Icon";
import { StyledButton } from "./Button.styles";

export interface ButtonProps {
	text: string;
  backgroundColor: string;
  color: string;
  backgroundColorHover?: string;
  colorHover?: string;
	icon?: ECorpIcon;
	iconSize?: ECorpIconSize;
	iconColor?: string;
  iconPosition?: "left" | "right";
}

export const Button:React.FC<ButtonProps> = ({
  backgroundColor,
  color,
  backgroundColorHover,
  colorHover,
  text,
  icon,
  iconSize,
  iconColor,
  iconPosition,
}) => {
  return (
    <StyledButton
      backgroundColor={backgroundColor}
      color={color}
      backgroundColorHover={backgroundColorHover}
      colorHover={colorHover}
      iconPosition={icon && iconPosition}
    >
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
