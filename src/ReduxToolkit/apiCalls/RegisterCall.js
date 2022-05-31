import axios from "axios";
import Router from 'next/router';
import { loginError, loginSuccess } from "../reducers/userSlice";

export const registerCall = async (dispatch,info) =>{
    try
    {
        const res = await axios.post("https://ctech-chllng-mohorcic.herokuapp.com/api/register",info); 
        if(res.status===200)
        {
            Router.push("/login")
            alert("Successful Register");
        }
    }
    catch(err)
    {
        console.log(err)
        dispatch(loginError("error"));
    }
}