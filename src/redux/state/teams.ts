import { createSlice, Slice } from "@reduxjs/toolkit";
import { PayloadAction } from '@reduxjs/toolkit';
import { Pokemon } from "../../models";
import { Teams } from '../../models/teams.model';
import { botTeamInitialState, userTeamInitialState } from '../../utilities/constants';



const teamsInitialState:Teams = {
    userTeam: userTeamInitialState,
    enemyTeam: botTeamInitialState
}

export const emptySpotState:Pokemon = {name:'', id: '0' , attack:0, defense:0, speed: 0, types:[], status:"dead", currentHealth:0, health:0, imageSpot:'',imageBack:'', imageFront:''};

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
            const id = action.payload;
            let stateCopy:Pokemon[] = [...state.userTeam];
            let index = stateCopy.findIndex( pokemon => pokemon.id === id);
            if( index !== -1){
                stateCopy[index] = emptySpotState;
                return {
                    ...state,
                    userTeam: stateCopy
                }
            }
            return state
        },

        setBotTeam: (state, action) => {
            return {
                ...state,
                enemyTeam: action.payload
            }
        }
    }
})


export const { addPokemon, removePokemon, setBotTeam} = teamsSlice.actions;

export default teamsSlice.reducer;
