import axios from "axios";
import { addOrder } from "../reducers/orderSlice";

export const addOrderCall = async (dispatch,info) =>{
    try
    {
        const {data} = await axios.post(`http://localhost:3001/api/order/${info.client}`,info); 
        console.log(data)
        dispatch(addOrder(data));
    }
    catch(err)
    {
        alert("error on server")
    }
}