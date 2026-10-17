import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        Rick and Morty Explorer
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/characters">Characters</Link>
      </div>
    </nav>
  )
}

export default Navbar
