import styled, { css } from 'styled-components'

export const Heading = styled.h1`
  ${({ as }) =>
    as === 'h1' &&
    css`
      color: var(--c-gray-600);
      font-size: 29px;
      font-weight: 400;
      line-height: 33px;
      letter-spacing: -0.75px;
    `}

  ${({ as }) =>
    as === 'h3' &&
    css`
      font-size: 17.5px;
      font-weight: 500;
      line-height: 20px;
      color: var(--c-gray-600);
    `}

    ${({ as }) =>
    as === 'h4' &&
    css`
      font-size: 13px;
      font-weight: 500;
      line-height: 15px;
      color: var(--c-gray-400);
    `}
`
