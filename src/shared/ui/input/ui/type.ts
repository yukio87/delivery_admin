import { FieldValues, UseFormRegister } from 'react-hook-form'

export interface InputProps {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  value?: string
  label?: string
  id?: string
  placeholder?: string
  defaultValue?: string
  register?: UseFormRegister<FieldValues>
  isError?: boolean
  maxLength?: number
  type?: 'text' | 'number' | 'email' | 'password'
}
