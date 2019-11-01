import React from 'react'
import styled from 'styled-components'
import Container from '../container'
import config from '../../config'

const Wrapper = styled.div`
  background-color: ${config.color.primary};
`

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Item = styled.div`
  width: 25%;
  padding: 0.5rem 15px;
  box-sizing: border-box;

  @media (max-width: ${config.breakpoints.medium}px) {
    width: 33.333333%;
  }

  @media (max-width: ${config.breakpoints.small}px) {
    width: 100%;
  }
`

const CopyRightWrapper = styled(Item)`
  @media (max-width: ${config.breakpoints.medium}px) {
    width: 100%;
  }
`

const Text = styled.a.attrs({
  target: '_blank',
})`
  color: white;
  font-family: 'TATSanaChonBold', sans-serif;
  font-size: 12px;
  font-weight: bold;
  box-sizing: border-box;
`

const LinkFooter = ({ items = [], copyright }) => (
  <Wrapper>
    <Container>
      <Content>
        <CopyRightWrapper>
          <Text>Copyright © {copyright}</Text>
        </CopyRightWrapper>
        {items.map(({ title, href }, index) => (
          <Item key={index}>
            <Text href={href}>{title}</Text>
          </Item>
        ))}
      </Content>
    </Container>
  </Wrapper>
)

export default LinkFooter
