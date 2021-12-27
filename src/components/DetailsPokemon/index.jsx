import PropTypes from 'prop-types'
import React from 'react'
import { useParams, Link } from 'react-router-dom'
import './styles.scss'

const DetailsPokemon = ({ props }) => {
  const { pokemonId } = useParams()
  // encontrar el pokemon enviado por params en la lista de pokemons llamados den el fetch
  const pokemonFiltered = props.find(({ id }) => id === Number(pokemonId))
  const { name, id, height, weight, sprites } = pokemonFiltered
  return (
    <>
      <section className='pokemon-card-wrapper'>
        <img className='pokemon-card-wrapper__image' src={sprites.front_default} alt={name} />
        <section className='pokemon-card-wrapper__info-container'>
          <h2>Name: {name}</h2>
          <h2>ID: {id}</h2>
          <h2>Height: {height}</h2>
          <h2>Weight: {weight}</h2>
        </section>
      </section>
      <Link to='/'><button className='button-back'>Go Back</button></Link>
    </>
  )
}

DetailsPokemon.propTypes = {
  props: PropTypes.array,
  id: PropTypes.string,
  name: PropTypes.any,
  find: PropTypes.array
}

export default DetailsPokemon
