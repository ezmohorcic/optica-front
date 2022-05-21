import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { clientDetailedReducer, clientsReducer } from "./reducers/clientSlice";
import { customsReducer } from "./reducers/customsSlice";
import { ordersReducer } from "./reducers/orderSlice";
import { userReducer } from "./reducers/userSlice";


const rootReducer = combineReducers({
    user: userReducer,
    customs: customsReducer,
    clients: clientsReducer,
    clientDetailed: clientDetailedReducer,
    orders: ordersReducer,
});


export const initializeStore = () => 
{
    return configureStore(
    {
        reducer: rootReducer,
    });
}
