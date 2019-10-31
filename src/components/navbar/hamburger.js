import React from 'react'
import styled, { css } from 'styled-components'
import config from '../../config'

const Wrapper = styled.div`
  width: 30px;
  height: 20px;
  position: relative;
  cursor: pointer;
`

const Line = styled.div`
  width: 100%;
  height: 3px;
  position: absolute;
  left: 0;
  background-color: ${config.color.text};
  transition: 0.25s ease-in-out;
  transform: rotate(0);
  opacity: 1;
`

const Line1 = styled(Line)`
  top: 0;
  ${props =>
    props.active &&
    css`
      top: 11px;
      transform: rotate(135deg);
    `}
`

const Line2 = styled(Line)`
  top: 10px;
  ${props =>
    props.active &&
    css`
      opacity: 0;
      left: -60px;
    `}
`

const Line3 = styled(Line)`
  top: 20px;
  ${props =>
    props.active &&
    css`
      top: 11px;
      transform: rotate(-135deg);
    `}
`

const Hamburger = ({ active = false, onClick }) => (
  <Wrapper onClick={onClick}>
    <Line1 active={active} />
    <Line2 active={active} />
    <Line3 active={active} />
  </Wrapper>
)

export default Hamburger
