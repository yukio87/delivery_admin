import { Typeahead } from 'react-bootstrap-typeahead'
import styled from 'styled-components'

export const IconWrapper = styled.div`
  pointer-events: none;
  position: absolute;
  right: 4%;
  bottom: 8.5px;
`

export const StyledTypeahead = styled(Typeahead)`
  display: flex;
  gap: 15px;
  width: 110.5px;

  .rbt-input-main {
    overflow: hidden;
    padding: 8px 12px;
    font-size: 11px;
    font-weight: 400;
    line-height: 12.65px;
    color: var(--c-gray-900);
    text-overflow: ellipsis;
    white-space: nowrap;
    border: 1px solid var(--c-gray-400);
    border-radius: 4.5px;

    &::placeholder {
      font-size: 11px;
      line-height: 12.65px;
      color: var(--c-gray-400);
    }

    &:focus {
      border-color: var(--c-gray-400);
      box-shadow: none;
    }
  }

  .rbt-menu {
    min-width: 110.5px !important;
    font-size: 11px;
    border-color: var(--c-gray-400);

    @media (max-width: 830px) {
      min-width: 100px !important;
    }
  }

  .dropdown-item {
    overflow: hidden;
    color: var(--c-gray-900);
    text-overflow: ellipsis;
    white-space: nowrap;

    &:active {
      background-color: var(--c-gray-200);
    }
  }

  .rbt-highlight-text {
    background-color: var(--c-orange-100);
  }

  @media (max-width: 767px) {
    flex-direction: column;
    gap: 8px;
  }
`
