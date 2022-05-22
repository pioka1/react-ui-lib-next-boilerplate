import React from "react";

import { Container, GridContainer } from "./Grid.styles";

export interface GridProps {
	colsSm?: number;
	colsMd?: number;
	colsLg?: number;
	gap?: string;
}

const Grid:React.FC<GridProps> = (props) => {
  const {
    colsSm = 1,
    colsMd = 4,
    colsLg = 8,
    gap = "0",
  } = props;

  return (
    <GridContainer
      colsSm={colsSm}
      colsMd={colsMd}
      colsLg={colsLg}
      gap={gap}
    >
      {props.children}
    </GridContainer>
  );
};

export { Container, Grid };
