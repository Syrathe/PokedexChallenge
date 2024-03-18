import { createSlice } from '@reduxjs/toolkit'

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    number: 0,
    pokemon: { types: [] },
  },
  reducers: {
    setNumber: (state, action) => {
      state.number = action.payload
    },
    setPokemon: (state, action) => {
      state.pokemon = action.payload
    },
  },
})

export const { setPokemon, setNumber } = pokemonSlice.actions
export default pokemonSlice.reducer
