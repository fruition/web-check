import { createGlobalStyle } from "styled-components";
import PTMono from "assets/fonts/PTMono.ttf";

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-style: normal;
    font-weight: 400;
    src: url(${PTMono});
  }
`;

export default GlobalStyles;
