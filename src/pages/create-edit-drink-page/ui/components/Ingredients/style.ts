import styled from 'styled-components'

export const Container = styled.div`
  padding: 22px 22px 45px;
`

export const H4Wrapper = styled.div`
  h4 {
    margin-bottom: 13.5px;
  }
`

export const Textarea = styled.textarea`
  resize: none;
  display: block;
  width: 100%;
  height: 86px;
  margin-bottom: 4.5px;
  padding: 0;
  font-size: 13.5px;
  line-height: 19px;
  color: var(--c-gray-700);
  letter-spacing: -0.4px;
  border: none;

  &:focus {
    outline: none;
  }

  &:not([rows]) {
    min-height: 86.5px;
  }
`
