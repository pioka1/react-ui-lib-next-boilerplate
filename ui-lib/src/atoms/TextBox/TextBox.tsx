import React from "react";

import { StyledTextBox } from "./TextBox.styles";

export interface TextBoxProps {
	color: string;
	backgroundColor: string;
}

export const TextBox:React.FC<TextBoxProps> = (props) => {
  const { color, backgroundColor, children } = props;

  return (
    <StyledTextBox color={color} backgroundColor={backgroundColor}>
      {children}
    </StyledTextBox>
  );
};
