import "styled-components";
import theme from "./theme";

declare module "styled-components" {
  export interface DefaultTheme {
    mobile: string;
    tablet: string;
    laptop: string;
  }
}
