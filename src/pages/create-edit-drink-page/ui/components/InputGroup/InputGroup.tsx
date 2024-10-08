import { FC } from 'react'

import { ErrorText } from '@/shared/ui/error-text'
import { Input } from '@/shared/ui/input'
import { Row } from '@/shared/ui/row'

import * as S from './style'
import { InputGroupProps } from './type'

export const InputGroup: FC<InputGroupProps> = ({ errors, register }) => {
  return (
    <S.Container>
      <Row $gap="4.5px" $alignItems="stretch">
        <Input
          id="name"
          label="Название"
          isError={!!errors.name}
          maxLength={150}
          {...register('name', {
            required: 'Поле обязательно к заполнению',
          })}
        />
        {errors.name && <ErrorText>{errors.name.message}</ErrorText>}
      </Row>
      <Row $gap="4.5px" $alignItems="stretch">
        <Input
          id="unitPrice"
          label="Цена"
          isError={!!errors.unitPrice}
          type="number"
          {...register('unitPrice', {
            required: 'Поле обязательно к заполнению',
            min: { value: 0, message: 'Некорректное значение' },
          })}
        />
        {errors.unitPrice && <ErrorText>{errors.unitPrice.message}</ErrorText>}
      </Row>
    </S.Container>
  )
}
