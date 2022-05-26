import React from "react";

import { HeroButtons, HeroContainer, HeroContent, HeroOverlay, HeroText } from "./Hero.styles";

export interface HeroProps {
  text: string;
  textColor: string;
  backgroundImageSrc: string;
  buttons: React.ReactNode[];
}

export const Hero:React.FC<HeroProps> = ({
  text,
  textColor,
  backgroundImageSrc,
  buttons,
}) => {
  return (
    <HeroContainer backgroundImage={backgroundImageSrc}>
      <HeroOverlay />
      <HeroContent>
        <HeroText color={textColor}>{text}</HeroText>
        <HeroButtons>{buttons}</HeroButtons>
      </HeroContent>
    </HeroContainer>
  );
};
