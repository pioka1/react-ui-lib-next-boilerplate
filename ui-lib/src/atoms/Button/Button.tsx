import * as React from "react";

import { StyledButton } from "./Button.styles";
import { Drink } from "../Icon/generated";

export const Button:React.FC = ({ children }) => {
	return (
		<StyledButton>
			{children}
			<Drink height={50} width={50} />
		</StyledButton>
	);
};
