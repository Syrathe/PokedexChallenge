import { createSlice } from '@reduxjs/toolkit'

export const pokemonListSlice = createSlice({
  name: 'pokemonlist',
  initialState: { value: 'Bulbasaur' },
  reducers: {
    setPokemonList: (state, action) => {
      //write code for setting pokemonList
      state.value = action.payload
    },
  },
})

export const { setPokemonList } = pokemonListSlice.actions
export default pokemonListSlice.reducer
