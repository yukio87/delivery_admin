import { SerializedError } from '@reduxjs/toolkit'
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  QueryActionCreatorResult,
  QueryDefinition,
} from '@reduxjs/toolkit/query'

export interface ErrorResponseProps {
  error: FetchBaseQueryError | SerializedError
  refetch: () => QueryActionCreatorResult<
    QueryDefinition<
      unknown,
      BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
      string,
      unknown,
      string
    >
  >
  isFetching: boolean
}
