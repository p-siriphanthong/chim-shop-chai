import React from 'react'
import styled from 'styled-components'
import logo from './logo.svg'

const Wrapper = styled.div`
  text-align: center;
`

const Header = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

const Logo = styled.img.attrs({
  src: logo,
  alt: 'logo',
})`
  height: 40vmin;
`

const Link = styled.a`
  color: #09d3ac;
`

const App = () => (
  <Wrapper>
    <Header>
      <Logo />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <Link
        href='https://reactjs.org'
        target='_blank'
        rel='noopener noreferrer'
      >
        Learn React
      </Link>
    </Header>
  </Wrapper>
)

export default App
