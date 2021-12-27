import React, { useContext } from 'react'
import { PokemonContext } from '../../context/PokemonContext'
import './styles.scss'
import Spinner from '../Spinner'
import CardPokemon from '../CardPokemon'

const AllPokemons = () => {
  const { pokemons, handleClickLoadMore } = useContext(PokemonContext)

  return (
    <>
      {pokemons < 1
        ? <Spinner />
        : <ul className='wrapper-Pokedex'>{pokemons.sort((a, b) => a.id - b.id).map((pokemon) => <CardPokemon key={pokemon.id} props={pokemon}/>)}</ul>}
      <button className='load-more-btn' onClick={handleClickLoadMore}>Load More Pokemons!</button>
    </>
  )
}

export default AllPokemons
