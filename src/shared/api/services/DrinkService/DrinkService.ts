import { DRINKS_PER_PAGE } from '@/shared/consts/perPage'
import { formatText } from '@/shared/lib/format'
import { getRangeByPage } from '@/shared/lib/pagination'
import { Drink } from '@/types/type'

import { supabase, supabaseUrl } from '../../supabase'
import { api } from '../AuthService/AuthService'
import {
  CreateDrinkArg,
  EditDrinkArg,
  getDrinksArg,
  GetDrinksResponse,
} from './type'

const drinkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllDrinks: build.query<Drink[], void>({
      queryFn: async () => {
        const { data, error } = await supabase
          .from('menu')
          .select('*')
          .returns<Drink[]>()
        if (error) throw error
        return { data }
      },
      providesTags: [{ type: 'drink', id: 'list' }],
    }),

    getDrinks: build.query<GetDrinksResponse, getDrinksArg>({
      queryFn: async ({ page, sort }) => {
        const range = getRangeByPage(page, DRINKS_PER_PAGE)
        const {
          data: drinks,
          error,
          count,
        } = await supabase
          .from('menu')
          .select('*', { count: 'exact' })
          .order(sort.sortBy, { ascending: sort.ascending })
          .range(range[0], range[1])
          .returns<Drink[]>()
        if (error) throw error
        return { data: { data: drinks, count } }
      },
      providesTags: (result) =>
        result.data
          ? [
              ...result.data.map(({ id }) => ({ type: 'drink' as const, id })),
              { type: 'drink', id: 'list' },
            ]
          : [{ type: 'drink', id: 'list' }],
    }),

    getDrink: build.query<Drink, number>({
      queryFn: async (id) => {
        const { data, error } = await supabase
          .from('menu')
          .select('*')
          .eq('id', id)
          .returns<Drink[]>()
          .single()
        if (error) throw error
        return { data }
      },
      providesTags: (_, __, arg) => [{ type: 'drink', id: arg }],
    }),

    deleteDrink: build.mutation<null, number>({
      queryFn: async (id) => {
        const { data, error } = await supabase
          .from('menu')
          .delete()
          .eq('id', id)
        if (error) throw error
        return { data }
      },
      invalidatesTags: [{ type: 'drink', id: 'list' }],
    }),

    createDrink: build.mutation<Drink[], CreateDrinkArg>({
      queryFn: async (newDrink) => {
        const imageName = `${Math.random()}-${
          newDrink.imageUrl.name
        }`.replaceAll('/', '')
        const imageUrl = `${supabaseUrl}/storage/v1/object/public/Cocktail-images/${imageName}`
        const { data, error } = await supabase
          .from('menu')
          .insert([
            {
              ingredients: formatText(newDrink.ingredients),
              name: formatText(newDrink.name),
              unitPrice: newDrink.unitPrice,
              imageUrl,
            },
          ])
          .select()
          .returns<Drink[]>()
        if (error) throw error

        const { error: storageError } = await supabase.storage
          .from('Cocktail-images')
          .upload(imageName, newDrink.imageUrl)
        if (storageError) {
          await supabase.from('menu').delete().eq('id', data[0].id)
          throw storageError
        }
        return { data }
      },
      invalidatesTags: [{ type: 'drink', id: 'list' }],
    }),

    editDrink: build.mutation<Drink[], EditDrinkArg>({
      queryFn: async ({ body, id }) => {
        if (typeof body.imageUrl === 'string') {
          const { data, error } = await supabase
            .from('menu')
            .update({
              ingredients: formatText(body.ingredients),
              name: formatText(body.name),
              unitPrice: body.unitPrice,
              imageUrl: body.imageUrl,
            })
            .eq('id', id)
            .select()
            .returns<Drink[]>()
          if (error) throw error
          return { data }
        }

        const imageName = `${Math.random()}-${
          body.imageUrl[0].name
        }`.replaceAll('/', '')
        const imageUrl = `${supabaseUrl}/storage/v1/object/public/Cocktail-images/${imageName}`
        const { data, error } = await supabase
          .from('menu')
          .update({
            ingredients: formatText(body.ingredients),
            name: formatText(body.name),
            unitPrice: body.unitPrice,
            imageUrl,
          })
          .eq('id', id)
          .select()
          .returns<Drink[]>()
        if (error) throw error

        const { error: storageError } = await supabase.storage
          .from('Cocktail-images')
          .upload(imageName, body.imageUrl[0])
        if (storageError) {
          await supabase.from('menu').delete().eq('id', data[0].id)
          throw storageError
        }
        return { data }
      },
      invalidatesTags: (_, __, arg) => [{ type: 'drink', id: arg.id }],
    }),
  }),
})

export const {
  useGetAllDrinksQuery,
  useGetDrinksQuery,
  useGetDrinkQuery,
  useCreateDrinkMutation,
  useDeleteDrinkMutation,
  useEditDrinkMutation,
} = drinkApi
