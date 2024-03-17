import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setPokemonList } from '../features/PokemonList'
import { increaseOffset, decreaseOffset } from '../features/Offset'

const Home = () => {
  const dispatch = useDispatch()
  const pokemonList = useSelector((state) => state.pokemonList.value)
  const offset = useSelector((state) => state.offset.value)

  return (
    <div>
      Home, indeed.
      <span>{pokemonList}</span>
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
