import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { PokemonContextProvider } from './context/PokemonContext'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

ReactDOM.render(
  <BrowserRouter>
    <PokemonContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </PokemonContextProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
