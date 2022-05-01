import React, { Fragment } from "react";
import axios from "axios"
axios.defaults.baseURL=process.env.REACT_APP_API;

export default function App() {

    return (
        <div id="appCont">
            <h1>Testing</h1>
        </div>
    );

}
