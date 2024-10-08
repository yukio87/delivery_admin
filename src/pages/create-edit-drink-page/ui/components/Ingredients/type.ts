import { FieldErrors, UseFormRegister } from 'react-hook-form'

import { DrinkCardInputs } from '../../type'

export interface IngredientsProps {
  register: UseFormRegister<DrinkCardInputs>
  errors: FieldErrors<DrinkCardInputs>
}
