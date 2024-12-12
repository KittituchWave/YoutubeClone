import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* Ensures the root element and body take up full viewport height */
  html, body, #root {
    height: 100%;
    width: 100%;
  }

  html {
    font-size: 16px; /* sets a good base for rem units */
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    background-color: #121212;
    color: #ffffff;
    padding: 0;
    overflow-x: hidden;
    line-height: 1.5;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Global link styles (optional) */
  a {
    color: inherit;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  /* Input fields */
  input {
    background-color: #181818;
    border: 1px solid #3a3a3a;
    color: #ffffff;
    padding: 10px 20px;
    font-size: 14px;
    border-radius: 50px;
    width: 100%;
    transition: border-color 0.2s, background-color 0.2s;
    font-family: inherit;
  }

  input:focus {
    outline: none;
    border-color: #1a73e8;
    background-color: #1c1c1c;
  }

  ::placeholder {
    color: #aaa;
  }

  /* Improve focus states for better accessibility */
  button:focus,
  a:focus,
  input:focus {
    outline: 2px solid #1a73e8;
    outline-offset: 2px;
  }

  /* Optional custom scrollbar styling for dark mode */
  ::-webkit-scrollbar {
    width: 8px;
  }
  
  ::-webkit-scrollbar-track {
    background: #181818;
  }

  ::-webkit-scrollbar-thumb {
    background: #3a3a3a;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export default GlobalStyle;
