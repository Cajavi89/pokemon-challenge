import React, { useContext } from 'react'
import { PokemonContext } from '../../context/PokemonContext'
import './styles.scss'
import Spinner from '../Spinner'
import CardPokemon from '../CardPokemon'

const AllPokemons = () => {
  const { pokemons, handleClickLoadMore } = useContext(PokemonContext)
  console.log('allpokemon', pokemons)

  return (
    <>
      {pokemons < 1
        ? <Spinner />
        : <ul className='wrapper-Pokedex'>{pokemons.map((pokemon) => <CardPokemon key={pokemon.id} props={pokemon}/>)}</ul>}
      <button className='load-more-btn' onClick={handleClickLoadMore}>Load More Pokemons!</button>
    </>
  )
}

export default AllPokemons
