import { configureStore } from "@reduxjs/toolkit";
import { User } from '../models/user.model';
import teams from "./state/teams";
import user from './state/user';
import { Teams } from '../models/teams.model';

export interface AppStore {
    user: User
    teams: Teams
}

export default configureStore<AppStore>({
    reducer:{
         user: user,
         teams: teams
    }
})

