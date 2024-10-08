import styled from 'styled-components'

export const MainHeader = styled.header`
  display: flex;
  justify-content: space-between;
  gap: 15px;
  padding: 15px 21.5px;

  @media (max-width: 767px) {
    flex-direction: column;
    gap: 8px;
    align-items: center;
    padding: 14px;
  }
`
