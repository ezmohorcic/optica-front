import axios from "axios";
import { addOrder } from "../reducers/orderSlice";

export const addOrderCall = async (dispatch,info,token) =>{
    try
    {
        const {data} = await axios.post(`https://ctech-chllng-mohorcic.herokuapp.com/api/order/${info.client}`, info, {headers: {token}}); 

        dispatch(addOrder(data));
    }
    catch(err)
    {
        alert("error on server")
    }
}