const API_URL = 'https://catfact.ninja/fact'

export const getRandomFact = async () => {
  const rest = await fetch(API_URL)
  const data = await rest.json()
  const {fact} = data
  return fact
}
