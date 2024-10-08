import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from '@/pages/app-layout'
import { CreateEditDrinkPage } from '@/pages/create-edit-drink-page'
import { DrinkListPage } from '@/pages/drink-list-page'
import { LoginPage } from '@/pages/login-page'
import { OrderListPage } from '@/pages/order-list-page'
import { RegistrationPage } from '@/pages/registration-page'
import { routesPaths } from '@/shared/consts/routesPaths'
import { ProtectedRoute } from '@/shared/ui/protected-route'

const { pathDrikList, pathDrinkCard, pathLogin, pathRegistration } = routesPaths

export const appRouter = () => {
  return createBrowserRouter([
    {
      path: pathLogin,
      element: <LoginPage />,
    },
    {
      path: pathRegistration,
      element: <RegistrationPage />,
    },
    {
      path: '/',
      element: (
        <ProtectedRoute>
          <AppLayout />
        </ProtectedRoute>
      ),

      children: [
        {
          path: '/',
          element: <OrderListPage />,
        },
        {
          path: pathDrikList,
          element: <DrinkListPage />,
        },
        {
          path: pathDrinkCard,
          element: <CreateEditDrinkPage />,
        },
        {
          path: `${pathDrinkCard}/:drinkId`,
          element: <CreateEditDrinkPage />,
        },
      ],
    },
  ])
}
