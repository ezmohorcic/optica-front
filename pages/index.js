import React from 'react';
import { Provider } from 'react-redux';
import axios from "axios";
axios.defaults.baseURL=process.env.REACT_APP_API;

import App from "../src/App.jsx";

export default function index()
{
    return(
            <App/>
    )
}