import React from 'react'
import ReactDOM from 'react-dom'
import { createGlobalStyle } from 'styled-components'
import App from './App'
import config from './config'
import * as serviceWorker from './serviceWorker'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'TATSanaSuksa';
    font-style: normal;
    font-weight: normal;
    font-display: swap;
    src: url(/fonts/TATSanaSuksa-Regular.woff2) format('woff2');
  }

  @font-face {
    font-family: 'TATSanaSuksa';
    font-style: normal;
    font-weight: bold;
    font-display: swap;
    src: url(/fonts/TATSanaChon-Bold.woff2) format('woff2');
  }

  @font-face {
    font-family: 'TATSanaChon';
    font-style: normal;
    font-weight: normal;
    font-display: swap;
    src: url(/fonts/TATSanaChon-Regular.woff2) format('woff2');
  }

  body {
    color: ${config.color.text};
    font-family: 'TATSanaSuksa', sans-serif;
    font-size: 16px;
    line-height: 1.8;
    margin: 0;
    padding-top: ${config.navbar.height}px;
  }

  a {
    color: ${config.color.text};
    text-decoration: none;
  }
`

ReactDOM.render(
  <React.Fragment>
    <GlobalStyle />
    <App />
  </React.Fragment>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
