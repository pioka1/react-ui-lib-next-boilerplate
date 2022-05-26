import styled from "@emotion/styled";

interface LogoContainerProps {
  color: string;
}
export const LogoContainer = styled.span<LogoContainerProps>`
  display: flex;
  flex-direction: column;
  width: 118px;
  > span {
    color: ${props => props.color};
  }
`;
export const WorkIn = styled.span`
  font-size: 3rem;
  margin-bottom: 4px;
`;
export const Finland = styled.span`
  font-size: 3rem;
  font-weight: bold;
`;
