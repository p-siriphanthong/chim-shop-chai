import React from 'react'
import styled from 'styled-components'
import Container from '../../container'
import config from '../../../config'

const Wrapper = styled.div`
  padding: 100px 0;
`

const Link = styled.a`
  width: fit-content;
  width: 33.333333%;
  padding: 0 15px;
  display: inline-block;
  box-sizing: border-box;

  @media (max-width: ${config.breakpoints.small}px) {
    width: 100%;
  }
`

const Image = styled.img`
  width: 100%;
  height: auto;
`

const TAT = ({ items = [] }) => (
  <Container>
    <Wrapper>
      {items.map(({ image, tel }, index) => (
        <Link key={index} href={`tel:${tel}`}>
          <Image src={image} />
        </Link>
      ))}
    </Wrapper>
  </Container>
)

export default TAT
