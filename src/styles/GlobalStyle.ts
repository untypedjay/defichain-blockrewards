import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --clr-primary: #212442;
    --clr-secondary: #2D325A;
    --clr-text: #FFFFFF;
    --clr-label: #737AAE;

    --br-card: 20px;
    --br-button: 4px;
    
    --card-box-shadow: 0 8px 16px 0 rgb(0 0 0 / 4%);
    --card-border: 1px solid rgba(0, 0, 0, .2);
    --hover-transition: 0.2s ease;

    --anm-size: 50px;
    --anm-border: 4px;
    --anm-time: 1.3s;
  }
  
  * {
    box-sizing: border-box;
    font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
  
  html,
  body {
    margin: 0;
    paddding: 0;
  }
  
  html,
  body,
  #root {
    height: 100%;
    background-color: var(--clr-primary);
  }
`;