import { Order } from '@/types/type'

export interface GetOrdersResponse {
  data: Order[]
  count: number
}

export interface GetOrdersArg {
  page: number
  drinkId: number
}
