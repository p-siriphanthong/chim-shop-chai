import React from 'react'
import styled from 'styled-components'
import config from '../../config'

const Container = styled.div`
  height: 350px;
  display: flex;
  justify-content: center;
  background-color: red;

  @media (max-width: ${config.breakpoints.medium}px) {
    height: 242px;
  }

  @media (max-width: ${config.breakpoints.small}px) {
    height: 221px;
  }
`

const Image = styled.div`
  height: 100%;
  width: 33.333333%;
  padding: 20px;
  background-image: url(${props => props.src});
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Logo = styled.img.attrs({
  src: '/images/banner-logo.png',
})`
  max-width: 100%;
  height: auto;
`

const Banner = () => (
  <Container>
    <Image src='/images/banner-left.png' />
    <Image src='/images/banner-center.png'>
      <Logo />
    </Image>
    <Image src='/images/banner-right.png' />
  </Container>
)

export default Banner
