import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import pokemonproject from '../assets/pokemonproject.png'

const DetailedView = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const number = location.state.number
  const source = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number}.png`
  const [pokemon, setPokemon] = useState({ types: [] })

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${number}/`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data, 'pokemon')
        setPokemon(data)
        document.getElementById('Sprite').src = source
        setWidth('Fill1', data.stats[0].base_stat)
        setWidth('Fill2', data.stats[1].base_stat)
        setWidth('Fill3', data.stats[2].base_stat)
        setWidth('Fill4', data.stats[3].base_stat)
        setWidth('Fill5', data.stats[4].base_stat)
        setWidth('Fill6', data.stats[5].base_stat)
      })
      .catch((err) => {
        console.log('Error encountered')
      })
  }, [])

  const setWidth = (id, width) => {
    const element = document.getElementById(id)
    element.style.width = `${(width / 255) * 150}px`
  }

  const toInitialMayusc = (str) => str.charAt(0).toUpperCase() + str.slice(1)

  return (
    <div className="App">
      <div className="LeftPanel" id="left">
        <img src={pokemonproject} className="Logo" alt="Pokemon Logo" />
        <br />
        <img src="" id="Sprite" />
      </div>
      <div className="RightPanel">
        <div className="BtnContainer">
          <button
            className="GoBackBtn"
            id="BackBtn"
            onClick={() => navigate(-1)}
          >
            Go back
          </button>
        </div>
        <h4>
          <p>Type:</p>
          {pokemon?.types?.length
            ? toInitialMayusc(pokemon?.types[0]?.type.name)
            : 'Loading...'}
          {pokemon?.types[1]
            ? ' & ' + toInitialMayusc(pokemon?.types[1]?.type.name)
            : ''}
          <span id="TypeText"></span>
        </h4>
        <div className="TechData">
          <div>
            <strong>Number: {number}</strong>
          </div>
          <div>
            <strong>
              Name: {toInitialMayusc(pokemon?.name ?? 'Loading...')}
            </strong>
          </div>
          <div>
            <strong>Height: {pokemon.height}</strong>
          </div>
          <div>
            <strong>Weight: {pokemon.weight}</strong>
          </div>
        </div>
        <div className="Status">
          <div className="Basic6">
            <div className="BaseStats">
              <strong>Stats:</strong>
              <p>
                <strong>
                  Hp:{' '}
                  {pokemon?.stats?.length
                    ? pokemon?.stats[0]?.base_stat
                    : 'Loading...'}
                </strong>
              </p>
              <p>
                <strong>
                  Attack:{' '}
                  {pokemon?.stats?.length
                    ? pokemon?.stats[1]?.base_stat
                    : 'Loading...'}
                </strong>
              </p>
              <p>
                <strong>
                  Defense:{' '}
                  {pokemon?.stats?.length
                    ? pokemon?.stats[2]?.base_stat
                    : 'Loading...'}
                </strong>
              </p>
              <p>
                <strong>
                  Special Attack:{' '}
                  {pokemon?.stats?.length
                    ? pokemon?.stats[3]?.base_stat
                    : 'Loading...'}
                </strong>
              </p>
              <p>
                <strong>
                  Special Defense:{' '}
                  {pokemon?.stats?.length
                    ? pokemon?.stats[4]?.base_stat
                    : 'Loading...'}
                </strong>
              </p>
              <p>
                <strong>
                  Speed:{' '}
                  {pokemon?.stats?.length
                    ? pokemon?.stats[5]?.base_stat
                    : 'Loading...'}
                </strong>
              </p>
            </div>
            <div className="Bars">
              <div className="Empty">
                <div className="Fill" id="Fill1"></div>
              </div>
              <div className="Empty">
                <div className="Fill" id="Fill2"></div>
              </div>
              <div className="Empty">
                <div className="Fill" id="Fill3"></div>
              </div>
              <div className="Empty">
                <div className="Fill" id="Fill4"></div>
              </div>
              <div className="Empty">
                <div className="Fill" id="Fill5"></div>
              </div>
              <div className="Empty">
                <div className="Fill" id="Fill6"></div>
              </div>
            </div>
          </div>
          <div className="Abilities">
            <strong>Abilities:</strong>
            {pokemon?.abilities?.map(function (ability) {
              return (
                <p>
                  <strong>{ability.ability.name}</strong>
                </p>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailedView
