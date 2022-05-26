import styled from "@emotion/styled";

interface HeroContainerProps {
  backgroundImage: string;
}
interface HeroTextProps {
  color: string;
}
export const HeroContainer = styled.div<HeroContainerProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("${props => props.backgroundImage}");
  height: calc(100vh - 96px);
  width: 100%;
`;
export const HeroOverlay = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.2);
`;
export const HeroContent = styled.div`
  max-width: 600px;
  text-align: center;
  z-index: 0;
`;
export const HeroButtons = styled.span`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  > * {
    margin: 0 12px;
  }
`;
export const HeroText = styled.span<HeroTextProps>`
  font-size: 6rem;
  font-weight: bold;
  color: ${props => props.color};
  line-height: 7rem;
`;
