import axios from "axios";
import { loginError, loginSuccess } from "../reducers/userSlice";

export const loginCall = async (dispatch,info) =>{
    try
    {
        const res = await axios.post("http://localhost:3001/api/login",info); 
        dispatch(loginSuccess(res.data));
    }
    catch(err)
    {
        dispatch(loginError(err.response.status));
    }
}
