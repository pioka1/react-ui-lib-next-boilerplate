import * as React from "react";

import { Drink } from "./generated";

export enum ECorpIcon {
	DRINK = "DRINK",
	PLANE = "PLANE"
}

export enum ECorpIconSize {
	"XS" = 20,
	"SM" = 25,
	"MD" = 30,
	"LG" = 35,
	"XL" = 50,
}

export interface IconProps {
	icon: ECorpIcon;
	size?: ECorpIconSize;
	color?: string;
}

export const Icon:React.FC<IconProps> = ({ icon, size, color }) => {
  const svgProps = {
    height: size || ECorpIconSize.MD,
    width: size || ECorpIconSize.MD,
    fill: color
  };

  switch (icon) {
  case ECorpIcon.DRINK:
  case ECorpIcon.PLANE:
    return <Drink {...svgProps} />;
  }
};
