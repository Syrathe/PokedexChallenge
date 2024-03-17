import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setPokemonList } from '../features/PokemonList'
import { increaseOffset, decreaseOffset } from '../features/Offset'
import pokemonproject from '../assets/pokemonproject.png'
import pokeball from '../assets/pokeballSprite.png'

const Home = () => {
  const dispatch = useDispatch()
  const pokemonList = useSelector((state) => state.pokemonList.value)
  const offset = useSelector((state) => state.offset.value)

  useEffect(() => {
    if (offset == 140) {
      fetch(`https://pokeapi.co/api/v2/pokemon/?limit=10&offset=${offset}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data.results, 'results')
          dispatch(setPokemonList(data.results))
        })
        .catch((err) => {
          console.log(err.message)
        })
    } else {
      fetch(`https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${offset}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data.results, ' results')
          dispatch(setPokemonList(data.results))
        })
        .catch((err) => {
          console.log(err.message)
        })
    }
  }, [offset])

  return (
    <div className="App">
      <div className="LeftPanel" id="left">
        <img src={pokemonproject} className="Logo" alt="Pokemon Logo" />
        <br />
        <img src="" id="Sprite" />
      </div>
      <div className="RightPanel">
        {pokemonList?.map(function (pokemon, index) {
          console.log(pokemon, 'pokemon')
          return (
            <div
              className="pokemonNameDiv"
              key={index}
              onClick={() => {}}
              onDoubleClick={() => {}}
            >
              {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}

              <img src={pokeball} />
            </div>
          )
        })}
        <button
          onClick={() => {
            dispatch(decreaseOffset())
          }}
        >
          Previous
        </button>
        <button
          onClick={() => {
            dispatch(increaseOffset())
          }}
        >
          Next
        </button>
      </div>
    </div>

    /* Home, indeed.
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
      <span>{offset}</span> */
  )
}

export default Home
