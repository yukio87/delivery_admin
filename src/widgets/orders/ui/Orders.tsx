import { useGetOrdersQuery } from '@/shared/api/services/OrderService/OrdersService'
import { ORDERS_PER_PAGE } from '@/shared/consts/perPage'
import { useAppSelector } from '@/shared/lib/hooks/hooks'
import { ErrorResponse } from '@/shared/ui/error-response'
import { Heading } from '@/shared/ui/heading'
import { Loader } from '@/shared/ui/loader'
import { MainContainer } from '@/shared/ui/main-container'
import { MainContent } from '@/shared/ui/main-content'
import { MainFooter } from '@/shared/ui/main-footer'
import { MainHeader } from '@/shared/ui/main-header'
import { Pagination } from '@/shared/ui/pagination'
import { Row } from '@/shared/ui/row'

import { getOrdersParams, setPage } from '../model/paramsSlice/paramsSlice'
import { FilterButtonGroup, Input, OrderRow } from './components'
import * as S from './style'

export const Orders = () => {
  console.log('test')
  const { page, drinkId } = useAppSelector(getOrdersParams)

  const { data, isFetching, error, refetch } = useGetOrdersQuery({
    page,
    drinkId,
  })

  const orders = data?.data
  const pagesAmount = Math.ceil(data ? data.count / ORDERS_PER_PAGE : 0)

  if (error)
    return (
      <ErrorResponse error={error} refetch={refetch} isFetching={isFetching} />
    )

  if (isFetching) return <Loader />

  return (
    <Row>
      <S.H1Wrapper>
        <Heading as="h1">Заказы</Heading>
      </S.H1Wrapper>
      <MainContainer>
        <MainHeader>
          <Input />
          <FilterButtonGroup />
        </MainHeader>
        <MainContent>
          {orders.map((item) => (
            <OrderRow order={item} key={item.numOrder} />
          ))}
        </MainContent>
        <MainFooter>
          <Pagination
            pagesAmount={pagesAmount}
            curPage={page}
            actionCreator={setPage}
          />
        </MainFooter>
      </MainContainer>
    </Row>
  )
}
