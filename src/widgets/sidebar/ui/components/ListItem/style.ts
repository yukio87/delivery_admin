import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const StyledNavLink = styled(NavLink)`
  cursor: pointer;
  display: flex;
  gap: 11px;
  align-items: center;
  height: 57.5px;
  padding: 0 26.5px;
  border-bottom: 1px solid var(--c-gray-200);
  transition: all 0.1s linear;

  &:hover,
  &.active {
    background-color: var(--c-gray-100);
  }

  &.active {
    span {
      color: var(--c-sky-600);
    }
  }

  @media (max-width: 1023px) {
    justify-content: center;
    height: 56px;
    padding: 0;
  }

  @media (max-width: 767px) {
    height: 44px;
  }
`

export const Text = styled.span`
  font-size: 15px;
  line-height: 17.25px;
  color: var(--c-gray-600);
  letter-spacing: -0.23px;

  @media (max-width: 1023px) {
    display: none;
  }
`
