import styled from 'styled-components'

export const Container = styled.div`
  cursor: default;
  display: grid;
  grid-template-columns: max-content 1fr 1fr 0.5fr 0.25fr;
  align-items: center;
  justify-items: center;
  gap: 4px;
  font-size: 13px;
  line-height: 15.25px;
  color: var(--c-gray-500);
  letter-spacing: -0.4px;

  @media (max-width: 1439px) {
    gap: 8px;
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    gap: 14px;
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

export const ImgWrapper = styled.div`
  height: 120px;
  position: relative;
  transform-origin: top;

  &::before {
    content: '';
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: var(--c-orange-300);
    opacity: 0.25;
  }
`

export const Img = styled.img`
  width: 80px;
  height: 120px;
  object-fit: cover;
`

export const Name = styled.span`
  color: var(--c-orange-300);
  font-size: 26px;
  line-height: 27.5px;
  letter-spacing: -0.75px;

  @media (max-width: 767px) {
    font-size: 18px;
    text-align: center;
  }
`

export const Ingredients = styled.div`
  font-size: 14px;
  display: flex;
  flex-direction: column;
  justify-self: start;
  gap: 4px;

  span:last-child {
    color: var(--c-gray-900);
  }

  @media (max-width: 767px) {
    font-size: 13px;
    justify-self: center;
    text-align: center;
    gap: 3px;
  }
`

export const Price = styled.span`
  font-size: 26px;
  line-height: 27.5px;
  color: var(--c-gray-900);
  letter-spacing: -0.75px;

  @media (max-width: 767px) {
    font-size: 18px;
  }
`

export const ButtonWrapper = styled.div`
  justify-self: stretch;

  button {
    width: 100%;
    height: max-content;
  }

  @media (max-width: 767px) {
    justify-self: center;
  }
`
