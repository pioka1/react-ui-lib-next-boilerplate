import React from "react";
import { Grid } from "@ecorp/ui-lib";

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
      <Grid>
        {children}
      </Grid>
    </main>
    <Footer />
  </>
);

export { Boilerplate };
