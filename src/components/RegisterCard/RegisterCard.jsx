import css from "./RegisterCard.module.css"
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginCall } from "../../ReduxToolkit/apiCalls/LogInCall";
import { inputsReducer } from "../helpers/inputsReducer";
import { useLoginRedirect } from "../helpers/useHooks";
import { FROM_LOGIN } from "../../ReduxToolkit/consts";
import { registerCall } from "../../ReduxToolkit/apiCalls/RegisterCall";


const reg_email = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const reg_password = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

const inputsNames=["email","password","repeat_password","username"];

 const RegisterCard = () =>
{
    //STATES
    const [inputs,setInputs] = useState({email:"",password:"",repeat_password:"",username:""});
    const [errors,setErrors] = useState({})


    //REDUX
    const dispatch = useDispatch();
    const {user,status} = useSelector( state => state.user);
    const redirect = useLoginRedirect(FROM_LOGIN,user)
    
    //ON MOUNT
    useEffect(redirect,[user]);

    //HANDLERS
    const handle_error = () =>
    {
        const manageErrors={};
        if(!reg_email.test(inputs.email)) manageErrors.email="Not a valid email";
        if(inputs.password !== inputs.repeat_password) manageErrors="passwords don't match";
        //if(!reg_password.test(inputs.password)) manageErrors.password="Password needs at least: one letter and one number";

        if(!Object.keys(manageErrors).length) return true;
        else setErrors(manageErrors);
    }
    const handle_submit = () => { if(handle_error()) registerCall(dispatch,inputs) }
    
    const handleInput = ({target}) => setInputs({...inputs,[target["name"]]:target.value}) ;
    const inputing = inputsReducer(inputs,handleInput,css);

    //VARIABLES FOR SHOW

    const inputs_show = inputsNames.map(inputing);
    const errores_show = Object.getOwnPropertyNames(errors).map( (element,i) => <small key={"error_"+i}>{errors[element]}</small> )

    return(
        <div id={css.registerCard}>
            {inputs_show}
            <button onClick={handle_submit} id={css.registerCard__submit}>Register</button>
            {errores_show}
        </div>
    )
}


export default RegisterCard;