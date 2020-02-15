import { createGlobalStyle } from 'styled-components';

export enum DEFAULT_COLORS {
  PURPLE = '#989aec',
  DARK_PURPLE = '#7c7ed0',
}

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
  }

  body {
    background: #989aec;
  }

`;
