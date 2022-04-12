import styled from "@emotion/styled";

interface StyledTextBoxProps {
	color: string;
	backgroundColor: string;
}

const StyledTextBox = styled.div<StyledTextBoxProps>`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 200px;
	border-radius: 12px;
	${props => `color: ${props.color};`}
	${props => `background-color: ${props.backgroundColor};`}
`;

export { StyledTextBox };
