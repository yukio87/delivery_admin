import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks/hooks'
import { Button } from '@/shared/ui/button'

import {
  clearSelected,
  getIsFiltered,
  getSelected,
} from '../../../model/filterSlice/filterSlice'
import {
  clearParams,
  setDrinkId,
  setPage,
} from '../../../model/paramsSlice/paramsSlice'
import { Container } from './style'

export const FilterButtonGroup = () => {
  const dispatch = useAppDispatch()
  const { selectedDrinkId } = useAppSelector(getSelected)
  const isFiltered = useAppSelector(getIsFiltered)

  const handleApply = () => {
    dispatch(setDrinkId(selectedDrinkId))
    dispatch(setPage(1))
  }

  const handleReset = () => {
    dispatch(clearParams())
    dispatch(clearSelected())
  }

  return (
    <Container>
      {isFiltered && (
        <Button onClick={handleReset} $variation="danger">
          Отменить
        </Button>
      )}
      <Button onClick={handleApply}>Применить</Button>
    </Container>
  )
}
