import { useGetAllDrinksQuery } from '@/shared/api/services/DrinkService/DrinkService'
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks/hooks'
import { ErrorResponse } from '@/shared/ui/error-response'
import { Icon } from '@/shared/ui/icon'
import { Loader } from '@/shared/ui/loader'
import { Drink } from '@/types/type'

import {
  getSelected,
  setSelectedDrink,
} from '../../../model/filterSlice/filterSlice'
import { iconStyles } from './consts/iconStyles'
import { IconWrapper, StyledTypeahead } from './style'

export const Input = () => {
  const dispatch = useAppDispatch()
  const { selectedDrink } = useAppSelector(getSelected)

  const { data: drinks, isFetching, error, refetch } = useGetAllDrinksQuery()

  const handleChangeDrink = (s: Drink[]) => dispatch(setSelectedDrink(s))

  if (error)
    return (
      <ErrorResponse error={error} refetch={refetch} isFetching={isFetching} />
    )

  return (
    <StyledTypeahead
      id="input-car"
      onChange={handleChangeDrink}
      options={drinks || []}
      labelKey="name"
      placeholder="Напиток"
      emptyLabel={
        isFetching ? (
          <Loader size="20px" animation="border" />
        ) : (
          'Совпадений не найдено'
        )
      }
      selected={selectedDrink}
    >
      <IconWrapper>
        <Icon name="IconDropdown1" styles={iconStyles} />
      </IconWrapper>
    </StyledTypeahead>
  )
}
