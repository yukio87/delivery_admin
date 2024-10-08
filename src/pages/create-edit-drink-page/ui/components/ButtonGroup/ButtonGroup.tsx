import { FC } from 'react'

import { Button } from '@/shared/ui/button'

import * as S from './style'
import { ButtonGroupProps } from './type'

export const ButtonGroup: FC<ButtonGroupProps> = ({
  isEditSession,
  handleDeleteDrink,
  handleReset,
}) => {
  return (
    <S.Container>
      <Button type="submit">{isEditSession ? 'Сохранить' : 'Создать'}</Button>
      <Button onClick={handleReset} $variation="secondary">
        Отменить
      </Button>
      {isEditSession && (
        <Button onClick={handleDeleteDrink} $variation="danger">
          Удалить
        </Button>
      )}
    </S.Container>
  )
}
