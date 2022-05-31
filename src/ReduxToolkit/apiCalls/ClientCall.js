import axios from "axios";
import { changeClientDetInfo, deleteClient, getClientDetailed, newPageClients } from "../reducers/clientSlice";

export const getClientDetailedCall = async (dispatch,info) =>{
    try
    {
        const {data} = await axios.get("https://ctech-chllng-mohorcic.herokuapp.com/api/clients?idClient="+info); 
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
        const {data} = await axios.get(`https://ctech-chllng-mohorcic.herokuapp.com/api/clients/search/${idUser}?search=${search}`); 
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
        const {data} = await axios.get(`https://ctech-chllng-mohorcic.herokuapp.com/api/clients/getAll/${idUser}?page=${page+1}`); 
        dispatch(newPageClients(data))
    }
    catch(e)
    {
        alert("error on server")
        console.log(e)
    }
}

export const changeClientCall = async (dispatch,idClient,info) =>
{
    try
    {
        const {data} = await axios.put(`https://ctech-chllng-mohorcic.herokuapp.com/api/clients/${idClient}`,info); 
        dispatch( changeClientDetInfo({...data, client:idClient}) )
    }
    catch(e)
    {
        alert("error on server")
        console.log(e)
    }
}

export const deleteClientCall = async (dispatch,idClient) =>
{
    try
    {
        const {data} = await axios.delete(`https://ctech-chllng-mohorcic.herokuapp.com/api/clients/${idClient}`); 
        dispatch(deleteClient(idClient))
    }
    catch(e)
    {
        alert("error on server")
        console.log(e)
    }
}