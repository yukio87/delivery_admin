import { DropdownItemList } from './type'

export const dropdownItemList: DropdownItemList = [
  {
    label: 'По названию A -> Z',
    sortBy: 'name',
    ascending: true,
  },
  {
    label: 'По названию Z -> A',
    sortBy: 'name',
    ascending: false,
  },
  {
    label: 'По возрастанию цены',
    sortBy: 'unitPrice',
    ascending: true,
  },
  {
    label: 'По убыванию цены',
    sortBy: 'unitPrice',
    ascending: false,
  },
]
