import styled from 'styled-components'

export const H1Wrapper = styled.div`
  h1 {
    margin-bottom: 28px;

    @media (max-width: 1225px) {
      margin-bottom: 20px;
    }

    @media (max-width: 767px) {
      margin-bottom: 14px;
      font-size: 23px;
    }
  }

  @media (max-width: 767px) {
    align-self: center;
  }
`
