import { useSelector } from 'react-redux'

import { Icon } from '@/shared/ui/icon'

import { iconStyles } from '../consts/iconStyles'
import { getNotifications } from '../model/slice'
import * as S from './style'

export const Notifications = () => {
  const notifications = useSelector(getNotifications)

  const handleClick = () => {}

  return (
    <S.Container onClick={handleClick} aria-hidden={true}>
      <S.IconWrapper>
        <Icon name="IconBell" styles={iconStyles} />
        {notifications.length > 0 && (
          <S.Circle>
            <S.Amount>{notifications.length}</S.Amount>
          </S.Circle>
        )}
      </S.IconWrapper>
    </S.Container>
  )
}
