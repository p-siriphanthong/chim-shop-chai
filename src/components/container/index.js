import styled from 'styled-components'
import config from '../../config'

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
  box-sizing: border-box;

  @media (min-width: ${config.breakpoints.small}px) {
    padding: 0 15px;
    max-width: 540px;
  }

  @media (min-width: ${config.breakpoints.medium}px) {
    max-width: 720px;
  }

  @media (min-width: ${config.breakpoints.large}px) {
    max-width: 960px;
  }

  @media (min-width: ${config.breakpoints.extra}px) {
    max-width: 1140px;
  }
`

export default Container
