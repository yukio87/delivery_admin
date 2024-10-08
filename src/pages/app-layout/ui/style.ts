import styled from 'styled-components'

export const AppLayout = styled.div`
  display: grid;
  grid-template-columns: 285px 1fr;
  grid-template-rows: auto 1fr auto;
  height: 100vh;

  @media (max-width: 1439px) {
    grid-template-columns: 240px 1fr;
  }

  @media (max-width: 1023px) {
    grid-template-columns: 56px 1fr;
  }

  @media (max-width: 767px) {
    grid-template-columns: 44px 1fr;
  }
`
