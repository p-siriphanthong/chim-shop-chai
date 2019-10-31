import React from 'react'
import styled from 'styled-components'
import config from '../../config'

const Wrapper = styled.div`
  padding: 15px;
  display: inline;
`

const Text = styled.a`
  font-family: 'TATSanaChon', sans-serif;
  font-weight: bold;
  font-size: 14px;
  white-space: nowrap;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 6px;
    bottom: -14px;
    left: 0;
    transform: scaleX(0);
    visibility: hidden;
    transition: all 0.3s ease-in-out 0s;
    background-color: ${config.color.blue};
  }

  &:hover {
    color: ${config.color.blue};

    &:after {
      transform: scaleX(1);
      visibility: visible;
    }
  }
`

const Nav = ({ href, children }) => (
  <Wrapper>
    <Text href={href}>{children}</Text>
  </Wrapper>
)

export default Nav
