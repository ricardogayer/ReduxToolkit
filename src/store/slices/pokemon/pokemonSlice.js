import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   page: 0,
   pokemons: [],
   isLoading: false,
}

export const pokemonSlice = createSlice({
   name: 'pokemon',
   initialState,
      reducers: {
         startLoadingPokemons: (state) => {
            state.isLoading = true
         },
         setPokemons: (state, action) => {
            state.page = action.payload.page;
            state.pokemons = action.payload.pokemons;
            state.isLoading = false;
         },
         endLoadingPokemons: (state) => {
            state.isLoading = false
         }
      },
})

export const { startLoadingPokemons , setPokemons, endLoadingPokemons, nextPage } = pokemonSlice.actions;