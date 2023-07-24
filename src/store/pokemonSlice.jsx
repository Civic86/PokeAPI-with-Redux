// src/store/pokemonSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pokemonData: null,
  status: "idle",
  error: undefined
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setPokemonData: (state, action) => {
      state.pokemonData = action.payload;
    },
  },
});

export const { setPokemonData } = pokemonSlice.actions;

export default pokemonSlice.reducer;
