import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { customsReducer } from "./reducers/customsSlice";
import { userReducer } from "./reducers/userSlice";


const rootReducer = combineReducers({
    user: userReducer,
    customs: customsReducer,
});


export const initializeStore = () => 
{
    return configureStore(
    {
        reducer: rootReducer,
    });
}
