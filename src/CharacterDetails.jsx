import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

function CharacterDetails() {
  const { id } = useParams()
  const [character, setCharacter] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchCharacter = async () => {
      setLoading(true)
      setError('')

      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/${id}`
        )

        if (!response.ok) {
          throw new Error('Character not found')
        }

        const data = await response.json()
        setCharacter(data)
      } catch (err) {
        setError('Unable to load this character.')
      } finally {
        setLoading(false)
      }
    }

    fetchCharacter()
  }, [id])

  if (loading) return <p>Loading character...</p>
  if (error) return <p>{error}</p>

  return (
    <div className="character-details">
      <img src={character.image} alt={character.name} />

      <h1>{character.name}</h1>
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      <p>Gender: {character.gender}</p>
      <p>Origin: {character.origin.name}</p>
      <p>Location: {character.location.name}</p>
      <p>Episodes: {character.episode.length}</p>

      <Link to="/characters">Back to Characters</Link>
    </div>
  )
}

export default CharacterDetails
