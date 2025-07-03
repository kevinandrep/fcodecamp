import {useCatImage} from './services/hooks/useCatImage'
import {useCatFact} from './services/hooks/useCatFact'

export function App() {
  const {fact, refreshFact} = useCatFact()
  const {imageUrl} = useCatImage({fact})

  // useeffect que pasa la funcion previamente generada
  const handleClick = () => {
    refreshFact()
  }

  return (
    <main
      style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}
    >
      <h1>App de gatos</h1>
      <button onClick={handleClick}>Cargar</button>
      <p>{fact}</p>
      <img style={{width: '300px'}} src={imageUrl} alt="cat" />
    </main>
  )
}
