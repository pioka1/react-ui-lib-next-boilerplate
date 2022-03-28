import "styled-components";

import { ECorpTheme } from "./index";

declare module "styled-components" {
    //eslint-disable-next-line @typescript-eslint/no-empty-interface
    export interface DefaultTheme extends ECorpTheme {}
}
