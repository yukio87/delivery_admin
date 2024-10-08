import { FC } from 'react'

import { ErrorText } from '@/shared/ui/error-text'
import { Heading } from '@/shared/ui/heading'

import * as S from './style'
import { IngredientsProps } from './type'

export const Ingredients: FC<IngredientsProps> = ({ register, errors }) => {
  return (
    <S.Container>
      <S.H4Wrapper>
        <Heading as="h4">Ингредиенты</Heading>
      </S.H4Wrapper>
      <S.Textarea
        maxLength={150}
        {...register('ingredients', {
          required: 'Поле обязательно к заполнению',
        })}
      />
      {errors.ingredients && (
        <ErrorText>{errors.ingredients.message}</ErrorText>
      )}
    </S.Container>
  )
}
