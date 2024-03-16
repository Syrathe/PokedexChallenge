import { createSlice } from '@reduxjs/toolkit'

export const pokemonListSlice = createSlice({
  name: 'pokemonlist',
  initialState: { value: 'Bulbasaur' },
  reducers: {
    setPokemonList: (state, action) => {
      //write code for setting pokemonList
    },
  },
})

export default pokemonListSlice.reducer
