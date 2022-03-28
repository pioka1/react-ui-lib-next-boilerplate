import * as React from "react";
import { SVGProps } from "react";

const SvgDrink = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		xmlSpace="preserve"
		{...props}
	>
		<path fill={props.fill} d="M17.9 10.8c.1-.9 0-1.8-.2-2.8-.5-2.6-.8-6-.8-6H7s-.3 3.4-.8 6C6 9 5.9 9.9 6 10.8c.3 2.7 2.5 4.7 5 5.1V20H7v2h10v-2h-4v-4.1c2.4-.4 4.6-2.3 4.9-5.1zM12 4h3.2c.1.9.2 1.9.4 3H8.4c.2-1.1.3-2.1.4-3H12zm-4 6.6c-.1-.5 0-1 0-1.6h7.8c.1.6.1 1.1 0 1.6-.2 2-1.9 3.1-3.4 3.4h-1.1c-1.4-.3-3-1.4-3.3-3.4z" />
	</svg>
);

export default SvgDrink;
