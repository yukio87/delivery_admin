import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import { StyledNavLinkProps } from './type'

export const StyledNavLink = styled(NavLink)<StyledNavLinkProps>`
  font-size: ${({ fontSize }) => fontSize};
  line-height: 12px;
  color: var(--c-sky-600);
  text-decoration: none;

  &:hover,
  &:focus {
    filter: brightness(90%);
  }

  &:active {
    filter: brightness(80%);
  }
`

StyledNavLink.defaultProps = {
  fontSize: '11.5px',
}
