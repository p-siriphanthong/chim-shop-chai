import React from 'react'
import styled from 'styled-components'
import config from '../../config'
import Nav from './nav'

const Container = styled.div`
  width: 100%;
  height: ${config.navbar.height}px;
  display: flex;
  top: 0;
  align-items: center;
  overflow-y: auto;
  position: fixed;
  z-index: 99;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.1);
  background-color: white;
`

const Wrapper = styled.div`
  margin: auto;
  display: flex;
`

const Navbar = ({ items = [] }) => (
  <Container>
    <Wrapper>
      {items.map(({ label, href }, index) => (
        <Nav key={index} href={href}>
          {label}
        </Nav>
      ))}
    </Wrapper>
  </Container>
)

export default Navbar
