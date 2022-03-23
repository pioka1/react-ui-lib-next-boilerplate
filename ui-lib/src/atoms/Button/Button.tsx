import * as React from "react";
import { StyledButton } from "./Button.styles";

export const Button:React.FC<{}> = ({ children }) => {
    return <StyledButton>{children}</StyledButton>;
}
