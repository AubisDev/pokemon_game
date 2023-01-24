import { createSlice, Slice } from "@reduxjs/toolkit";
import { PayloadAction } from '@reduxjs/toolkit';
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

export const teamsSlice:Slice = createSlice({
    name: 'teams',
    initialState: teamsInitialState,
    reducers: {
        
    }
})


export const {  } = teamsSlice.actions;

export default teamsSlice.reducer;
