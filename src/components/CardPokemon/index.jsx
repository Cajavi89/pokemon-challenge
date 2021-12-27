import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'

const CardPokemon = ({ props }) => {
  const { id, name, sprites, types } = props
  return (
    <li key={id} className='wrapper-card'>
      <figure className='wrapper-card__figure'>
        <img src={sprites.front_default} alt={name} className='wrapper-card__figure--image' />
      </figure>
      <Link to={`/pokemon/${id}`} ><h3 className='wrapper-card__pokemon-name'>{name}</h3></Link>
      <ul className='wrapper-card__types'>
        {types.map((type, index) => <li
          className= {types.length < 2
            ? 'wrapper-card__types--type'
            : 'wrapper-card__types--type-several'
          }
          key={index}>
          {type.type.name}
        </li>)}
      </ul>
    </li>
  )
}

CardPokemon.propTypes = {
  props: PropTypes.object,
  id: PropTypes.string,
  name: PropTypes.string,
  sprites: PropTypes.string,
  types: PropTypes.array

}

export default CardPokemon
