import styled from "@emotion/styled";

interface StyledButtonProps {
  backgroundColor: string;
  color: string;
  backgroundColorHover?: string;
  colorHover?: string;
  iconPosition?: "left" | "right";
}
export const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  align-items: center;
  padding: ${props => {
    if (props.iconPosition === "right") {
      return "12px 10px 12px 20px";
    }
    if (props.iconPosition === "left") {
      return "12px 20px 12px 10px";
    }
    return "12px 20px";
  }};
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};
  font-size: 1.6rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  &:hover, &:focus, &:active {
    background-color: ${props => props.backgroundColorHover ?? props.backgroundColor};
    color: ${props => props.colorHover ?? props.color};
  }
`;
