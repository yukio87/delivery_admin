import { ORDERS_PER_PAGE } from '@/shared/consts/perPage'
import { getRangeByPage } from '@/shared/lib/pagination'
import { Order } from '@/types/type'

import { supabase } from '../../supabase'
import { api } from '../AuthService/AuthService'
import { GetOrdersArg, GetOrdersResponse } from './type'

const orderApi = api.injectEndpoints({
  endpoints: (build) => ({
    getOrders: build.query<GetOrdersResponse, GetOrdersArg>({
      queryFn: async ({ page, drinkId }) => {
        const range = getRangeByPage(page, ORDERS_PER_PAGE)

        const query = supabase
          .from('orders')
          .select('*', { count: 'exact' })
          .range(...range)

        const filter = drinkId
          ? query.filter('cart', 'cs', JSON.stringify([{ drinkId }]))
          : query

        const { data: orders, error, count } = await filter.returns<Order[]>()

        if (error) throw error

        return { data: { data: orders, count } }
      },
      providesTags: ['order'],
    }),
  }),
})

export const { useGetOrdersQuery } = orderApi
