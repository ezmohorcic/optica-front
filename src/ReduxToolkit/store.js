import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userSlice";


const rootReducer = combineReducers({
    user: userReducer,
});


export const initializeStore = () => 
{
    return configureStore(
    {
        reducer: rootReducer,
    });
}
