import { createSlice } from '@reduxjs/toolkit'

export const pokemonListSlice = createSlice({
  name: 'pokemonlist',
  initialState: {
    value: [],
  },
  reducers: {
    setPokemonList: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { setPokemonList } = pokemonListSlice.actions
export default pokemonListSlice.reducer
