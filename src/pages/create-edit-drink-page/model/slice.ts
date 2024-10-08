import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Drink, RootState } from '@/types/type'

const initialState: Omit<Drink, 'id'> = {
  imageUrl: '',
  ingredients: '',
  name: '',
  unitPrice: 0,
}

const createEditDrinkSlice = createSlice({
  name: 'createEditDrink',
  initialState,
  reducers: {
    setPrefilledValues(_, { payload }: PayloadAction<Omit<Drink, 'id'>>) {
      return payload
    },
  },
})

export const { setPrefilledValues } = createEditDrinkSlice.actions
export const createEditDrinkReducer = createEditDrinkSlice.reducer

export const getPrefilledValues = (store: RootState) => store.createEditDrink
