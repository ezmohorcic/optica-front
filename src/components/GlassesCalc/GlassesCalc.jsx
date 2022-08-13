import css from "./GlassesCalc.module.css"

import React, { useState } from "react";    
import { useSelector } from "react-redux";


const construct_glass_prescription = ([esf,cil,ang],command) =>
{
    let out = `${command} `
    if( ( parseFloat(esf)<0 && parseFloat(cil)>0 ) || ( parseFloat(esf)>0 && parseFloat(cil)<0 ) )
    {
        out = out + ` ESF: ${esf} CIL: ${cil} , ang: ${ang}°`
    }
    else if( cil == 0 || esf == 0)
    {
        out = out + `${esf !=0? "ESF: " + esf : ""} ${cil!=0? "CIL: " + cil + " ang: " + ang +"°" : ""}`
    }
    else
    {
        out = out + `${esf>0 ? "+" : ""} ${ parseFloat(esf) + parseFloat(cil)} ` + `${cil<0 ? "+" : ""} ${cil*(-1)} , ang: ${parseInt(ang) > 90 ? parseInt(ang) - 90 : parseInt(ang) + 90 }°`
    }

    return out;
}


const GlassInputs = ({setting,state}) =>
{
    //HANDLERS
    const handle_input = ({target}) => setting({...state,[target["name"]]:target.value}) 
    const handle_sig = ({target}) => setting({ ...state, [target["name"]]: state[target["name"]] === "+" ? "-" : "+" })

    return(
        <section className={css.glassInput}>
            ESF: 
                <button className={css.glassInput__button} onClick={handle_sig} name="esf_sig">{state.esf_sig}</button>
                <input type="number" value={state.esf_m} min="0" name="esf_m" id={css.glassesCalc__section__whole} onChange={handle_input}/> 
                .
                <select name="esf_f" id={css.glassesCalc__section__float} onChange={handle_input}>
                   <option value="">0</option>
                   <option value=".25">25</option>
                   <option value=".50">50</option>
                   <option value=".75">75</option> 
                </select>

            CIL: 
                <button className={css.glassInput__button} onClick={handle_sig} name="cil_sig">{state.cil_sig}</button>
                <input type="number" value={state.cil_m} min="0" name="cil_m" id={css.glassesCalc__section__whole} onChange={handle_input}/> 
                .
                <select name="cil_f" id={css.glassesCalc__section__float} onChange={handle_input}>
                   <option value="">0</option>
                   <option value=".25">25</option>
                   <option value=".50">50</option>
                   <option value=".75">75</option> 
                </select>

            ANG: 
                <input type="number" value={state.cil_ang} name="cil_ang" min="0" max="180" id={css.glassesCalc__section__ang} onChange={handle_input}/> 
            °
        </section>
    )
}

export const GlassesCalc = ({submit}) =>
{
    //STATES
    const [right, setRight] = useState({ esf_sig:"+", esf_m:0, esf_f:"", cil_sig:"+", cil_m:0, cil_f:"", cil_ang:0})
    const [left, setLeft] = useState({ esf_sig:"+" ,esf_m:0, esf_f:"", cil_sig:"+", cil_m:0, cil_f:"",cil_ang:0})
    //REDUX
    const user = useSelector( state => state.user.user);

    //HANDLES
    const handle_construct = () =>
    {

        const right_full = 
        [
            (right.esf_sig =="+"? "":"-") + (right.esf_m + right.esf_f),
            (right.cil_sig =="+"? "":"-") + (right.cil_m + right.cil_f),
            right.cil_ang
        ];
        const left_full = 
        [
            (left.esf_sig =="+"? "":"-") + (left.esf_m + left.esf_f), 
            (left.cil_sig =="+"? "":"-") + (left.cil_m + left.cil_f), 
            left.cil_ang
        ];
        return [construct_glass_prescription(right_full,"DER: "), construct_glass_prescription(left_full,"IZQ: ")]
    }

    const handle_show_construct = () =>
    {
        const [right_show, left_show] = handle_construct()
        return (
            <section className={css.construct}> 
                <p>{right_show}</p> 
                <p>{left_show}</p> 
            </section>
        )
    }
    
    const handle_submit = (setting) => (newState) =>
    {
        setting(newState);
        const [right_show, left_show] = handle_construct()
        submit( right_show + " " +left_show )
    }

    //VARIABLES FOR DISPLAY

    return(
        <article id={css.glassesCalc}>
            
            <section>
                <GlassInputs setting={handle_submit(setRight)} state={right} />
                <GlassInputs setting={handle_submit(setLeft)} state={left} />
            </section>

            {handle_show_construct()}

        </article>
    )
}


export default GlassesCalc;