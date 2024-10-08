import { FC } from 'react'

import { Icon } from '@/shared/ui/icon'

import { activeIconStyles, iconStyles } from './consts/iconStyles'
import * as S from './style'
import { ListItemProps } from './type'

export const ListItem: FC<ListItemProps> = ({ item }) => {
  return (
    <S.StyledNavLink to={item.navPath}>
      {({ isActive }) => (
        <>
          <Icon
            name={item.navIconName}
            styles={isActive ? activeIconStyles : iconStyles}
          />
          <S.Text>{item.navText}</S.Text>
        </>
      )}
    </S.StyledNavLink>
  )
}
