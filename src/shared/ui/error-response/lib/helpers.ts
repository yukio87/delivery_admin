import { SerializedError } from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'

export const getErrorMessage = (
  error: FetchBaseQueryError | SerializedError,
) => {
  if ('status' in error) return error.status
  if ('code' in error) return error.code

  return null
}
