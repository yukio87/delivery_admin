import { FC } from 'react'

import { Button } from '../../button'
import { ModalLoader } from '../../modal-loader'
import { getErrorMessage } from '../lib/helpers'
import { Container, TextWrapper } from './style'
import { ErrorResponseProps } from './type'

export const ErrorResponse: FC<ErrorResponseProps> = ({
  error,
  refetch,
  isFetching,
}) => {
  if (isFetching) return <ModalLoader />

  return (
    <Container role="alert">
      <TextWrapper>
        <p>{getErrorMessage(error)}</p>
        <p>Что то пошло не так</p>
        <p>Попробуйте получить данные снова</p>
      </TextWrapper>
      <Button onClick={refetch}>Получить</Button>
    </Container>
  )
}
