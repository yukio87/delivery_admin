export interface InputPasswordProps {
  passwordValue: string
  handlePassword: (event: React.ChangeEvent<HTMLInputElement>) => void
  label: string
  id: string
  placeholder: string
}
