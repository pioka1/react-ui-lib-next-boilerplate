import React from "react";
import { EditableArea } from "@magnolia/react-editor";

interface BasicProps {
	main: object;
}

const Page:React.FC<BasicProps> = (props) => {
	return <EditableArea content={props.main} />;
};

export { Page };
