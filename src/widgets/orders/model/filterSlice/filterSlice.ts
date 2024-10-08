import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Drink, RootState } from '@/types/type'

import { InitialState } from './type'

const initialState: InitialState = {
  selectedDrink: [],
  selectedDrinkId: 0,
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSelectedDrink(state, { payload }: PayloadAction<Drink[]>) {
      state.selectedDrink = payload
      state.selectedDrinkId = payload[0]?.id
    },
    clearSelected() {
      return initialState
    },
  },
})

export const { setSelectedDrink, clearSelected } = filterSlice.actions
export const ordersFilterReducer = filterSlice.reducer

export const getSelected = (store: RootState) => store.ordersFilter
export const getIsFiltered = (store: RootState) =>
  !!store.ordersFilter.selectedDrinkId
