import React from 'react';
import axios from "axios";
import LoginCard from "../src/components/LoginCard/LoginCard.jsx";
import GlassesCalc from '../src/components/GlassesCalc/GlassesCalc.jsx';

axios.defaults.baseURL=process.env.REACT_APP_API;

export default function index()
{
    return(
           <main id='loginShow'>
                <LoginCard/>
                <div id="glassesCalcCont">
                <GlassesCalc submit={()=>{}}/>
                </div>
           </main>
    )
}