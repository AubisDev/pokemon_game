import { createSlice, Slice } from "@reduxjs/toolkit";
import { Pokemon } from "../../models";
import { initialAlivePokemonState } from "../../pages/ChooseTeam/utilities";
import { PokemonInitialState } from "../../utilities";

export interface IGame {
  userPokemon: Pokemon;
  botPokemon: Pokemon;
  pause: boolean;
  messageOne: string;
  messageTwo: string;
  alivePokemons: Pokemon[];
}

const gameInitialState: IGame = {
  userPokemon: PokemonInitialState,
  botPokemon: PokemonInitialState,
  pause: false,
  messageOne: "",
  messageTwo: "",
  alivePokemons: [],
};

export const gameSlice: Slice = createSlice({
  name: "game",
  initialState: gameInitialState,
  reducers: {
    setStartersPokemons: (state, action) => action.payload,

    replaceCurrentPokemon: (state, action) => {
      return {
        ...state,
        userPokemon: action.payload,
      };
    },

    replaceBotPokemon: (state, action) => {
      return {
        ...state,
        botPokemon: action.payload,
      };
    },

    userAttack: (state, action) => {
      return {
        ...state,
        botPokemon: action.payload,
      };
    },
    botAttack: (state, action) => {
      return {
        ...state,
        userPokemon: action.payload,
      };
    },
    setMessage: (state, action) => {
      return {
        ...state,
        messageOne: action.payload.messageOne,
        messageTwo: action.payload.messageTwo,
      };
    },

    setPause: (state) => {
      return {
        ...state,
        pause: false,
      };
    },

    removePause: (state) => {
      return {
        ...state,
        pause: false,
      };
    },

    resetBattelData: (state) => gameInitialState,

    setAlivePokemons: (state, action) => {
      return {
        ...state,
        alivePokemons: action.payload,
      };
    },

    emptyAlivePokemonList: (state) => {
      return {
        ...state,
        alivePokemons: initialAlivePokemonState,
      };
    },
  },
});

export const {
  setStartersPokemons,
  setTurn,
  replaceCurrentPokemon,
  replaceBotPokemon,
  userAttack,
  botAttack,
  setMessage,
  setPause,
  removePause,
  resetBattelData,
  setAlivePokemons,
  emptyAlivePokemonList,
} = gameSlice.actions;

export default gameSlice.reducer;
