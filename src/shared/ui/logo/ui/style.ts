import styled, { css } from 'styled-components'

interface Props {
  $isResponsive?: boolean
}

export const Container = styled.div<Props>`
  display: flex;
  gap: 8px;
  align-items: center;
  color: var(--c-stone-700);

  ${({ $isResponsive }) =>
    $isResponsive &&
    css`
      @media (max-width: 1023px) {
        gap: 0px;
      }
    `}
`

export const TextFirst = styled.span<Props>`
  font-size: 15px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 500;

  ${({ $isResponsive }) =>
    $isResponsive &&
    css`
      @media (max-width: 1023px) {
        display: none;
      }
    `}
`

export const TextLast = styled.span<Props>`
  font-size: 13px;
  font-style: italic;
  letter-spacing: 1px;

  ${({ $isResponsive }) =>
    $isResponsive &&
    css`
      @media (max-width: 1023px) {
        display: none;
      }
    `}
`
