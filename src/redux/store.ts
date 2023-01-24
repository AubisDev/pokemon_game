import { configureStore } from "@reduxjs/toolkit";
import { User } from '../models/user.model';
import teams from "./state/teams";
import user from './state/user';
import { Teams } from '../models/teams.model';
import { Pokemon } from '../models/pokemon.model';
import pokemon from "./state/pokemon";

export interface AppStore {
    user: User
    teams: Teams,
    search: Pokemon
}

export default configureStore<AppStore>({
    reducer:{
         user: user,
         teams: teams,
         search: pokemon
    }
})

