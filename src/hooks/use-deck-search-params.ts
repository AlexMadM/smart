import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useQueryParam } from './use-query-param'

export type Sort = {
  direction: 'asc' | 'desc'
  key: string
} | null
export function useDeckSearchParams() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [currentPage, setCurrentPage] = useQueryParam<number>(
    searchParams,
    setSearchParams,
    'page',
    1
  )
  const [minCardsCount, setMinCards] = useQueryParam<number>(
    searchParams,
    setSearchParams,
    'minCards',
    0
  )
  const [maxCardsCount, setMaxCards] = useQueryParam<number>(
    searchParams,
    setSearchParams,
    'maxCards'
  )
  const [search, setSearch] = useQueryParam<string>(searchParams, setSearchParams, 'search')
  const [searchQuestion, setsearchQuestion] = useQueryParam<string>(
    searchParams,
    setSearchParams,
    'searchQuestion'
  )

  const [currentTab, setCurrentTab] = useQueryParam<string>(
    searchParams,
    setSearchParams,
    'currentTab',
    'all'
  )
  const [rangeValue, setRangeValue] = useState([minCardsCount, maxCardsCount])
  const [sortKey, setSortKey] = useQueryParam<string>(searchParams, setSearchParams, 'sortKey')
  const [sortDirection, setSortDirection] = useQueryParam<'asc' | 'desc'>(
    searchParams,
    setSearchParams,
    'sortDirection'
  )
  const setSort = (sort: Sort) => {
    if (!sort) {
      setSortKey(null)
      setSortDirection(null)

      return
    }
    setSortKey(sort.key)
    setSortDirection(sort.direction)
  }

  const sort: Sort =
    sortDirection === null || sortKey === null
      ? null
      : {
          direction: sortDirection,
          key: sortKey,
        }

  return {
    currentPage,
    currentTab,
    maxCardsCount,
    minCardsCount,
    rangeValue,
    search,
    searchQuestion,
    setCurrentPage,
    setCurrentTab,
    setMaxCards,
    setMinCards,
    setRangeValue,
    setSearch,
    setSort,
    setsearchQuestion,
    sort,
  }
}
