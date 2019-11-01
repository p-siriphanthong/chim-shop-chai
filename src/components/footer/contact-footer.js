import React from 'react'
import styled from 'styled-components'
import Container from '../container'
import config from '../../config'

const Wrapper = styled.div`
  background-color: #fafafa;
  padding: 30px 0;
`

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Item = styled.div`
  width: 25%;
  padding: 0 15px;
  box-sizing: border-box;

  @media (max-width: ${config.breakpoints.medium}px) {
    width: 33.333333%;
  }

  @media (max-width: ${config.breakpoints.small}px) {
    width: 100%;
  }
`

const LogoWrapper = styled(Item)`
  @media (max-width: ${config.breakpoints.medium}px) {
    width: 100%;
  }
`

const Logo = styled.img.attrs({
  src: process.env.PUBLIC_URL + '/images/logo.png',
})`
  width: 108px;
`

const Title = styled.p`
  color: ${config.color.secondary};
  font-weight: bold;
  margin-bottom: 0;
`

const Detail = styled.p.attrs(props => ({
  dangerouslySetInnerHTML: { __html: props.html },
}))`
  font-size: 14px;
  margin: 0;
`

const ContactFooter = ({ items = [] }) => (
  <Wrapper>
    <Container>
      <Content>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        {items.map(({ title, detail }, index) => (
          <Item key={index}>
            <Title>{title}</Title>
            <Detail html={detail} />
          </Item>
        ))}
      </Content>
    </Container>
  </Wrapper>
)

export default ContactFooter
