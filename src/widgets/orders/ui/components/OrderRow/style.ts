import styled, { css } from 'styled-components'

import { RowProps } from './type'

export const Row = styled.div<RowProps>`
  display: flex;
  flex-direction: column;
  gap: 4px;

  ${({ $withScroll }) =>
    $withScroll &&
    css`
      height: 100%;
      overflow: scroll;

      &::-webkit-scrollbar {
        width: 6px;
      }

      &::-webkit-scrollbar-track {
        background-color: #fff;
      }

      &::-webkit-scrollbar-thumb {
        cursor: pointer;
        background-color: var(--c-gray-300);
      }

      &::-webkit-scrollbar-thumb:hover {
        background-color: var(--c-gray-400);
      }
    `}

  @media (max-width: 767px) {
    text-align: center;
    gap: 3px;
  }
`

Row.defaultProps = {
  $withScroll: false,
}

export const Container = styled.div`
  cursor: default;
  display: grid;
  grid-template-columns: 0.5fr 1fr 1.75fr 1fr 1fr 1fr 0.5fr;
  grid-template-rows: 110px;
  gap: 4px;
  font-size: 13px;
  line-height: 15.25px;
  color: var(--c-gray-500);
  letter-spacing: -0.4px;

  @media (max-width: 1439px) {
    gap: 8px;
  }

  @media (max-width: 1150px) {
    grid-template-columns: 0.65fr 1fr 1.25fr 1.25fr 1fr 1fr 0.5fr;
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    gap: 14px;
    justify-items: center;
    padding: 16px 0;
    border-bottom: 1px solid var(--c-gray-200);

    &:first-child {
      padding-top: 0;
    }

    &:last-child {
      padding-bottom: 0;
      border: none;
    }
  }
`

export const BlackText = styled.span`
  color: var(--c-gray-900);
`

export const ButtonWrapper = styled.div`
  button {
    width: 100%;
    height: max-content;
  }
`

export const NumOrder = styled.span`
  font-size: 24px;
  line-height: 27px;
  color: var(--c-orange-300);
  letter-spacing: -0.75px;

  @media (max-width: 767px) {
    font-size: 18px;
  }
`
