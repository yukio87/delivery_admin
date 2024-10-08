import { useState } from 'react'

import { useGetDrinksQuery } from '@/shared/api/services/DrinkService/DrinkService'
import { DRINKS_PER_PAGE } from '@/shared/consts/perPage'
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

import { getParams, setPage } from '../model/paramsSlice/paramsSlice'
import { DrinkRow, Dropdown, SortButtonGroup } from './components'
import * as S from './style'

export const Drinks = () => {
  const [selectedSortedBy, setSelectedSortedBy] = useState('')
  const { page, sort } = useAppSelector(getParams)

  const { data, isFetching, refetch, error } = useGetDrinksQuery({
    page,
    sort,
  })

  const drinks = data?.data
  const pagesAmount = Math.ceil(data ? data.count / DRINKS_PER_PAGE : 0)

  if (error)
    return (
      <ErrorResponse error={error} isFetching={isFetching} refetch={refetch} />
    )

  if (isFetching) return <Loader />

  return (
    <Row>
      <S.H1Wrapper>
        <Heading as="h1">Напитки</Heading>
      </S.H1Wrapper>
      <MainContainer>
        <MainHeader>
          <Dropdown
            selectedSortedBy={selectedSortedBy}
            setSelectedSortedBy={setSelectedSortedBy}
          />
          <SortButtonGroup setSelectedSortedBy={setSelectedSortedBy} />
        </MainHeader>
        <MainContent>
          {drinks.map((item) => (
            <DrinkRow drink={item} key={item.id} />
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
