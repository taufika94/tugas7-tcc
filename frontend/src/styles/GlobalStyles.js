import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Arial', sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 0;
  }

  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }

  .navbar {
    margin-bottom: 20px;
  }

  .footer {
    margin-top: 20px;
    padding: 10px;
    background-color: #333;
    color: white;
    text-align: center;
  }
`;

export default GlobalStyles;