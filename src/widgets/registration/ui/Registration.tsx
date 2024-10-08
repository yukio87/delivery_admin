import { AuthError } from '@supabase/supabase-js'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

import { useSignUpMutation } from '@/shared/api/services/AuthService/AuthService'
import { routesPaths } from '@/shared/consts/routesPaths'
import {
  getIsValidConfPassword,
  getIsValidEmail,
  getIsValidPassword,
} from '@/shared/lib/validate'
import { Button } from '@/shared/ui/button'
import { Heading } from '@/shared/ui/heading'
import { Input } from '@/shared/ui/input'
import { InputPassword } from '@/shared/ui/input-password'
import { Logo } from '@/shared/ui/logo'
import { ModalLoader } from '@/shared/ui/modal-loader'
import { Row } from '@/shared/ui/row'
import { StyledNavLink } from '@/shared/ui/styled-nav-link'

import * as S from './style'

export const Registration = () => {
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')
  const [confPasswordValue, setConfPasswordValue] = useState('')
  const navigate = useNavigate()
  const [signUp, { isLoading }] = useSignUpMutation()

  const { pathLogin } = routesPaths

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmailValue(e.target.value)

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPasswordValue(e.target.value)

  const handleConfPassword = (e: React.ChangeEvent<HTMLInputElement>) =>
    setConfPasswordValue(e.target.value)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const isValidEmail = getIsValidEmail(emailValue)
    const isValidPassword = getIsValidPassword(passwordValue)
    const IsValidConfPassword = getIsValidConfPassword(
      passwordValue,
      confPasswordValue,
    )

    if (isValidEmail && isValidPassword && IsValidConfPassword) {
      const { error } = await signUp({
        email: emailValue.toLowerCase().trim(),
        password: passwordValue,
      })

      if (!error) {
        navigate(pathLogin)
        toast.success('Регистрация успешно пройдена, проверьте почту')
      } else {
        setEmailValue('')
        setPasswordValue('')
        setConfPasswordValue('')
        toast.error((error as AuthError).message)
      }
    }
  }

  if (isLoading) return <ModalLoader />

  return (
    <Row $gap="16.5px" $alignItems="center">
      <Logo />
      <S.Content>
        <Heading as="h3">Регистрация</Heading>
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
          <InputPassword
            handlePassword={handleConfPassword}
            passwordValue={confPasswordValue}
            label="Подтвердите пароль"
            id="passwordConf"
            placeholder="Подтвердите пароль"
          />
          <Row type="horizontal" $alignItems="center">
            <StyledNavLink to={pathLogin}>Вход</StyledNavLink>
            <Button type="submit">Регистрация</Button>
          </Row>
        </Row>
      </S.Content>
    </Row>
  )
}
