import { FC } from 'react'

import { Icon } from '@/shared/ui/icon'

import { iconStyles } from './consts/iconStyles'
import * as S from './style'
import { InputProps } from './type'

export const Input: FC<InputProps> = ({ value, setValue }) => {
  return (
    <S.Container>
      <S.IconWrapper>
        <Icon name="IconSearch" styles={iconStyles} />
      </S.IconWrapper>
      <S.Input
        type="text"
        placeholder="Поиск..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </S.Container>
  )
}
