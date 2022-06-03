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
        deleteClient: ( state, action ) =>
        {            
            state.clients = state.clients.filter(filterById(action.payload));
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
            const {client,glasses,date,prices,details} = action.payload;
            state.client = {...state.client, actualGlasses:glasses, details:details, date:date, prices:prices};
            state.status = SERVER_2xx;
        },
        changeClientDetInfo: ( state,action ) =>
        {            
            const {email,phoneNumber} = action.payload;
            state.client = {...state.client, email:email, phoneNumber:phoneNumber};
            state.status = SERVER_2xx;
        },
        changeClientDetName: ( state,action ) =>
        {            
            const {email,phoneNumber} = action.payload;
            state.client = {...state.client, email:email, phoneNumber:phoneNumber};
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
    changeClientDetGlasses,
    changeClientDetInfo,
} = clientDetailedSlice.actions;

export const clientDetailedReducer = clientDetailedSlice.reducer;
export const clientsReducer = clientsSlice.reducer;