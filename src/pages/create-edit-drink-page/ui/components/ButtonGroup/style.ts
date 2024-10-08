import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto 1fr;
  grid-template-rows: auto;
  column-gap: 12.5px;

  button:last-child {
    justify-self: flex-end;

    @media (max-width: 767px) {
      justify-self: stretch;
    }
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    row-gap: 8px;
  }
`
