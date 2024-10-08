import styled from 'styled-components'

export const Footer = styled.footer`
  display: flex;
  flex-wrap: wrap;
  column-gap: 12px;
  align-items: center;
  justify-content: space-between;
  padding: 26px 27px;

  @media (max-width: 1023px) {
    padding: 18px 20px;
  }

  @media (max-width: 767px) {
    padding: 12px 20px;
  }
`

export const Link = styled.a`
  display: block;
  font-size: 14px;
  line-height: 16px;
  color: var(--c-sky-600);
  text-decoration: none;

  &:hover,
  &:focus {
    filter: brightness(90%);
  }

  &:active {
    filter: brightness(80%);
  }

  @media (max-width: 767px) {
    font-size: 13px;
  }
`

export const Copyright = styled.span`
  cursor: default;
  font-size: 14px;
  font-weight: 500;
  line-height: 16.5px;
  color: var(--c-gray-400);

  @media (max-width: 767px) {
    font-size: 13px;
  }
`
