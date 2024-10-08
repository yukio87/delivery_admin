import styled, { css } from 'styled-components'

import { LabelProps } from './type'

export const Input = styled.input`
  display: none;
`

export const Label = styled.label<LabelProps>`
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 10px;
  line-height: 12px;
  color: var(--c-gray-600);
  letter-spacing: -0.2px;

  span:first-child {
    overflow: hidden;
    flex-grow: 1;
    padding: 8px 13px;
    text-overflow: ellipsis;
    white-space: nowrap;
    border-right: none;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  span:last-child {
    padding: 8px 16px;
    background-color: var(--c-gray-200);
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  ${({ $isError }) =>
    $isError === false &&
    css`
      span:first-child {
        border: 1px solid var(--c-gray-400);
        border-right: none;
      }

      span:last-child {
        border: 1px solid var(--c-gray-400);
      }
    `}

  ${({ $isError }) =>
    $isError === true &&
    css`
      span:first-child {
        border: 1px solid var(--c-red-400);
        border-right: none;
        box-shadow: 0 0 3px 1px var(--c-red-100);
      }

      span:last-child {
        border: 1px solid var(--c-red-400);
      }
    `}
`
