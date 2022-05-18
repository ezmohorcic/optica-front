import { createSlice } from '@reduxjs/toolkit';
import { SERVER_2xx, STARTING_STATUS } from '../consts';

const customsSlice = createSlice({
    name: "customs",
    initialState: {
        customs: {language:"español", theme:"claro"},
    },
    reducers: {
        changeLenguage: ({customs}) =>
        {
            customs.language = customs.language==="español" ?  "english": "español";
        },
        changeTheme: ({customs}) =>
        {
            customs.theme = customs.theme==="white" ?  "dark": "white";
        },
    }
});

export const { 
    changeLenguage, 
    changeTheme,
} = customsSlice.actions;

export const customsReducer = customsSlice.reducer;