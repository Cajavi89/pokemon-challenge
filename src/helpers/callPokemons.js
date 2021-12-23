export const fetchPokemons = async (url) => {
  console.log('fetchin', url)
  const getPokemons = await fetch(url)
  const res = await getPokemons.json()
  return res
}
