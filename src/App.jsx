import React, { Fragment } from "react";
import axios from "axios"
import Link from "next/link";
axios.defaults.baseURL=process.env.REACT_APP_API;

export default function App() {

    return (
        <div id="appCont">
            <h1>Testing</h1>
        </div>
    );

}
