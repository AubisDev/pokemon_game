import { createSlice, Slice } from "@reduxjs/toolkit";
import { PayloadAction } from '@reduxjs/toolkit';
import { Pokemon } from '../../models/pokemon.model';



const pokemonInitialState:Pokemon = {name:'', id: '0' , attack:0, defense:0, speed: 0, types:[], status:"dead", currentHealth:0, health:0, imageSpot:'',imageBack:'', imageFront:''};


export const pokemonSlice:Slice = createSlice({
    name: 'pokemon',
    initialState: pokemonInitialState,
    reducers: {
        setPokemonData: (state, action:PayloadAction<Pokemon>) => action.payload,
        resetSearchData: (state) => pokemonInitialState
    }
})


export const { setPokemonData, resetSearchData } = pokemonSlice.actions;

export default pokemonSlice.reducer;
