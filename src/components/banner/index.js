import React from 'react'
import styled from 'styled-components'
import config from '../../config'

const Container = styled.div`
  height: 350px;
  display: flex;
  justify-content: center;

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
  box-sizing: border-box;
`

const Logo = styled.img.attrs({
  src: process.env.PUBLIC_URL + '/images/hero-banner/banner-logo.png',
})`
  max-width: 100%;
  height: auto;
`

const Banner = () => (
  <Container>
    <Image
      src={`${process.env.PUBLIC_URL}/images/hero-banner/banner-left.png`}
    />
    <Image
      src={`${process.env.PUBLIC_URL}/images/hero-banner/banner-center.png`}
    >
      <Logo />
    </Image>
    <Image
      src={`${process.env.PUBLIC_URL}/images/hero-banner/banner-right.png`}
    />
  </Container>
)

export default Banner
