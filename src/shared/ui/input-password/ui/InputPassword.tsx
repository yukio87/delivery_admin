import { FC, useState } from 'react'

import { Icon } from '@/shared/ui/icon'
import { Input } from '@/shared/ui/input'

import { iconStyles } from '../consts/iconStyles'
import * as S from './style'
import { InputPasswordProps } from './type'

export const InputPassword: FC<InputPasswordProps> = ({
  handlePassword,
  passwordValue,
  label,
  id,
  placeholder,
}) => {
  const [showPassword, setShowPassword] = useState(false)

  const toggleShowPassword = () => setShowPassword((value) => !value)

  return (
    <S.Container>
      <S.IconWrapper onClick={toggleShowPassword} aria-hidden={true}>
        <Icon
          name={showPassword ? `IconEyeSlash` : 'IconEye'}
          styles={iconStyles}
        />
      </S.IconWrapper>
      <Input
        label={label}
        type={showPassword ? 'text' : 'password'}
        id={id}
        placeholder={placeholder}
        value={passwordValue}
        onChange={handlePassword}
      />
    </S.Container>
  )
}
