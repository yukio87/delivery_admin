import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '@/types/type'

import { InitialState } from './type'

const initialState: InitialState = {
  page: 1,
  drinkId: 0,
}

const paramsSlice = createSlice({
  name: 'ordersParams',
  initialState,
  reducers: {
    setPage(state, { payload }: PayloadAction<number>) {
      state.page = payload
    },
    setDrinkId(state, { payload }: PayloadAction<number>) {
      state.drinkId = payload
    },
    clearParams() {
      return initialState
    },
  },
})

export const { setPage, setDrinkId, clearParams } = paramsSlice.actions
export const ordersParamsReducer = paramsSlice.reducer

export const getOrdersParams = (store: RootState) => store.ordersParams
