import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setPokemonList } from '../features/PokemonList'
import { increaseOffset, decreaseOffset } from '../features/Offset'

const Home = () => {
  const dispatch = useDispatch()
  const pokemonList = useSelector((state) => state.pokemonList.value)
  const offset = useSelector((state) => state.offset.value)

  useEffect(() => {
    if (offset == 140) {
      fetch(`https://pokeapi.co/api/v2/pokemon/?limit=10&offset=${offset}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data.results)
          setPokemonList(data.results)
        })
        .catch((err) => {
          console.log(err.message)
        })
    } else {
      fetch(`https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${offset}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data.results)
          setPokemonList(data.results)
        })
        .catch((err) => {
          console.log(err.message)
        })
    }
  }, [offset])

  return (
    <div>
      Home, indeed.
      <span></span>
      <button
        onClick={() => {
          dispatch(setPokemonList('Charmander'))
        }}
      >
        Click
      </button>
      <button
        onClick={() => {
          dispatch(increaseOffset())
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          dispatch(decreaseOffset())
        }}
      >
        Decrease
      </button>
      <span>{offset}</span>
    </div>
  )
}

export default Home
