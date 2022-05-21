import { useSelector } from "react-redux";
import Router from 'next/router';
import { FROM_LOGIN, TO_LOGIN } from "../../ReduxToolkit/consts";

export const useLoginRedirect = (command,user) =>
{
    //const {user} = useSelector( state => state.user)
    
    switch (command) {
        case TO_LOGIN:
        return () => { if(!Object.keys(user).length) Router.push('/login') }
       
        case FROM_LOGIN:
        return () => { if(Object.keys(user).length) Router.push('/dashboard') }
    
        default:
        break;
    }
}