import React from "react";

import { StyledTextBox } from "./TextBox.styles";

export interface TextBoxProps {
  text: string;
	color: string;
	backgroundColor: string;
}

export const TextBox:React.FC<TextBoxProps> = (props) => {
  const { text, color, backgroundColor } = props;

  return (
    <StyledTextBox color={color} backgroundColor={backgroundColor}>
      <span>{text}</span>
    </StyledTextBox>
  );
};
