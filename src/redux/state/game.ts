import { createSlice, Slice } from "@reduxjs/toolkit";
import { Pokemon } from '../../models/pokemon.model';




export interface IGame{
    userPokemon: Pokemon;
    botPokemon: Pokemon;
    change: false;
    
}


const gameInitialState: IGame= {
    userPokemon: {name:'', id: '0' , attack:0, defense:0, speed: 0, types:[], status:"dead", currentHealth:0, health:0, imageSpot:'',imageBack:'', imageFront:''},
    botPokemon: {name:'', id: '0' , attack:0, defense:0, speed: 0, types:[], status:"dead", currentHealth:0, health:0, imageSpot:'',imageBack:'', imageFront:''},
    change: false,
}


export const gameSlice:Slice = createSlice({
    name: 'game',
    initialState: gameInitialState,
    reducers: {

        setStartersPokemons: (state, action) => {
            return action.payload
        },

        replaceCurrentPokemon: (state, action) => {
            return{
                ...state,
                userPokemon: action.payload,
            }
        },
        
        replaceBotPokemon : (state, action) => {
            return {
                ...state,
                botPokemon: action.payload,
            }
        },

        userAttack: (state, action) => {
            return{
                ...state,
                botPokemon: action.payload 
            }
        },
        botAttack: (state, action) => {
            return {
                ...state,
                userPokemon: action.payload
            }
        },
    } 
})


export const { setStartersPokemons, setTurn, replaceCurrentPokemon,replaceBotPokemon, userAttack, botAttack  } = gameSlice.actions;

export default gameSlice.reducer;
