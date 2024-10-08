import styled from 'styled-components'

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35.5px;
  width: 376.5px;
  padding: 20px 17px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: -2px 2px 15px var(--c-gray-200);

  @media (max-width: 410px) {
    width: 300px;
  }
`
