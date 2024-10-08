import { forwardRef, RefObject } from 'react'

import { Row } from '../../row'
import * as S from './style'
import { InputProps } from './type'

export const Input = forwardRef(
  (props: InputProps, ref: RefObject<HTMLInputElement>) => {
    const { label, id, isError, ...rest } = props

    return (
      <Row $gap="4.5px" $alignItems="stretch">
        <S.Label htmlFor={id}>{label}</S.Label>
        <S.Input $isError={isError} id={id} ref={ref} {...rest} />
      </Row>
    )
  },
)
