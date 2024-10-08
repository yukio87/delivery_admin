import styled, { css } from 'styled-components'

interface InputProps {
  $isError: boolean
}

export const Label = styled.label`
  font-size: 10.5px;
  line-height: 12px;
  color: var(--c-gray-800);
  letter-spacing: -0.15px;
`

export const Input = styled.input<InputProps>`
  padding: 8px 11px;
  font-size: 11px;
  line-height: 12.5px;
  color: var(--c-gray-700);
  letter-spacing: -0.2px;
  border-radius: 4px;
  border: 1px solid var(--c-gray-400);

  &:focus {
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
    background-color: #fff;
  }

  ${({ $isError }) =>
    $isError === true &&
    css`
      border: 1px solid var(--c-red-400);
      box-shadow: 0 0 3px 1px var(--c-red-100);
    `}
`

Input.defaultProps = {
  $isError: false,
}
