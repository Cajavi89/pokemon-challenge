import React, { useContext } from 'react'
import './App.css'
import AllPokemons from './components/AllPokemons'
import { PokemonContext } from './context/PokemonContext'
import { Routes, Route } from 'react-router-dom'
import NotFound404 from './components/NotFound404'
import DetailsPokemon from './components/DetailsPokemon'

function App () {
  // eslint-disable-next-line no-unused-vars
  const { pokemons } = useContext(PokemonContext)
  return (
    <div className="App">
      <h1>The Pokedex</h1>
      <Routes>
        <Route path='/' element={<AllPokemons />} />
        <Route path='/pokemon/:pokemonId' element={<DetailsPokemon props={pokemons} />} />
        <Route path='*' element={<NotFound404 />} />
      </Routes>

    </div>
  )
}

export default App
