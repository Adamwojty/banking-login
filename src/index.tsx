import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyle from "./assets/GlobalStyle";
import StateProvider from "./config/Store";
ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <StateProvider>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
