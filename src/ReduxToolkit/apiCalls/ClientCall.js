import axios from "axios";
import { changeClientDetInfo, deleteClient, getClientDetailed, newPageClients } from "../reducers/clientSlice";

export const getClientDetailedCall = async (dispatch,info,token) =>{
    try
    {
        const {data} = await axios.get("https://ctech-chllng-mohorcic.herokuapp.com/api/clients?idClient="+info, {headers: {token}}); 
        dispatch(getClientDetailed(data));
    }
    catch(err)
    {
        alert("error on server");
    }
}


export const getSearchCall = async (dispatch,search,idUser,token) =>
{
    try
    {
        const {data} = await axios.get(`https://ctech-chllng-mohorcic.herokuapp.com/api/clients/search/${idUser}?search=${search}`, {headers: {token}}); 
        dispatch(newPageClients(data))
    }
    catch(e)
    {
        alert("error on server")
        console.log(e)
    }
}


export const getClientNextCall = async (dispatch,page,idUser,token) =>
{
    try
    {
        console.log("getClientNextCall",idUser)
        const {data} = await axios.get(`https://ctech-chllng-mohorcic.herokuapp.com/api/clients/search/${idUser}?page=${page+1}`, {headers: {token}}); 
        dispatch(newPageClients(data))
    }
    catch(e)
    {
        alert("error on server")
        console.log(e)
    }
}

export const changeClientCall = async (dispatch,idClient,info,token) =>
{
    try
    {
        const {data} = await axios.put(`https://ctech-chllng-mohorcic.herokuapp.com/api/clients/${idClient}`, info, {headers: {token}}); 
        dispatch( changeClientDetInfo({...data, client:idClient}) )
    }
    catch(e)
    {
        alert("error on server")
        console.log(e)
    }
}

export const deleteClientCall = async (dispatch,idClient,token) =>
{
    try
    {
        const {data} = await axios.delete(`https://ctech-chllng-mohorcic.herokuapp.com/api/clients/${idClient}`, {headers: {token}}); 
        dispatch(deleteClient(idClient))
    }
    catch(e)
    {
        alert("error on server")
        console.log(e)
    }
}