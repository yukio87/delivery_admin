import { useState } from 'react'

import { Notifications } from '@/features/notifications'
import { UserMenu } from '@/features/user-menu'

import { Input } from '../components'
import * as S from './style'

export const Header = () => {
  const [inputValue, setInputValue] = useState('')

  return (
    <S.Header>
      <Input value={inputValue} setValue={setInputValue} />
      <Notifications />
      <UserMenu />
    </S.Header>
  )
}
