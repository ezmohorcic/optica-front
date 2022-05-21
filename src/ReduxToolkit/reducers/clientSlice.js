import { createSlice } from '@reduxjs/toolkit';
import { SERVER_2xx, SERVER_4xx, SERVER_5xx, STARTING_STATUS } from '../consts';


const filterById = (idFilter) => (client) => client._id !== idFilter 

const clientsSlice = createSlice({
    name: "clients",
    initialState: {
        status: STARTING_STATUS,
        clients:[],
        page:0,
    },  
    reducers: {
        loadingClients:(state) =>
        {
            state.clients = [];
            state.status = STARTING_STATUS;
            state.page=0;
        },
        newPageClients: (state,{payload}) =>
        {
            state.clients=[...state.clients,...payload];
            state.status= SERVER_2xx;
            state.page = state.page+1;
        },
        addClient: (state,{payload}) =>
        {
            state.clients= [payload,...state.clients]
            state.status = SERVER_2xx;
        },
        changeClientGlasses: ( state, {payload} ) =>
        {            
            const index = state.clients.findIndex(item => item._id === payload.client);
            state.clients[index].glasses = payload.glasses;

            state.status = SERVER_2xx;
            state.clients = [...state.clients];
        },
        deleteClient: ( state, {payload} ) =>
        {            
            state.clients = state.clients.filter(filterById(payload._id));
            state.status = SERVER_2xx;
        },
    }
});

const clientDetailedSlice = createSlice({
    name: "clientDetailed",
    initialState: {
        status: STARTING_STATUS,
        client:{}
    },
    reducers: {
        getClientDetailed: (state,{payload}) =>
        {
            state.client= payload
            state.status = SERVER_2xx;
        },
        cleanClientDetailed: ( state ) =>
        {            
            state.client = {};
            state.status = STARTING_STATUS;
        },
        errorClienDetailed: ( state ) =>
        {            
            state.client = {};
            state.status = SERVER_5xx;
        },
        changeClientDetGlasses: ( state,action ) =>
        {            
            state.client = {...state.client,actualGlasses:action.payload};
            state.status = SERVER_2xx;
        },
    }
});

export const { 
    addClient, 
    deleteClient,
    newPageClients,
    loadingClients,
    changeClientGlasses,
} = clientsSlice.actions;

export const {
    getClientDetailed,
    cleanClientDetailed,
    changeClientDetGlasses
} = clientDetailedSlice.actions;

export const clientDetailedReducer = clientDetailedSlice.reducer;
export const clientsReducer = clientsSlice.reducer;