import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from "../src/ReduxToolkit/store";


import App from "../src/App.jsx";

export default function index()
{
    return(
        <Provider store={store}>
            <App/>
        </Provider>
    )
}