import axios from "axios";
import { getClientDetailed, newPageClients } from "../reducers/clientSlice";

export const getClientDetailedCall = async (dispatch,info) =>{
    try
    {
        const {data} = await axios.get("http://localhost:3001/api/clients?idClient="+info); 
        console.log(data);
        dispatch(getClientDetailed(data));
    }
    catch(err)
    {
        alert("error on server");
    }
}


export const getSearchCall = async (dispatch,search,idUser) =>
{
    try
    {
        const {data} = await axios.get(`http://localhost:3001/api/clients/search/${idUser}?search=${search}`); 
        console.log(data);
        dispatch(newPageClients(data))
    }
    catch(e)
    {
        alert("error on server")
        console.log(e)
    }
}


export const getClientNextCall = async (dispatch,page,idUser) =>
{
    try
    {
        const {data} = await axios.get(`http://localhost:3001/api/clients/getAll/${idUser}?page=${page+1}`); 
        console.log(data);
        dispatch(newPageClients(data))
    }
    catch(e)
    {
        alert("error on server")
        console.log(e)
    }
}