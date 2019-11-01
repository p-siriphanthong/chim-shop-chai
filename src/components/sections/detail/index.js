import React from 'react'
import styled from 'styled-components'
import Container from '../../container'
import config from '../../../config'

const Wrapper = styled.div`
  padding: 30px 0;

  @media (min-width: ${config.breakpoints.medium}px) {
    width: 83.333333%;
  }
`

const Title = styled.p.attrs(props => ({
  dangerouslySetInnerHTML: { __html: props.html },
}))`
  color: ${config.color.secondary};
  font-size: 36px;
  font-family: 'TATSanaChonBold', sans-serif;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 1.5rem;

  @media (max-width: ${config.breakpoints.medium}px) {
    font-size: 24px;
    line-height: 1.3;
  }

  @media (max-width: ${config.breakpoints.small}px) {
    font-size: 24px;
    line-height: 1.6;
  }
`

const ConditionTitle = styled.p`
  font-size: 18px;
  font-family: 'TATSanaChonBold', sans-serif;
  font-weight: bold;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
`

const Text = styled.p.attrs(props => ({
  dangerouslySetInnerHTML: { __html: props.html },
}))`
  font-size: 18px;
  width: 100%;
  margin: 0;
`

const Detail = ({ title, description, conditionTitle, condition }) => (
  <Container>
    <Wrapper>
      <Title html={title} />
      <Text html={description} />
      <ConditionTitle>{conditionTitle}</ConditionTitle>
      <Text html={condition} />
    </Wrapper>
  </Container>
)

export default Detail
