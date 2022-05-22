import styled from "@emotion/styled";

interface StyledNavigationProps {
  backgroundColor: string;
}
interface StyledLangLinksProps {
  currentLanguage: string;
}

export const StyledNavigation = styled.nav<StyledNavigationProps>`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
  background-color: ${props => props.backgroundColor};
`;

export const StyledPageLinks = styled.ul`
	display: flex;
	list-style-type: none;
`;

export const StyledLangLinks = styled.span<StyledLangLinksProps>`
	display: flex;
`;
