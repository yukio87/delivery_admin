import { FieldErrors, UseFormRegister } from 'react-hook-form'

import { DrinkCardInputs } from '../../type'

export interface InputGroupProps {
  errors: FieldErrors<DrinkCardInputs>
  register: UseFormRegister<DrinkCardInputs>
}
