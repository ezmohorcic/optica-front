import axios from "axios";
import { loginError, loginSuccess } from "../reducers/userSlice";

export const loginCall = async (dispatch,info) =>{
    try
    {
        console.log(info)
        const {data} = await axios.post("https://ctech-chllng-mohorcic.herokuapp.com/api/login",info); 
        dispatch(loginSuccess(data));
    }
    catch(err)
    {
        dispatch(loginError(err.response.status));
    }
}
