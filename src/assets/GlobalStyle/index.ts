import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding:0;
      font-family: 'Roboto', sans-serif;
  }
  input {
    border: 0;
  }
  button {
      cursor: pointer;
      font-family: 'Roboto', sans-serif;
      border: 0;
  }
  a {
      text-decoration:none;
  }
`;
export default GlobalStyle;
