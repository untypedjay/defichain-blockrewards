import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --clr-accent: #AD09D7;
    --clr-accent-hover: #8E07B0;
    --clr-primary: #F4F3F6;
    --clr-primary-hover: #CBC6D2;
    --clr-secondary: #FFFFFF;
    --clr-text: #363636;
    --clr-disabled: #9C9C9C;
    
    --clr-btc: #F7931A;
    --clr-dfi: #FF01AF;
    --clr-eth: #637EEA;
    --clr-ltc: #345D9C;
    --clr-usdt: #27A27A;
    --clr-doge: #C2A632;
    
    --br-card: 8px;
    --br-button: 4px;
    
    --card-box-shadow: 0 8px 16px 0 rgb(0 0 0 / 4%);
    --card-border: 1px solid rgba(0, 0, 0, .2);
    --hover-transition: 0.2s ease;
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
  }
`;