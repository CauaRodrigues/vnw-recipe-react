import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before,
  html,
  body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  border: 0;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  text-decoration: none;
  }
  
  body,
  html {
  background-color: #F2F4F1;
  color: #373737;
  }
  
  ul,
  li {
  list-style: none;
  }
  
  img {
  display: block;
  max-width: 100%;
  }

`;

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App />
		<GlobalStyles />
	</React.StrictMode>
);
