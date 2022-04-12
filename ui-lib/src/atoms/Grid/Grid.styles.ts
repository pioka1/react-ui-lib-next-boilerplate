import styled from "@emotion/styled";

import { mq } from "../../theme";

interface GridContainerProps {
	colsSm: number;
	colsMd: number;
	colsLg: number;
	gap: string;
}

export const Container = styled.div`
	margin-left: auto;
	margin-right: auto;
	max-width: ${props => props.theme.breakpoints.xl}px;
`;

export const GridContainer = styled(Container)<GridContainerProps>`
	display: grid;
	gap: ${props => props.gap};
  grid-template-columns: repeat(${props => props.colsSm}, 1fr);
  ${props => mq(props.theme.breakpoints.md)} {
    grid-template-columns: repeat(${props => props.colsMd}, 1fr);
  }
  ${props => mq(props.theme.breakpoints.lg)} {
    grid-template-columns: repeat(${props => props.colsLg}, 1fr);
  }
`;
