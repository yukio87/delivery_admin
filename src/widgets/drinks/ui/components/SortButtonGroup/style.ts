import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  gap: 15px;

  @media (max-width: 767px) {
    flex-direction: column;
    gap: 8px;
    width: max-content;
  }
`
