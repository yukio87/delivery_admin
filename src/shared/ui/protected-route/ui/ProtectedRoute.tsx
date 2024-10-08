import { FC } from 'react'
import { Navigate } from 'react-router-dom'

import { routesPaths } from '@/shared/consts/routesPaths'

import { useGetUserQuery } from '../../../api/services/AuthService/AuthService'
import { ModalLoader } from '../../modal-loader'
import { ProtectedRouteProps } from './type'

export const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
  const { data, isFetching } = useGetUserQuery(null)

  const { pathLogin } = routesPaths
  const isAuthenticated = data?.role === 'authenticated'

  if (isFetching) return <ModalLoader />
  if (isAuthenticated) return children

  return <Navigate to={pathLogin} />
}
