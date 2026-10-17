
import { useEffect, useState } from 'react'
import CharacterCard from './components/CharacterCard'
import SearchBar from './components/SearchBar'

function Characters() {
  const [characters, setCharacters] = useState([])
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true)
      setError('')

      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character?page=${page}`
        )

        if (!response.ok) {
          throw new Error('Failed to fetch characters')
        }

        const data = await response.json()

        setCharacters(data.results)
        setTotalPages(data.info.pages)
      } catch (err) {
        setError('Unable to load characters. Please try again.')
      } finally {
        setLoading(false)
      }
    }

    fetchCharacters()
  }, [page])

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="characters-page">
      <h1>Rick and Morty Characters</h1>

      <SearchBar search={search} setSearch={setSearch} />

      {loading && <p>Loading characters...</p>}

      {error && <p>{error}</p>}

      {!loading && !error && (
        <>
          <div className="character-grid">
            {filteredCharacters.map((character) => (
              <CharacterCard
                key={character.id}
                character={character}
              />
            ))}
          </div>

          {filteredCharacters.length === 0 && (
            <p>No characters found.</p>
          )}

          <div className="pagination">
            <button
              onClick={() => setPage(page - 1)}
              disabled={page === 1 || loading}
            >
              Previous
            </button>

            <span>
              Page {page} of {totalPages}
            </span>

            <button
              onClick={() => setPage(page + 1)}
              disabled={page === totalPages || loading}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default Characters
