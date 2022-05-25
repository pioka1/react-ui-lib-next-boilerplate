import styled from "@emotion/styled";

interface StyledNavigationProps {
  backgroundColor: string;
}
interface StyledLangLinksProps {
  currentLanguage: string;
}

export const Nav = styled.nav<StyledNavigationProps>`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
  background-color: ${props => props.backgroundColor};
  padding: 16px 0;
`;

export const LogoContainer = styled.span`
  padding-left: 20rem;
`;

export const PageLinksContainer = styled.ul`
	display: flex;
	list-style-type: none;
  justify-content: center;
  align-items: center;
  a {
    text-decoration: none;
  }
  span {
    font-size: 2rem;
    color: ${props => props.theme.color.primary};
  }
`;

export const LangLinksContainer = styled.span<StyledLangLinksProps>`
	display: flex;
  justify-content: end;
  padding-right: 20rem;
`;
