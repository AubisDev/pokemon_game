import { createSlice, Slice } from "@reduxjs/toolkit";
import { Pokemon } from '../../models/pokemon.model';




export interface IGame{
    userPokemon: Pokemon;
    botPokemon: Pokemon;
    pause: boolean;

}


const gameInitialState: IGame= {
    userPokemon: {name:'', id: '0' , attack:0, defense:0, speed: 0, types:[], status:"dead", currentHealth:0, health:0, imageSpot:'',imageBack:'', imageFront:''},
    botPokemon: {name:'', id: '0' , attack:0, defense:0, speed: 0, types:[], status:"dead", currentHealth:0, health:0, imageSpot:'',imageBack:'', imageFront:''},
    pause: false,
}


export const gameSlice:Slice = createSlice({
    name: 'game',
    initialState: gameInitialState,
    reducers: {

        setStartersPokemons: (state, action) => action.payload,
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
        pauseGame: (state) => {
            return{
                ...state,
                pause: true
            }
        }, 

        removePause: (state) => {
            return{
                ...state,
                pause: false
            }
        }
    } 
})


export const { setStartersPokemons, setTurn, replaceCurrentPokemon,replaceBotPokemon, userAttack, botAttack, pauseGame, removePause  } = gameSlice.actions;

export default gameSlice.reducer;
