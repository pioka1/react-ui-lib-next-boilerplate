import { useTheme } from "@emotion/react";
import * as React from "react";

import { Drink } from "./generated";

enum ECorpIcon {
	DRINK = "DRINK",
	PLANE = "PLANE"
}

interface IconProps {
	icon: ECorpIcon;
	size?: number;
	color?: string;
}

const Icon:React.FC<IconProps> = ({ icon, size, color }) => {
	const theme = useTheme();

	const svgProps = {
		height: size || theme.iconSize.md,
		width: size || theme.iconSize.md,
		fill: color
	};

	switch (icon) {
	case ECorpIcon.DRINK:
	case ECorpIcon.PLANE:
		return <Drink {...svgProps} />;
	}
};

export { ECorpIcon, Icon };
