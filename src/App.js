import React, { useContext } from 'react'
import './App.css'
import AllPokemons from './components/AllPokemons'
import { PokemonContext } from './context/PokemonContext'

function App () {
  // eslint-disable-next-line no-unused-vars
  const { pokemons } = useContext(PokemonContext)
  return (
    <div className="App">
      <h1>The Pokedex</h1>
      <AllPokemons />
    </div>
  )
}

export default App
