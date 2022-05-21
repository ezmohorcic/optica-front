import axios from "axios";
import { addClient, changeClientDetGlasses, changeClientGlasses } from "../reducers/clientSlice";
import { addOrder } from "../reducers/orderSlice";

export const addClientCall = async (dispatch,info) =>{
    try
    {
        console.log(info)
        const {data} = await axios.post("http://localhost:3001/api/clients",info); 
        console.log(data)
        dispatch(addClient(data));
    }
    catch(err)
    {
        alert("error on server")
    }
}

export const addHistoryCall = async (dispatch,info,idClient) =>{
    try
    {
        const {data} = await axios.post("http://localhost:3001/api/order/"+idClient,info); 
        console.log(data)
        dispatch(addOrder(data));
        //dispatch(changeClientGlasses( { client:idClient, glasses:info.glasses } ))
        dispatch(changeClientDetGlasses(data.glasses))
    }
    catch(err)
    {
        console.log(err)
        alert("error on server")
    }
}

