import { createSlice } from '@reduxjs/toolkit';
import { SERVER_2xx, STARTING_STATUS } from '../consts';

const userSlice = createSlice({
    name: "user",
    initialState: {
        status: STARTING_STATUS,
        user: {},
    },
    reducers: {
        loginSuccess: (state, {payload}) =>
        {
            state.status = SERVER_2xx;
            state.user = payload;
        },
        loginError: ({status}, {payload}) =>
        {
            status = payload;
        },
        logout: (state) =>
        {
            state.status = STARTING_STATUS;
            state.user = {};
        },
        addClient: ({user},{payload}) =>
        {
            user.clients= [payload,...user.clients]
        },
        addHistory: ({user},{payload}) =>
        {
            user.history= [payload,...user.history]
        }
        
    }
});

export const { 
    loginSuccess, 
    loginError,
    logout,
    addClient,
    addHistory,
} = userSlice.actions;

export const userReducer = userSlice.reducer;