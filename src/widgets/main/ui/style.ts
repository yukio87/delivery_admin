import styled from 'styled-components'

export const Main = styled.main`
  scrollbar-width: none;
  overflow: scroll;
  display: grid;
  padding: 28px;
  background-color: var(--c-gray-50);
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 1225px) {
    padding: 20px;
  }

  @media (max-width: 767px) {
    padding: 14px;
  }
`
