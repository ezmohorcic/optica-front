import axios from "axios";
import { addClient, addHistory } from "../reducers/userSlice";

export const addClientCall = async (dispatch,info) =>{
    try
    {
        const res = await axios.post("http://localhost:3001/api/clients",info); 
        console.log(res)
        dispatch(addClient(info));
    }
    catch(err)
    {
        alert("error on server")
    }
}

export const addHistoryCall = async (dispatch,info) =>{
    try
    {
        const res = await axios.post("http://localhost:3001/api/history",info); 
        console.log(res)
        dispatch(addHistory(info));
    }
    catch(err)
    {
        alert("error on server")
    }
}

