import React from "react";
import { TextBox as TextBoxUi } from "@ecorp/ui-lib";

interface TextBoxProps {
	text: string;
	color: string;
	backgroundColor: string;
}

const TextBox:React.FC<TextBoxProps> = (props) => (
  <TextBoxUi text={props.text} color={props.color} backgroundColor={props.backgroundColor} />
);

export { TextBox };
