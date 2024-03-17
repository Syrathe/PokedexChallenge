import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setPokemonList } from '../features/PokemonList'
import { increaseOffset, decreaseOffset } from '../features/Offset'
import pokemonproject from '../assets/pokemonproject.png'
import pokeball from '../assets/pokeballSprite.png'

const Home = () => {
  let sprite
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

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon-form/bulbasaur')
      .then((response) => response.json())
      .then((data) => {
        sprite = data.sprites.front_default
        document.getElementById('Sprite').src = sprite
      })
      .catch((err) => {
        console.log(err.message)
      })
  }, [])

  function updatePortrait(url) {
    const regex = /\/(\d+)\/$/
    const match = url.match(regex)
    const source = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${match[1]}.png`

    if (match) {
      document.getElementById('Sprite').src = source
    } else {
      alert('Number not found')
    }
  }

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
              onClick={() => updatePortrait(pokemon.url)}
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
  )
}

export default Home
