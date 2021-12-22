export const fetchPokemon = (id) => {
  return (
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(res => res.json())
      .then(data => console.log(data))
  )
}

export const fetchPokemons = (number) => {
  for (let i = 1; i <= number; i++) {
    fetchPokemon(i)
  }
}
