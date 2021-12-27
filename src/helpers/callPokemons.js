export const fetchPokemons = async (url) => {
  const getPokemons = await fetch(url)
  const res = await getPokemons.json()
  return res
}
