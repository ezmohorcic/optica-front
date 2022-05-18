import css from "./AddClient.module.css";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addClientCall } from "../../ReduxToolkit/apiCalls/AddCall";

const inputsNames = ["name","surname","email","phoneNumber"];
const inputsEng = ["name","surname","email","phone number"];
const inputsEsp = ["nombre","apellido","email","telefono"];

const AddClient = () =>
{
    //STATES
    const [inputs,setInputs] = useState({name:"",surname:"",email:"",phoneNumber:"",actualGlasses:""});

    //REDUX
    const dispatch = useDispatch();
    const {language} = useSelector( state => state.customs )

    //HANDLER
    const handle_submit = () => addClientCall(dispatch,inputs);
    
    const handle_input = ({target}) => setInputs({...inputs,[target["name"]]:target.value});


    //VARIABLES FOR DISPLAY
    const inputs_show = inputsNames.map((input,i) => <input 
                                                    key={"addClInput_"+i} 
                                                    class={css.addclientCont__input}
                                                    placeholder={language === "español" ? inputsEsp[i] : inputsEng[i]} 
                                                    type="text" 
                                                    name={input}
                                                    onChange={handle_input}
                                                />)

    return(
        <form id={css.addclientCont} onSubmit={handle_submit}>
            <h2 id={css.addclientCont__h2}> {language === "español" ? "Agregar Nuevo Cliente" : "Add New Client"} </h2>

            {inputs_show}

            <button id={css.addclientCont__button}> {language === "español" ? "Agregar" : "Add New"} </button>
        </form>
    )
}


export default AddClient;