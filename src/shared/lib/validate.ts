import toast from 'react-hot-toast'

export const getIsValidEmail = (email: string) => {
  if (!email) {
    toast.error('Заполните поле "Почта"')
    return false
  }
  if (email.length >= 40) {
    toast.error('Максимальное кол-во символов в поле "Почта" равно 40')
    return false
  }
  if (email.length < 6) {
    toast.error('Минимальное кол-во символов в поле "Почта" равно 6')
    return false
  }
  return true
}

export const getIsValidPassword = (password: string) => {
  if (!password) {
    toast.error('Заполните поле "Пароль"')
    return false
  }
  if (password.length >= 40) {
    toast.error('Максимальное кол-во символов в поле "Пароль" равно 40')
    return false
  }
  return true
}

export const getIsValidConfPassword = (
  password: string,
  confPassword: string,
) => {
  if (password !== confPassword) {
    toast.error('Пароли не совподают')
    return false
  }
  return true
}
