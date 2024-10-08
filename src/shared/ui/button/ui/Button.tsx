import styled, { css } from 'styled-components'

import { ButtonProps } from './type'

const variations = {
  primary: css`
    background-color: var(--c-sky-600);
  `,
  secondary: css`
    background-color: var(--c-gray-400);
  `,
  danger: css`
    background-color: var(--c-red-700);
  `,
}

export const Button = styled.button<ButtonProps>`
  padding: 8px 16px;
  font-size: 11.5px;
  line-height: 13px;
  color: #fff;
  border: none;
  border-radius: 4.5px;
  transition: all 0.1s linear;

  &:hover,
  &:focus {
    filter: brightness(90%);
  }

  &:active {
    filter: brightness(80%);
  }

  ${({ $variation }) => variations[$variation]}
`
Button.defaultProps = {
  $variation: 'primary',
  type: 'button',
}
