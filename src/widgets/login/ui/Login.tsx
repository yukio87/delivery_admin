import { AuthError } from '@supabase/supabase-js'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

import {
  api,
  useLoginMutation,
} from '@/shared/api/services/AuthService/AuthService'
import { routesPaths } from '@/shared/consts/routesPaths'
import { useAppDispatch } from '@/shared/lib/hooks/hooks'
import { getIsValidEmail, getIsValidPassword } from '@/shared/lib/validate'
import { Button } from '@/shared/ui/button'
import { Heading } from '@/shared/ui/heading'
import { Input } from '@/shared/ui/input'
import { InputPassword } from '@/shared/ui/input-password'
import { Logo } from '@/shared/ui/logo'
import { ModalLoader } from '@/shared/ui/modal-loader'
import { Row } from '@/shared/ui/row'
import { StyledNavLink } from '@/shared/ui/styled-nav-link'

import * as S from './style'

export const Login = () => {
  const [emailValue, setEmailValue] = useState('test@mail.com') // temp
  const [passwordValue, setPasswordValue] = useState('test') // temp
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [login, { isLoading }] = useLoginMutation()

  const { pathRegistration } = routesPaths

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const isValidEmail = getIsValidEmail(emailValue)
    const isValidPassword = getIsValidPassword(passwordValue)

    if (isValidEmail && isValidPassword) {
      const { error } = await login({
        email: emailValue.toLowerCase().trim(),
        password: passwordValue,
      })

      if (!error) {
        dispatch(api.util.invalidateTags(['user']))
        navigate('/')
      } else {
        setEmailValue('')
        setPasswordValue('')
        toast.error((error as AuthError).message)
      }
    }
  }

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmailValue(e.target.value)

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPasswordValue(e.target.value)

  if (isLoading) return <ModalLoader />

  return (
    <Row $gap="16.5px" $alignItems="center">
      <Logo />
      <S.Content>
        <Heading as="h3">Вход</Heading>
        <Row
          as="form"
          onSubmit={handleSubmit}
          $alignItems="stretch"
          $gap="15px"
          noValidate
        >
          <Input
            id="email"
            label="Почта"
            type="email"
            placeholder="Введите почту"
            value={emailValue}
            onChange={handleEmail}
          />
          <InputPassword
            handlePassword={handlePassword}
            passwordValue={passwordValue}
            label="Пароль"
            id="password"
            placeholder="Введите пароль"
          />
          <Row type="horizontal" $alignItems="center">
            <StyledNavLink to={pathRegistration}>Регистрация</StyledNavLink>
            <Button type="submit">Войти</Button>
          </Row>
        </Row>
      </S.Content>
    </Row>
  )
}
