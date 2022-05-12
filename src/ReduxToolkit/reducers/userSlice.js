import { createSlice } from '@reduxjs/toolkit';
import { SERVER_2xx, STARTING_STATUS } from '../consts';

const userSlice = createSlice({
    name: "user",
    initialState: {
        status: STARTING_STATUS,
        user: {},
    },
    reducers: {
        loginSuccess: (state, action) =>{
            state.status = SERVER_2xx;
            state.user = action.payload;
        },
        loginError: (state, action) =>{
            state.status = action.payload;
        },
    }
});

export const { 
    loginSuccess, 
    loginError,
} = userSlice.actions;

export const userReducer = userSlice.reducer;