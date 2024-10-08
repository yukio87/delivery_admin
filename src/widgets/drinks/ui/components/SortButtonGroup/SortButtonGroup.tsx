import { FC } from 'react'

import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks/hooks'
import { Button } from '@/shared/ui/button'

import {
  clearParams,
  setPage,
  setSort,
} from '../../../model/paramsSlice/paramsSlice'
import {
  clearSort,
  getIsSorted,
  getSortedBy,
} from '../../../model/sortSlice/sortSlice'
import { Container } from './style'
import { SortButtonGroupProps } from './type'

export const SortButtonGroup: FC<SortButtonGroupProps> = ({
  setSelectedSortedBy,
}) => {
  const dispatch = useAppDispatch()
  const isSorted = useAppSelector(getIsSorted)
  const sortedBy = useAppSelector(getSortedBy)

  const handleApply = () => {
    dispatch(setSort(sortedBy))
    dispatch(setPage(1))
  }

  const handleReset = () => {
    dispatch(clearParams())
    dispatch(clearSort())
    setSelectedSortedBy('')
  }

  return (
    <Container>
      {isSorted && (
        <Button onClick={handleReset} $variation="danger">
          Отменить
        </Button>
      )}
      <Button onClick={handleApply}>Применить</Button>
    </Container>
  )
}
