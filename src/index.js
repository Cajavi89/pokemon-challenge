import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { PokemonContextProvider } from './context/PokemonContext'
import App from './App'

ReactDOM.render(
  <PokemonContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </PokemonContextProvider>,
  document.getElementById('root')
)
