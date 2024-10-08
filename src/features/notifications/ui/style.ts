import styled from 'styled-components'

export const Container = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 69.5px;
  border-left: 1px solid var(--c-gray-200);

  @media (max-width: 767px) {
    width: 43px;
  }
`
export const IconWrapper = styled.div`
  position: relative;
`
export const Circle = styled.div`
  position: absolute;
  right: -8px;
  bottom: -5px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;
  background-color: var(--c-red-700);
  border-radius: 100%;
`
export const Amount = styled.span`
  font-size: 9px;
  font-weight: 600;
  line-height: 13.5px;
  color: #fff;
`
