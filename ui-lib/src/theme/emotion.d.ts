import "@emotion/react";

import { ECorpTheme } from "./index";

declare module "@emotion/react" {
    //eslint-disable-next-line @typescript-eslint/no-empty-interface
    export interface Theme extends ECorpTheme {}
}
