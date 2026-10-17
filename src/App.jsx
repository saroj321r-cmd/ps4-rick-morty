import { Routes, Route } from 'react-router-dom'

import Home from './Home'
import Characters from './Characters'
import CharacterDetails from './CharacterDetails'
import NotFound from './NotFound'
import Navbar from './components/Navbar'

import './App.css'

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/characters/:id" element={<CharacterDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
