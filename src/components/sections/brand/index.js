import React from 'react'
import styled from 'styled-components'
import Container from '../../container'
import config from '../../../config'

const Wrapper = styled.div`
  padding-bottom: 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

const LinkWrapper = styled.div`
  @media (max-width: ${config.breakpoints.small}px) {
    width: 33.333333%;
    text-align: center;
  }
`

const Link = styled.a`
  width: fit-content;
  padding: 0 15px;
  display: inline-block;
  box-sizing: border-box;
`

const Image = styled.img`
  width: 102px;
  height: auto;
  transition: all 0.55s ease-in-out;
  transform: scale(1);

  &:hover {
    transform: scale(1.2);
  }

  @media (max-width: ${config.breakpoints.small}px) {
    width: 56px;
  }
`

const TAT = ({ items = [] }) => (
  <Container>
    <Wrapper>
      {items.map(({ image, link }, index) => (
        <LinkWrapper key={index}>
          <Link href={link} target='_blank'>
            <Image src={process.env.PUBLIC_URL + image} />
          </Link>
        </LinkWrapper>
      ))}
    </Wrapper>
  </Container>
)

export default TAT
