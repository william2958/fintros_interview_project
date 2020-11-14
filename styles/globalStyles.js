import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
	html,
  body {
    padding: 0;
    margin: 0;
    font-family: SofiaProWeb, Helvetica, Arial, sans-serif;
    background-color: ${({theme})=> theme.background};
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
