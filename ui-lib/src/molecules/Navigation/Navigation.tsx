import React from "react";

import { StyledLangLinks, StyledNavigation, StyledPageLinks } from "./Navigation.styles";

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
    <StyledNavigation backgroundColor={backgroundColor}>
			{logo}
			<StyledPageLinks>
				{pages}
			</StyledPageLinks>
			<StyledLangLinks currentLanguage={currentLanguage}>
				{languages}
			</StyledLangLinks>
		</StyledNavigation>
  );
};

export { Navigation };
