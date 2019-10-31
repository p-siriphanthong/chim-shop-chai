import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import config from '../../config'
import Nav from './nav'
import Hamburger from './hamburger'

const Container = styled.div`
  background-color: white;
  width: 100%;
  padding: 8px 15px;
  min-height: ${config.navbar.height}px;
  top: 0;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 99;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
`

const MobileNav = styled.div`
  width: 100%;
  height: ${config.navbar.height - 16}px;
  display: none;

  @media (max-width: ${config.breakpoints.small}px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

const NavWrapper = styled.div`
  max-width: 100%;
  height: ${config.navbar.height - 16}px;
  margin: auto;
  display: flex;
  align-items: center;
  overflow: auto;

  @media (max-width: ${config.breakpoints.small}px) {
    width: 100%;
    height: auto;
    max-height: 0;
    display: block;
    overflow: hidden;
    transition: max-height 0.4s ease-in-out;

    ${props =>
      props.isOpen &&
      css`
        max-height: ${props => props.itemCount * 44}px;
      `}
  }
`

const Logo = styled.img.attrs({
  src: '/images/logo.png',
})`
  height: 100%;
`

const Navbar = ({ items = [] }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Container>
      <MobileNav>
        <Logo />
        <Hamburger active={isOpen} onClick={() => setIsOpen(!isOpen)} />
      </MobileNav>
      <NavWrapper isOpen={isOpen} itemCount={items.length}>
        {items.map(({ label, href }, index) => (
          <Nav key={index} href={href}>
            {label}
          </Nav>
        ))}
      </NavWrapper>
    </Container>
  )
}

export default Navbar
