import axios from "axios";
import { addClient, changeClientDetGlasses, changeClientGlasses } from "../reducers/clientSlice";
import { addOrder } from "../reducers/orderSlice";

export const addClientCall = async (dispatch,info) =>{
    try
    {
        console.log(info)
        const {data} = await axios.post("https://ctech-chllng-mohorcic.herokuapp.com/api/clients",info); 
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
        const {data} = await axios.post("https://ctech-chllng-mohorcic.herokuapp.com/api/order/"+idClient,info); 
        console.log(data)
        dispatch(addOrder(data));
        dispatch(changeClientDetGlasses(data.glasses))
    }
    catch(err)
    {
        console.log(err)
        alert("error on server")
    }
}

