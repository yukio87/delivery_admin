import { store } from '@/app/store/store'

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export interface Drink {
  id: number
  imageUrl: string
  ingredients: string
  name: string
  unitPrice: number
}

export interface Order {
  address: string
  cart: DrinkFromOrder[]
  customer: string
  estimatedDelivery: string
  numOrder: string
  phone: string
  priceDelivery: number
  priceOrder: number
}

export interface DrinksSort {
  sortBy: 'name' | 'unitPrice'
  ascending: boolean
}

interface DrinkFromOrder {
  drinkId: number
  name: string
  quantity: number
  unitPrice: number
  totalPrice: number
}
