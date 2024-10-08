import { ActionCreatorWithOptionalPayload } from '@reduxjs/toolkit'

export interface PaginationProps {
  pagesAmount: number
  curPage: number
  actionCreator: ActionCreatorWithOptionalPayload<number, string>
}
