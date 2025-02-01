import { DecksResponse, getDecks } from './decks-service.ts'
import { useQuery } from '@tanstack/react-query'

export const useDecks = args => {
  return useQuery<DecksResponse>({
    queryKey: ['decks', args],
    queryFn: () => getDecks(args),
  })
}
