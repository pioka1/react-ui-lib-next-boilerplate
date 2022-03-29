import styled from "@emotion/styled";

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  background-color: ${props => props.theme.color.primary};
  font-size: 18px;
  border: none;
  border-radius: 24px;
  color: black;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: #dddddd;
  }
`;
