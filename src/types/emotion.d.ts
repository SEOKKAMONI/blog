import type { Colors } from "../styles/themes/colors";

declare module "@emotion/react" {
  export interface Theme {
    colors: Colors;
  }
}
