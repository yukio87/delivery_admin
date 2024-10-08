import { FieldErrors, UseFormRegister } from 'react-hook-form'

import { Drink } from '@/types/type'

import { DrinkCardInputs } from '../../type'

export interface ImageSelectProps {
  drink: Drink
  isEditSession: boolean
  register: UseFormRegister<DrinkCardInputs>
  errors: FieldErrors<DrinkCardInputs>
}
