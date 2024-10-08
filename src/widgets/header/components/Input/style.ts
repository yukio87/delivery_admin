import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
`
export const IconWrapper = styled.div`
  position: absolute;
  top: 25px;
  left: 28px;

  @media (max-width: 1023px) {
    top: 19px;
    left: 28px;
  }

  @media (max-width: 767px) {
    top: 13px;
    left: 8px;
  }
`
export const Input = styled.input`
  width: 100%;
  padding: 26px 50px;
  font-size: 13px;
  line-height: 15px;
  color: var(--c-gray-900);
  border: none;

  &::placeholder {
    color: var(--c-gray-500);
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 1023px) {
    padding: 20px 50px;
  }

  @media (max-width: 767px) {
    padding: 14px 28px;
  }
`
