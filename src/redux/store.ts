import { configureStore } from "@reduxjs/toolkit";
import { User } from "../models/user.model";
import teams from "./state/teams";
import user from "./state/user";
import { Teams } from "../models/teams.model";
import { Pokemon } from "../models/pokemon.model";
import pokemon from "./state/pokemon";
import game, { IGame } from "./state/game";

export interface AppStore {
  user: User;
  teams: Teams;
  search: Pokemon;
  game: IGame;
}

export default configureStore<AppStore>({
  reducer: {
    user,
    teams,
    search: pokemon,
    game,
  },
});
