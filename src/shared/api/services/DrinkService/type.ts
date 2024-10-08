import { Drink } from '@/types/type'

interface Sort {
  sortBy: 'name' | 'unitPrice'
  ascending: boolean
}

export interface GetDrinksResponse {
  data: Drink[]
  count: number
}

export interface getDrinksArg {
  page: number
  sort: Sort
}

export interface CreateDrinkArg extends Omit<Drink, 'id' | 'imageUrl'> {
  imageUrl: File
}

export interface EditDrinkArg {
  id: number
  body: Omit<Drink, 'id' | 'imageUrl'> & {
    imageUrl: FileList | string
  }
}
