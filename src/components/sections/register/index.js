import React from 'react'
import styled from 'styled-components'
import config from '../../../config'

const Wrapper = styled.div`
  font-weight: bold;
  text-align: center;
  padding: 26px 0;
  z-index: 99;
`

const DurationTitle = styled.p`
  margin: 0;
`

const Duration = styled.p`
  color: ${config.color.secondary};
  font-size: 48px;
  margin: -10px 0 0;

  @media (max-width: ${config.breakpoints.medium}px) {
    font-size: 36px;
  }

  @media (max-width: ${config.breakpoints.small}px) {
    font-size: 30px;
  }
`

const Link = styled.a.attrs({
  target: '_blank',
})`
  width: fit-content;
  max-width: 100%;
  margin: auto;
  padding: 10px 15px;
  display: block;
`

const LinkLabel = styled.div.attrs(props => ({
  dangerouslySetInnerHTML: { __html: props.label },
}))`
  color: white;
  background-color: ${config.color.primary};
  font-size: 24px;
  font-weight: bold;
  padding: 10px 50px;
  border-radius: 5px;
  box-shadow: 0 15px 30px 0 rgba(28, 78, 132, 0.4);

  &:hover {
    background-color: ${config.color.tertiary};
  }

  &:after {
    content: '';
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    position: absolute;
    left: 0;
    right: 0;
    z-index: -1;

    @media (max-width: ${config.breakpoints.small}px) {
      display: none;
    }
  }

  @media (max-width: ${config.breakpoints.medium}px) {
    font-size: 20px;
    padding: 20px;
  }

  @media (max-width: ${config.breakpoints.small}px) {
    font-size: 18px;
    padding: 10px;
  }
`

const Register = ({ duration, link = {} }) => (
  <Wrapper>
    <DurationTitle>ตั้งแต่วันที่</DurationTitle>
    <Duration>{duration}</Duration>
    <Link href={link.href}>
      <LinkLabel label={link.label} />
    </Link>
  </Wrapper>
)

export default Register
