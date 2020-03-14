import { createGlobalStyle } from "styled-components";
import { reset } from "react95";

export default createGlobalStyle`
  ${reset};
  @import url('./assets/fonts/Microsoft Sans Serif.ttf');

  * {
    margin:0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Microsoft Sans Serif', sans-serif;
    // -webkit-font-smoothing : none;
    height: 100%;
    background: teal;
  }


`;
