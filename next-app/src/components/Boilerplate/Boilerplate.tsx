import React from "react";

import { Navigation } from "../Navigation/Navigation";
import { Footer } from "../Footer/Footer";

const Boilerplate:React.FC<{}> = (props, context) => (
	<>
		<Navigation />
		<main>
			{props.children}
		</main>
		<Footer />
	</>
);

export { Boilerplate };
