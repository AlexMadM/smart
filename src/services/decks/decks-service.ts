import { createInstance } from '../../axios/axios-instans.ts'

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

export const getAllDecks = (
  queryParams: string,
  options?: SecondParameter<typeof createInstance>
) => {
  return createInstance<DecksResponse>({ url: `/v2/decks`, method: 'get' }, options)
}




type GetDecksArgs = {
  [key: string]: any; // Укажите точные типы для аргументов, если они известны
};

