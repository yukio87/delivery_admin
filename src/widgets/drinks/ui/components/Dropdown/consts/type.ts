import { DrinksSort } from '@/types/type'

interface Item {
  label: string
  sortBy: DrinksSort['sortBy']
  ascending: boolean
}

export type DropdownItemList = Item[]
