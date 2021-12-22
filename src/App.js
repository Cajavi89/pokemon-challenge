import React, { useEffect } from 'react'
import './App.css'
import { fetchPokemons } from './helpers/callPokemons'

function App () {
  useEffect(() => {
    fetchPokemons(9)
  }, [])
  return (
    <div className="App">
      <h1>hola pokemon</h1>
    </div>
  )
}

export default App
