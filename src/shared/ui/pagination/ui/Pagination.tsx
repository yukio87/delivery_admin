import PaginationMui from '@mui/material/Pagination'
import { FC } from 'react'

import { getDevice } from '@/app/store/slice'
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks/hooks'

import { PaginationProps } from './type'

export const Pagination: FC<PaginationProps> = ({
  curPage,
  pagesAmount,
  actionCreator,
}) => {
  const device = useAppSelector(getDevice)
  const dispatch = useAppDispatch()

  const handleChange = (_: React.ChangeEvent<unknown>, page: number) =>
    dispatch(actionCreator(page))

  return (
    <PaginationMui
      color="primary"
      count={pagesAmount}
      page={curPage}
      onChange={handleChange}
      size={device === 'mobile' ? 'small' : 'medium'}
      siblingCount={device === 'mobile' ? 0 : 1}
    />
  )
}
