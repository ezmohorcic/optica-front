import css from "./LoginCard.module.css"
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginCall } from "../../ReduxToolkit/apiCalls/LogInCall";
import { inputsReducer } from "../helpers/inputsReducer";
import { useLoginRedirect } from "../helpers/useHooks";
import { FROM_LOGIN } from "../../ReduxToolkit/consts";


const inputsNames=["email","password"];

 const LoginCard = () =>
{
    //STATES
    const [inputs,setInputs] = useState({email:"",password:""});
    
    
    //REDUX
    const dispatch = useDispatch();
    const {user,status} = useSelector( state => state.user);
    console.log("21",user)
    const redirect = useLoginRedirect(FROM_LOGIN,user)

    //ON MOUNT
    useEffect( redirect ,[user]);

    //HANDLERS
    
    const handle_submit = () =>loginCall(dispatch,inputs);
    const handleInput = ({target}) => setInputs({...inputs,[target["name"]]:target.value});

    const inputing = inputsReducer(inputs,handleInput);

    //VARIABLES FOR SHOW

    const inputs_show = inputsNames.map(inputing)

    return(
        <div id={css.loginCard}>
            {inputs_show}
            <button onClick={handle_submit} id={css.loginCard__submit}>Log In</button>
        </div>
    )
}


export default LoginCard;