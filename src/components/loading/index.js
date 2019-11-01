import React from 'react'
import styled, { css } from 'styled-components'
import LoadingIcon from './icon'

const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.9);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${props => (props.isOpen ? 1 : 0)};
  transition: 1s ease-in-out;

  ${props =>
    !props.isOpen &&
    css`
      pointer-events: none;
    `}
`

const Loading = ({ isOpen = false }) => {
  return (
    <Wrapper isOpen={isOpen}>
      <LoadingIcon />
    </Wrapper>
  )
}
export default Loading
