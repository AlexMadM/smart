import { createInstance } from '../../axios/axios-instans.ts'
import { getValuable } from '../../utils'

type SecondParameter<T extends (...args: any) => any> = T extends (
  config: any,
  args: infer P
) => any
  ? P
  : never
export type DecksResponse = {
  items: Deck[]
  maxCardsCount: number
  pagination: Pagination
}

export type Pagination = {
  currentPage: number
  itemsPerPage: number
  totalItems: number
  totalPages: number
}

export type Author = {
  id: string
  name: string
}
export type Deck = {
  author: Author
  cardsCount: number
  cover?: null | string
  created: string
  id: string
  isBlocked?: boolean | null
  isDeleted: boolean | null
  isFavorite: boolean
  isPrivate: boolean
  name: string
  rating: number
  shots: number
  updated: string
  userId: string
}

export type GetDecksArgs = {
  authorId?: null | string
  currentPage?: null | number
  favoritedBy?: null | string
  itemsPerPage?: null | number
  maxCardsCount?: null | number
  minCardsCount?: null | number
  name?: null | string
  orderBy?: null | string
}

export const getDecks = (args?: GetDecksArgs, options?: SecondParameter<typeof createInstance>) => {
  return createInstance<DecksResponse>(
    {
      url: '/v1/decks',
      method: 'get',
      params: args ? getValuable(args) : undefined,
    },
    options
  )
}
