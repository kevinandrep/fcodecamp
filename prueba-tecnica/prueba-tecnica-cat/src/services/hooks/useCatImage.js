import {useEffect, useState} from 'react'

export function useCatImage({fact}) {
  // Recueperando url de imagen con 3 primeras palabras de fact
  const [imageUrl, setImageUrl] = useState()
  useEffect(() => {
    if (!fact) return
    const firstThreeWords = fact.split(' ', 3).join(' ')
    setImageUrl(
      `https://cataas.com/cat/says/${firstThreeWords}?fontSize=50&fontColor=red`
    )
  }, [fact])

  return {imageUrl}
}
