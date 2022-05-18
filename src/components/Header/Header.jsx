import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import css from "./Header.module.css";

import React from "react";
import { useDispatch } from "react-redux";
import { changeLenguage, changeTheme } from "../../ReduxToolkit/reducers/customsSlice";
import { logout } from "../../ReduxToolkit/reducers/userSlice";


const Header = () =>
{

    //REDUX
    const dispatch = useDispatch()
    const {lenguage,theme} = useSelector( state => state.customs );

    //HANDLERS
    const handle_logOut = () => dispatch( logout() );
    const handle_lenguage = () => dispatch( changeLenguage() );
    const handle_theme = () => dispatch( changeTheme() );

    return(
        <header id={css.headerCont}>
            <div id={css.headerCont__logo}>
                L O G O
            </div>

            <div id={css.headerCont__options}>
                <FontAwesomeIcon onClick={handle_theme} icon={ theme==="dark" ? faMoon : faSun }/>
                <FontAwesomeIcon onClick={handle_lenguage} icon={ faLanguage }/>
            </div>

            <button id={css.headerCont__logOut} onClick={handle_logOut}>Log Out</button>
        </header>
    )
}

export default Header;