import { useCallback, useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'

import { deviceDetection } from '@/shared/lib/device'
import { useAppDispatch } from '@/shared/lib/hooks/hooks'

import { appRouter } from './app-router/appRouter'
import { updateDevice } from './store/slice'

export const App = () => {
  const dispatch = useAppDispatch()

  const dispatchDevice = useCallback(() => {
    dispatch(updateDevice(deviceDetection()))
  }, [dispatch])

  useEffect(() => {
    window.addEventListener('resize', dispatchDevice)
    dispatchDevice()
    return () => window.removeEventListener('resize', dispatchDevice)
  }, [dispatchDevice])

  return <RouterProvider router={appRouter()} />
}
