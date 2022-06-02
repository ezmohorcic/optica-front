import axios from "axios";
import { addClient, changeClientDetGlasses, changeClientGlasses } from "../reducers/clientSlice";
import { addOrder } from "../reducers/orderSlice";

export const addClientCall = async (dispatch,info,token) =>{
    try
    {
        const {data} = await axios.post("https://ctech-chllng-mohorcic.herokuapp.com/api/clients", info, {headers: {token}}); 
        dispatch(addClient(data));
    }
    catch(err)
    {
        alert("error on server")
    }
}

export const addHistoryCall = async (dispatch,info,idClient,token) =>{
    try
    {
        const {data} = await axios.post("https://ctech-chllng-mohorcic.herokuapp.com/api/order/"+idClient, info, {headers: {token}}); 
        dispatch(addOrder(data));
        dispatch(changeClientDetGlasses({glasses:data.glasses,date:data.date,prices:data.prices,details:data.details}))
    }
    catch(err)
    {
        console.log(err)
        alert("error on server")
    }
}

