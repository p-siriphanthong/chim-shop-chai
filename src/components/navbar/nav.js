import React from 'react'
import styled from 'styled-components'
import config from '../../config'

const Wrapper = styled.div`
  padding: 0 15px;
  display: inline;
  box-sizing: border-box;

  @media (max-width: ${config.breakpoints.small}px) {
    width: 100%;
    padding: 0.5rem 0;
    display: block;
    text-align: right;
  }
`

const Text = styled.a`
  @media (max-width: ${config.breakpoints.small}px) {
    color: rgba(0, 0, 0, 0.5);

    &:hover {
      color: rgba(0, 0, 0, 0.7);
    }
  }

  @media (min-width: ${config.breakpoints.small}px) {
    font-family: 'TATSanaChon', sans-serif;
    font-weight: bold;
    font-size: 14px;
    position: relative;
    white-space: nowrap;

    &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 6px;
      bottom: -14px;
      left: 0;
      transform: scaleX(0);
      visibility: hidden;
      transition: all 0.3s ease-in-out;
      background-color: ${config.color.primary};
    }

    &:hover {
      color: ${config.color.primary};

      &:after {
        transform: scaleX(1);
        visibility: visible;
      }
    }
  }
`

const Nav = ({ href, children }) => (
  <Wrapper>
    <Text href={href} target='_blank'>
      {children}
    </Text>
  </Wrapper>
)

export default Nav
