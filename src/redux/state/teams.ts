import { createSlice, Slice } from "@reduxjs/toolkit";
import { PayloadAction } from '@reduxjs/toolkit';
import { Pokemon } from "../../models";
import { Teams } from '../../models/teams.model';



const teamsInitialState:Teams = {
    userTeam: [
        {name:'', id: '0'},
        {name:'', id: '1'},
        {name:'', id: '2'},
        {name:'', id: '3'},
        {name:'', id: '4'},
        {name:'', id: '5'},
    ],
    enemyTeam: []
}

const emptySpotState = {name:'', id: '0'};

export const teamsSlice:Slice = createSlice({
    name: 'teams',
    initialState: teamsInitialState,
    reducers: {
        addPokemon: (state, action) =>{
            const {index, pokemonData} = action.payload;
            let stateCopy:Pokemon[] = [...state.userTeam];
            stateCopy[index] = pokemonData;
            return {
                ...state,
                userTeam: stateCopy
            }
        },

        removePokemon: (state, action) => {
            const {index } = action.payload;
            let stateCopy:Pokemon[] = [...state.userTeam];
            stateCopy[index] = emptySpotState;
            return {
                ...state,
                userTeam: stateCopy
            }
        },
    }
})


export const { addPokemon, removePokemon } = teamsSlice.actions;

export default teamsSlice.reducer;
