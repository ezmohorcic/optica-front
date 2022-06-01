import css from "./AddTicket.module.css";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addHistoryCall } from "../../ReduxToolkit/apiCalls/AddCall";
import GlassesCalc from "../GlassesCalc/GlassesCalc";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const AddTicket = ({handle_show}) =>
{
    //REDUX
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user)
    const {client,status} = useSelector( state => state.clientDetailed );
    const {lenguage,theme} = useSelector( state => state.customs );

    //STATES
    const [inputs,setInputs] = useState({user:user._id,client:client._id,glasses:[...client.actualGlasses],date:new Date().toDateString(),done:false,prices:["0","0","0","0"],details:""});

    //HANDLER
    const handle_submit = (e) =>
    {
        e.preventDefault();
        addHistoryCall(dispatch,inputs,client._id);
        handle_show();
    }

    const handle_add_glasses_short = (entry) => setInputs({ ...inputs, glasses:[entry,inputs.glasses[1]] });
    const handle_add_glasses_long = (entry) => setInputs({ ...inputs, glasses:[inputs.glasses[0],entry] });

    const handle_price_far = ({target}) => setInputs({ ...inputs, prices:[inputs.prices[0],target.value] });
    const handle_price_near = ({target}) => setInputs({ ...inputs, prices:[target.value,inputs.prices[1]] });

    const handle_price_glasses_far = ({target}) => setInputs({ ...inputs, prices:[ inputs.prices[0], inputs.prices[1], target.value ] });
    const handle_price_glasses_close = ({target}) => setInputs({ ...inputs, prices:[ inputs.prices[0], inputs.prices[1], inputs.prices[2], target.value ] });
        
    const handle_details = ({target}) => setInputs({ ...inputs, details:target.value })

    const handle_cancel = (e) =>
    {
        e.preventDefault();
        handle_show();
    }

    //VARIABLES FOR DISPLAY

    return(
        <article id={css.addclientCont}>
            <h2 id={css.addclientCont__h2}>
                {lenguage === "english" ? "Add New Order" : "Agregar Nueva Orden"} 
                <button onClick={ handle_cancel }> 
                    <FontAwesomeIcon icon={ faTimes } /> | Cancel 
                </button>
            </h2>

            <section>
                <h3 className={css.addclientCont__h3}>{lenguage==="english" ? "Far" : "Lejos"}</h3>
                
                $<input className={css.addclientCont__price} type="number" min="0" placeholder={lenguage === "english" ? "price" : "cristales"} name="price_far" onChange={handle_price_far}/>
                
                $<input className={css.addclientCont__price} onChange={handle_price_glasses_far} type="number" min={"0"} placeholder={lenguage === "english" ? " glasses price" : "armazon"}/>
                
                <GlassesCalc submit={ handle_add_glasses_long } />
            </section>

            
            <section>
                <h3 className={css.addclientCont__h3}>{lenguage==="english" ? "Near" : "Cerca"}</h3>
                
                $<input className={css.addclientCont__price} type="number" min="0" placeholder={lenguage === "english" ? "price" : "cristales"} name="price_near" onChange={handle_price_near}/>
                
                $<input className={css.addclientCont__price} onChange={handle_price_glasses_close} type="number" min={"0"} placeholder={lenguage === "english" ? " glasses price" : "armazon"}/>
                
                <GlassesCalc submit={ handle_add_glasses_short } />
            </section>

            <section>
                <h3 className={css.addclientCont__h3}>{lenguage === "english" ? "Details" : "Detalles"}</h3>
                <textarea className={css.addclientCont__details} name="details" id="" cols="50" rows="3" onChange={handle_details}/>
            </section>



            <button onClick={handle_submit} id={css.addclientCont__button}> {lenguage === "english" ? "Add New" : "Agregar"} </button>
        </article>
    )
}


export default AddTicket;