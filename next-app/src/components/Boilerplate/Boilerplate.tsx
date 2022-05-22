import React from "react";

import { Navigation } from "../Navigation/Navigation";
import { Footer } from "../Footer/Footer";

interface BoilerplateProps {
	pagenav: Wif.MgnlNode;
	currentLanguage: string;
}

const Boilerplate:React.FC<BoilerplateProps> = ({ pagenav, currentLanguage, children }) => (
  <>
    <Navigation pagenav={pagenav} currentLanguage={currentLanguage} />
    <main>
      {children}
    </main>
    <Footer />
  </>
);

export { Boilerplate };
