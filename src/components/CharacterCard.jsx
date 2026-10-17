import { Link } from 'react-router-dom'

function CharacterCard({ character }) {
  return (
    <div className="character-card">
      <img src={character.image} alt={character.name} />

      <div className="character-info">
        <h2>{character.name}</h2>
        <p>Status: {character.status}</p>
        <p>Species: {character.species}</p>

        <Link to={`/characters/${character.id}`}>
          View Details
        </Link>
      </div>
    </div>
  )
}

export default CharacterCard
