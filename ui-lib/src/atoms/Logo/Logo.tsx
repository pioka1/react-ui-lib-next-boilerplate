import React from "react";

import { WorkIn, Finland, LogoContainer } from "./Logo.styles";

export interface LogoProps {
  color: string;
}

const Logo:React.FC<LogoProps> = ({ color }) => {
  return (
    <LogoContainer color={color}>
      <WorkIn>WORK IN</WorkIn>
      <Finland>FINLAND</Finland>
    </LogoContainer>
  );
};

export { Logo };
