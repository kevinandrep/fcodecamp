import {useEffect, useState} from 'react'
import {getRandomFact} from '../facts'

export const useCatFact = () => {
  const [fact, setFact] = useState('d')

  const refreshFact = () => {
    getRandomFact().then(setFact)
  }
  useEffect(refreshFact, [])

  return {fact, refreshFact}
}
