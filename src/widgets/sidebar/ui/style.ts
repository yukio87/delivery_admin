import styled from 'styled-components'

export const Sidebar = styled.aside`
  position: relative;
  z-index: 1;
  display: grid;
  grid-row: span 3;
  grid-template-rows: auto 1fr;
  box-shadow: 1px 0 10px var(--c-gray-200);
`

export const LogoWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 68.5px;
  padding: 0 53.5px;
  border-bottom: 1px solid var(--c-gray-200);

  @media (max-width: 1023px) {
    justify-content: center;
    height: 56px;
    padding: 0;
  }

  @media (max-width: 767px) {
    height: 44px;
  }
`
export const List = styled.div`
  scrollbar-width: none;

  overflow: scroll;
  display: flex;
  flex-direction: column;

  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  a {
    text-decoration: none;
  }
`
