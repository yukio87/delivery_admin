import { AnyAction, combineReducers, configureStore } from '@reduxjs/toolkit'

import { notificationReducer } from '@/features/notifications'
import { createEditDrinkReducer } from '@/pages/create-edit-drink-page'
import { api } from '@/shared/api/services/AuthService/AuthService'
import { drinksParamsReducer, drinksSortReducer } from '@/widgets/drinks'
import { ordersFilterReducer, ordersParamsReducer } from '@/widgets/orders'

import { deviceReducer } from './slice'
import { RootState } from './type'

const appReducer = combineReducers({
  device: deviceReducer,
  notifications: notificationReducer,
  ordersParams: ordersParamsReducer,
  ordersFilter: ordersFilterReducer,
  drinksParams: drinksParamsReducer,
  drinksSort: drinksSortReducer,
  createEditDrink: createEditDrinkReducer,
  [api.reducerPath]: api.reducer,
})

const rootReducer = (state: RootState, action: AnyAction) => {
  if (action.type === 'reset') {
    return appReducer(undefined, action)
  }

  return appReducer(state, action)
}

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})
