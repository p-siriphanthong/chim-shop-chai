import React from 'react'
import ReactDOM from 'react-dom'
import { createGlobalStyle } from 'styled-components'
import App from './App'
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
    src: url(/fonts/TATSanaSuksa-Bold.woff2) format('woff2');
  }

  body {
    font-family: 'TATSanaSuksa', sans-serif;
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
