import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { DrinksSort, RootState } from '@/types/type'

import { InitialState } from './type'

const initialState: InitialState = {
  page: 1,
  sort: {
    sortBy: 'name',
    ascending: true,
  },
}

const paramsSlice = createSlice({
  name: 'drinksParams',
  initialState,
  reducers: {
    setPage(state, { payload }: PayloadAction<number>) {
      state.page = payload
    },
    setSort(state, { payload }: PayloadAction<DrinksSort>) {
      state.sort = payload
    },
    clearParams() {
      return initialState
    },
  },
})

export const { setPage, setSort, clearParams } = paramsSlice.actions
export const drinksParamsReducer = paramsSlice.reducer

export const getParams = (store: RootState) => store.drinksParams
