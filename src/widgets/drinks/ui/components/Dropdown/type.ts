import { DrinksSort } from '@/types/type'

export interface DropdownProps {
  selectedSortedBy: string
  setSelectedSortedBy: React.Dispatch<React.SetStateAction<string>>
}

export interface DropdownItem {
  label: string
  sortBy: DrinksSort['sortBy']
  ascending: boolean
}
