import { createSlice, Slice } from "@reduxjs/toolkit";
import { Pokemon } from '../../models/pokemon.model';
import { replace } from 'formik';




export interface IGame{
    userPokemon: Pokemon;
    botPokemon: Pokemon;
    turn: 'user' | 'bot' | null;
    change: false;

}


const gameInitialState: IGame= {
    userPokemon: { id: '0', name: ''},
    botPokemon: { id: '1', name: ''},
    turn: null,
    change: false,
}


export const gameSlice:Slice = createSlice({
    name: 'game',
    initialState: gameInitialState,
    reducers: {

        setStartersPokemons: (state, action) => {},
        setTurn: (state, action) => {},
        replaceCurrentPokemon: (state, action) => {},
        userAttack: (state, action) => {},
        botAttack: (state, action) => {},
    }
})


export const { setStartersPokemons, setTurn, replaceCurrentPokemon, userAttack, botAttack  } = gameSlice.actions;

export default gameSlice.reducer;
