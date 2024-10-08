import styled from 'styled-components'

export const Form = styled.form`
  display: grid;
  grid-template-columns: max-content auto;
  grid-template-rows: max-content auto;
  gap: 28px;

  @media (max-width: 1225px) {
    gap: 20px;
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    grid-template-rows: max-content max-content max-content;
    gap: 14px;
  }
`

export const H1Wrapper = styled.div`
  grid-column: span 2;

  h1 {
    @media (max-width: 767px) {
      font-size: 23px;
      text-align: center;
    }
  }

  @media (max-width: 767px) {
    grid-column: span 1;
  }
`

export const PictureBox = styled.div`
  cursor: default;
  width: 335px;
  height: max-content;
  background-color: #fff;
  border-radius: 9px;
  box-shadow: 3px 3px 10px var(--c-gray-200);

  @media (max-width: 807px) {
    width: 295px;
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`

export const Box = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  row-gap: 38px;
  min-height: 100%;
  padding: 18px;
  background-color: #fff;
  border-radius: 9px;
  box-shadow: 3px 3px 10px var(--c-gray-200);
`

export const H3Wrapper = styled.div`
  @media (max-width: 767px) {
    justify-self: center;
  }
`
