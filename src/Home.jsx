import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="home">
      <h1>Rick and Morty Explorer</h1>

      <p>
        Explore characters, discover their stories,
        and learn more about the Rick and Morty universe.
      </p>

      <Link to="/characters" className="home-button">
        See Characters
      </Link>
    </div>
  )
}

export default Home
