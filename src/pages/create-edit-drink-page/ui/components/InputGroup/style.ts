import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 320px);
  gap: 28px 21px;
  align-content: start;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    row-gap: 22px;
  }
`
