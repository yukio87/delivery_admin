import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { DrinksSort, RootState } from '@/types/type'

const initialState: DrinksSort = {
  sortBy: null,
  ascending: true,
}

const sortSlice = createSlice({
  name: 'drinks/sort',
  initialState,
  reducers: {
    setSort(_, { payload }: PayloadAction<DrinksSort>) {
      return payload
    },
    clearSort() {
      return initialState
    },
  },
})

export const { setSort, clearSort } = sortSlice.actions
export const drinksSortReducer = sortSlice.reducer

export const getSortedBy = (store: RootState) => store.drinksSort
export const getIsSorted = (store: RootState) => !!store.drinksSort.sortBy
