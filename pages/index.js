

import React from 'react';
import { Provider } from 'react-redux';
import axios from "axios";
axios.defaults.baseURL=process.env.REACT_APP_API;

import App from "../src/App.jsx";
import LoginCard from "../src/components/LoginCard/LoginCard.jsx";
import GlassesCalc from '../src/components/GlassesCalc/GlassesCalc.jsx';

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