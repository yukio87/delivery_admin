import styled from 'styled-components'

export const Container = styled.div`
  width: 217.5px;

  .dropdown {
    width: 100%;
    height: 100%;
  }

  .dropdown-toggle {
    &::after {
      display: none;
    }
  }

  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 0;
    background-color: #fff;
    border: none;
    border-radius: 0;
    box-shadow: 1px 0 var(--c-gray-200) inset;

    &:focus {
      background-color: #fff;
    }

    &:hover {
      background-color: #fff;
    }
  }

  .dropdown-menu {
    transform: translateY(66.95px) !important;
    min-width: 100%;
    border-color: var(--c-gray-200);
    border-radius: 0;

    @media (max-width: 1023px) {
      transform: translateY(54.95px) !important;
    }

    @media (max-width: 767px) {
      transform: translateY(42.94px) !important;
    }
  }

  .dropdown-item {
    font-size: 15px;
    line-height: 17.25px;
    color: var(--c-gray-500);
    letter-spacing: -0.5px;

    &:hover {
      background-color: var(--c-gray-100);
    }
  }

  @media (max-width: 767px) {
    width: 120px;
  }
`

export const Box = styled.div`
  display: grid;
  grid-template-columns: auto auto 1fr;
  gap: 14px;
  align-items: center;
  width: 168.5px;

  @media (max-width: 767px) {
    gap: 8px;
    width: 100px;
  }
`

export const Img = styled.img`
  overflow: hidden;
  width: 40px;
  height: 40px;
  border-radius: 100%;

  @media (max-width: 767px) {
    width: 34px;
    height: 34px;
  }
`

export const Username = styled.span`
  font-size: 15px;
  font-weight: 400;
  line-height: 17.25px;
  color: var(--c-gray-500);
  letter-spacing: -0.5px;
`

export const IconWrapper = styled.div`
  justify-self: end;
`
