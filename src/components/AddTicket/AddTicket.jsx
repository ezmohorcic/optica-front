import css from "./AddTicket.module.css";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addClientCall, addHistoryCall } from "../../ReduxToolkit/apiCalls/AddCall";
import GlassesCalc from "../GlassesCalc/GlassesCalc";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const inputsNames = ["name","surname","email","phoneNumber"];
const inputsEng = ["name","surname","email","phone number"];
const inputsEsp = ["nombre","apellido","email","telefono"];

const AddTicket = ({handle_show}) =>
{
    //REDUX
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user)
    const {client,status} = useSelector( state => state.clientDetailed );
    const {lenguage,theme} = useSelector( state => state.customs );

    //STATES
    const [inputs,setInputs] = useState({user:user._id,client:client._id,glasses:client.actualGlasses,date:new Date().toDateString(),done:false});

    //HANDLER
    const handle_submit = (e) =>
    {
        e.preventDefault();
        addHistoryCall(dispatch,inputs,client._id);
        handle_show()
    } 
    const handle_add_glasses_short = (entry) => 
    {
        setInputs({ ...inputs, glasses:[entry,inputs.glasses[1]] })
    }
    const handle_add_glasses_long = (entry) => 
    {
        setInputs({ ...inputs, glasses:[inputs.glasses[0],entry] })
    }
    const handle_cancel = (e) =>
    {
        e.preventDefault();
        handle_show()
    }

    //VARIABLES FOR DISPLAY

    return(
        <article id={css.addclientCont}>
            <h2 id={css.addclientCont__h2}> {lenguage === "english" ? "Add New Order" : "Agregar Nueva Orden"} </h2>
            <button onClick={ handle_cancel }> <FontAwesomeIcon icon={ faTimes } /> | Cancel </button>

            <h3>{lenguage==="english" ? "Near" : "Cerca"}</h3>
            <GlassesCalc submit={ handle_add_glasses_short } />

            <h3>{lenguage==="english" ? "Far" : "Lejos"}</h3>
            <GlassesCalc submit={ handle_add_glasses_long } />

            <button onClick={handle_submit} id={css.addclientCont__button}> {lenguage === "español" ? "Agregar" : "Add New"} </button>
        </article>
    )
}


export default AddTicket;