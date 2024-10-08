import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  gap: 35px;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: var(--c-gray-50);
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;

  p:nth-child(1) {
    font-size: 75px;
    font-weight: 500;
    line-height: 87.89px;
    color: rgb(202 206 219 / 100%);
    letter-spacing: -5.77px;
  }

  p:nth-child(2) {
    font-family: Helvetica, sans-serif;
    font-size: 50px;
    line-height: 57.5px;
    color: var(--c-text-primary);
    letter-spacing: -2.5px;
  }

  p:nth-child(3) {
    font-family: Helvetica, sans-serif;
    font-size: 20px;
    line-height: 23px;
    color: rgb(129 142 163 / 100%);
    letter-spacing: -0.5px;
  }
`
