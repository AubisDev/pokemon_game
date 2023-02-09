import { createSlice, Slice } from "@reduxjs/toolkit";
import { Pokemon, Teams } from "../../models";
import {
  botTeamInitialState,
  PokemonInitialState as emptySpotState,
  userTeamInitialState,
} from "../../utilities";

const teamsInitialState: Teams = {
  userTeam: userTeamInitialState,
  enemyTeam: botTeamInitialState,
};

export const teamsSlice: Slice = createSlice({
  name: "teams",
  initialState: teamsInitialState,
  reducers: {
    addPokemon: (state, action) => {
      const { index, pokemonData } = action.payload;
      const stateCopy: Pokemon[] = [...state.userTeam];
      stateCopy[index] = pokemonData;
      return {
        ...state,
        userTeam: stateCopy,
      };
    },

    removePokemon: (state, action) => {
      const id = action.payload;
      const stateCopy: Pokemon[] = [...state.userTeam];
      const index = stateCopy.findIndex((pokemon) => pokemon.id === id);
      if (index !== -1) {
        stateCopy[index] = emptySpotState;
        return {
          ...state,
          userTeam: stateCopy,
        };
      }
      return state;
    },

    setBotTeam: (state, action) => {
      return {
        ...state,
        enemyTeam: action.payload,
      };
    },

    updateUserTeamStats: (state, action) => {
      return {
        ...state,
        userTeam: action.payload,
      };
    },

    resetUserTeam: (state) => {
      return {
        userTeam: userTeamInitialState,
        enemyTeam: botTeamInitialState,
      };
    },
  },
});

export const {
  addPokemon,
  removePokemon,
  setBotTeam,
  updateUserTeamStats,
  resetUserTeam,
} = teamsSlice.actions;

export default teamsSlice.reducer;
