import { createSlice } from '@reduxjs/toolkit';
import { SERVER_2xx, STARTING_STATUS } from '../consts';

const ordersSlice = createSlice({
    name: "orders",
    initialState: {
        status: STARTING_STATUS,
        orders:[]
    },
    reducers: {
        addOrder: ( state, {payload} ) =>
        {
            state.orders= [payload,...state.orders];
            state.status = SERVER_2xx;
        },
        changeOrderStatus: ( state, {payload} ) =>
        {
            const index = state.orders.findIndex(item => item._id === payload)
            state.orders[index].done = !state.orders[index].done;
            state.orders= [...state.orders];
        },
    }
});


export const { 
    addOrder,
    changeOrderStatus,
} = ordersSlice.actions;

export const ordersReducer = ordersSlice.reducer;