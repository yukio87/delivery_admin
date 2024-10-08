import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  padding: 34.5px 22px 22px;
  border-bottom: 1px solid var(--c-gray-200);
`

export const Img = styled.img`
  width: 112px;
  height: 168px;
  object-fit: cover;
`

export const DrinkName = styled.span`
  font-size: 24.5px;
  line-height: 28px;
  color: var(--c-gray-600);
  text-align: center;
  letter-spacing: -0.6px;
`

export const FileInputWrapper = styled.div`
  width: 231.5px;

  @media (max-width: 348px) {
    width: 200px;
  }
`
