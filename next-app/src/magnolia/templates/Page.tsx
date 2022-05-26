import React from "react";
import { EditableArea } from "@magnolia/react-editor";

interface BasicProps {
  main: object;
}

const Page:React.FC<BasicProps> = ({ main }) => {
  return (
    <div>
      {main && <EditableArea content={main} />}
    </div>
  );
};

export { Page };
