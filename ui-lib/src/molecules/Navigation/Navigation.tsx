import React from "react";

import { LangLinksContainer, LogoContainer, Nav, PageLinksContainer } from "./Navigation.styles";

interface NavigationProps {
	logo: React.ReactNode; // <NextLink><NextImage></NextLink> or <a><img /></a>
	pages: React.ReactNode[];
	languages: React.ReactNode[]; // <NextLink><NextImage></NextLink> or <a><img /></a>
	currentLanguage: string;
	isDesktop: boolean;
	backgroundColor: string;
}

const Navigation:React.FC<NavigationProps> = (props) => {
  const {
    logo,
    pages,
    languages,
    currentLanguage,
    isDesktop,
    backgroundColor,
  } = props;

  return (
    <Nav backgroundColor={backgroundColor}>
      <LogoContainer>
        {logo}
      </LogoContainer>
      <PageLinksContainer>
        {pages}
      </PageLinksContainer>
      <LangLinksContainer currentLanguage={currentLanguage}>
        {languages}
      </LangLinksContainer>
    </Nav>
  );
};

export { Navigation };
