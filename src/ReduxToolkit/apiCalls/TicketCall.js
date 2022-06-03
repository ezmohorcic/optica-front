import axios from "axios";
import { addHistory, monthHistory } from "../reducers/userSlice";

export const getMonthHistory = async (dispatch,idUser,token) =>
{  
  const date = new Date().toDateString().split(" ")[1];
  console.log(date);
  
    try
    {
        const {data} = await axios.get(`http://localhost:3001/api/order/month/${idUser}?search=${date}`, {headers: {token}}) //https://ctech-chllng-mohorcic.herokuapp.com/api/order/month/6296331a915cc18b78f7480e?search=Jun
        console.log(data,idUser);
        dispatch(monthHistory(data))
    }
    catch(e)
    {
        console.log(e);
    }


}