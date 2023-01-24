import { createSlice, Slice } from "@reduxjs/toolkit";
import { User } from "../../models/user.model";
import { PayloadAction } from '@reduxjs/toolkit';
import { Pokemon } from '../../models/pokemon.model';



const pokemonInitialState:Pokemon = {
    name: '',
    id: '0',
}


export const pokemonSlice:Slice = createSlice({
    name: 'pokemon',
    initialState: pokemonInitialState,
    reducers: {
        setPokemonData: (state, action:PayloadAction<Pokemon>) => action.payload,
    }
})


export const { setPokemonData } = pokemonSlice.actions;

export default pokemonSlice.reducer;
