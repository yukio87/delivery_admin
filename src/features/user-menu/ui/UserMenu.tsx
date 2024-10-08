import Dropdown from 'react-bootstrap/Dropdown'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

import {
  api,
  useLogoutMutation,
} from '@/shared/api/services/AuthService/AuthService'
import { routesPaths } from '@/shared/consts/routesPaths'
import { useAppDispatch } from '@/shared/lib/hooks/hooks'
import { Icon } from '@/shared/ui/icon'
import { ModalLoader } from '@/shared/ui/modal-loader'

import userAvatar from '../assets/images/user-avatar.png'
import { iconStyles } from '../consts/iconStyles'
import * as S from './style'

export const UserMenu = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [logout, { isLoading }] = useLogoutMutation()

  const { pathLogin } = routesPaths

  const handleClick = async () => {
    const { error } = await logout(null)

    if (!error) {
      dispatch(api.util.resetApiState())
      dispatch({ type: 'reset' })
      navigate(pathLogin)
    } else {
      toast.error('Не удалось выйти из учетной записи...')
    }
  }

  if (isLoading) return <ModalLoader />

  return (
    <S.Container>
      <Dropdown>
        <Dropdown.Toggle>
          <S.Box>
            <S.Img src={userAvatar} alt="user-avatar" />
            <S.Username>Admin</S.Username>
            <S.IconWrapper>
              <Icon name="IconDropdown" styles={iconStyles} />
            </S.IconWrapper>
          </S.Box>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={handleClick}>Выйти</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </S.Container>
  )
}
