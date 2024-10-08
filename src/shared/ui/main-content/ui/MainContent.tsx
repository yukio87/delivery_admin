import styled from 'styled-components'

export const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  gap: 17px;
  padding: 13px 21.5px;
  border-top: 1px solid var(--c-gray-200);
  border-bottom: 1px solid var(--c-gray-200);

  @media (max-width: 1225px) {
    gap: 18px;
  }

  @media (max-width: 767px) {
    gap: 0;
    padding: 14px;
  }
`
