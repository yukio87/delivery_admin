import { useNavigate } from 'react-router-dom'

import { Logo } from '@/shared/ui/logo'

import { navList } from '../consts/navList'
import { ListItem } from './components'
import * as S from './style'

export const Sidebar = () => {
  const navigate = useNavigate()

  const handleClick = () => navigate('/')

  return (
    <S.Sidebar>
      <S.LogoWrapper onClick={handleClick}>
        <Logo sizeSvg="39px" isResponsive={true} />
      </S.LogoWrapper>
      <S.List>
        {navList.map((item) => (
          <ListItem item={item} key={item.navText} />
        ))}
      </S.List>
    </S.Sidebar>
  )
}
