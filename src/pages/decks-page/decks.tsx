import { useDecks } from '../../services/decks/decks-hooks.ts'

const Decks = () => {
  const currentPage = 1
  const { data } = useDecks({ currentPage })
  console.log(data)
  return (
    <div className={'text-white'}>
      {data?.items.map(deck => <div key={deck.id}>{deck.name}</div>)}
    </div>
  )
}

export default Decks
