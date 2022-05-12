import React from 'react';
import { useSelector } from 'react-redux';


export default function dummy()
{
    const user = useSelector( state => state.user)

    return(
        <h2>dummy</h2>
    )
}