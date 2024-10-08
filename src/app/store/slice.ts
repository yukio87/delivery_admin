import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '@/types/type'

const initialState = {
  device: '',
}

const deviceSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    updateDevice(state, { payload }: PayloadAction<string>) {
      state.device = payload
    },
  },
})

export const { updateDevice } = deviceSlice.actions
export const deviceReducer = deviceSlice.reducer

export const getDevice = (store: RootState) => store.device.device
