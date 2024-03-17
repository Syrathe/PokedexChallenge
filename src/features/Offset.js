import { createSlice } from '@reduxjs/toolkit'

export const OffsetSlice = createSlice({
  name: 'offset',
  initialState: { value: 0 },
  reducers: {
    increaseOffset: (state, action) => {
      //write code for setting pokemonList
      if (state.value > 139) {
        state.value = 140
      } else {
        state.value += 20
      }
    },
    decreaseOffset: (state, action) => {
      if (state.value < 20) {
        state.value = 0
      } else {
        state.value -= 20
      }
    },
  },
})

export const { increaseOffset, decreaseOffset } = OffsetSlice.actions
export default OffsetSlice.reducer
