import { notificationReducer } from '@/features/notifications'
import { createEditDrinkReducer } from '@/pages/create-edit-drink-page'
import { api } from '@/shared/api/services/AuthService/AuthService'
import { drinksParamsReducer, drinksSortReducer } from '@/widgets/drinks'
import { ordersFilterReducer, ordersParamsReducer } from '@/widgets/orders'

import { deviceReducer } from './slice'

export interface RootState {
  device: ReturnType<typeof deviceReducer>
  notifications: ReturnType<typeof notificationReducer>
  ordersParams: ReturnType<typeof ordersParamsReducer>
  ordersFilter: ReturnType<typeof ordersFilterReducer>
  drinksParams: ReturnType<typeof drinksParamsReducer>
  drinksSort: ReturnType<typeof drinksSortReducer>
  createEditDrink: ReturnType<typeof createEditDrinkReducer>
  [api.reducerPath]: ReturnType<typeof api.reducer>
}
