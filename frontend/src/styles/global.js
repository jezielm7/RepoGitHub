import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body,#root {
    min-height: 100%;
  }
  
  body {
    color: #fff;
    background: #7159c1;
    -webkit-font-smoothing: antialiased !important;
    font-family: 'Lucida Sans', 'Lucida Sans Unicode', Verdana, sans-serif;
}

  body, input, button { 
    color: #222;
    font-size: 14px;
    font-family: 'Monspace', sans-serif;
}

  button {
    cursor: pointer;
  }
`;