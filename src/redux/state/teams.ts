import { createSlice, Slice } from "@reduxjs/toolkit";
import { PayloadAction } from '@reduxjs/toolkit';
import { Teams } from '../../models/teams.model';



const teamsInitialState:Teams = {
    userTeam: [],
    enemyTeam: []
}

export const teamsSlice:Slice = createSlice({
    name: 'teams',
    initialState: teamsInitialState,
    reducers: {
        
    }
})


export const {  } = teamsSlice.actions;

export default teamsSlice.reducer;
