import DropdownB from 'react-bootstrap/Dropdown'
import styled from 'styled-components'

export const StyledDropdownB = styled(DropdownB)`
  .btn {
    padding: 8px 12px;
    font-size: 11px;
    font-weight: 400;
    line-height: 12.5px;
    color: var(--c-gray-900);
    background-color: #fff;
    border: 1px solid var(--c-gray-400);
    border-radius: 4.5px;

    span {
      color: var(--c-gray-400);
    }

    &:focus {
      color: var(--c-gray-900);
      background-color: #fff;
      border: 1px solid var(--c-gray-400);
    }
  }

  .dropdown-item {
    font-size: 11px;
    font-weight: 400;
    line-height: 12.5px;

    &:focus {
      color: var(--c-gray-900);
      background-color: var(--c-orange-100);
    }
  }
`
