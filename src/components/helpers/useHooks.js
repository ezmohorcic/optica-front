import { useSelector } from "react-redux";
import Router from 'next/router';
import { FROM_LOGIN, TO_LOGIN } from "../../ReduxToolkit/consts";

export const useLoginRedirect = (command) =>
{
    const user = useSelector( state => state.user.user)

    switch (command) {
        case TO_LOGIN:
            return () => { if(!Object.keys(user).length) Router.push('/login') }
        break;

        case FROM_LOGIN:
            return () => { if(Object.keys(user).length) Router.push('/dummy') }
        break;
    
        default:
        break;
    }
}