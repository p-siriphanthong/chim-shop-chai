import React from 'react'
import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const Wrapper = styled.div`
  display: inline-block;
  width: 64px;
  height: 64px;

  &:after {
    content: '';
    display: block;
    width: 46px;
    height: 46px;
    margin: 1px;
    border-radius: 50%;
    border: 5px solid white;
    border-color: white transparent white transparent;
    animation: ${rotate} 1.2s linear infinite;
  }
`

const LoadingIcon = () => <Wrapper />

export default LoadingIcon
