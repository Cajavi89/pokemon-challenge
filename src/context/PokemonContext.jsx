import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { fetchPokemons } from '../helpers/callPokemons'

export const PokemonContext = React.createContext()

export const PokemonContextProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([])
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?offset=9&limit=9')

  const getAllPokemons = async () => {
    const getPokemons = await fetchPokemons(loadMore)
    setLoadMore(getPokemons.next)

    const getSinglePokemon = async (results) => {
      results.forEach(async ({ url }) => {
        const pokemonData = await fetchPokemons(url)
        setPokemons(currentList => [...currentList, pokemonData])
      })
    }
    getSinglePokemon(getPokemons.results)
  }

  const handleClickLoadMore = async () => {
    getAllPokemons()
  }

  useEffect(() => {
    getAllPokemons()
    setPokemons(pokemons.sort((a, b) => a.id - b.id))
  }, [setPokemons])

  return (
    <PokemonContext.Provider value= { { pokemons, handleClickLoadMore } }>
      {children}
    </PokemonContext.Provider>
  )
}

PokemonContextProvider.propTypes = {
  children: PropTypes.object
}
