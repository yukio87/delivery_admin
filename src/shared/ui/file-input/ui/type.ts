import { FieldValues, UseFormRegister } from 'react-hook-form'

export interface FileInputProps {
  register?: UseFormRegister<FieldValues>
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  label: string
  isError?: boolean
  accept?: string
}

export interface LabelProps {
  $isError: boolean
}
