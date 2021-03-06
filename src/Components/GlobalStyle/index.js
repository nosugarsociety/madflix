import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyles = createGlobalStyle`
  ${reset};

  a {
    text-decoration: none;
    color: inherit;
  }

  *{
    box-sizing: border-box;
  }
  
  body {
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, Canta;
    font-size: 12px;
    background-color: rgba(20,20,20, 1);
    color: white;
    padding-top: 50px;
  }
`;
