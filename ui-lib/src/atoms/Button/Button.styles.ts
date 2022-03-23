import styled from "@emotion/styled";

export const StyledButton = styled.button`
  padding: 10px 20px;
  background-color: ${props => props.theme.color.primary};
  font-size: 18px;
  border: solid 1px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: #dddddd;
  }
`;
