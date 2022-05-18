import css from "./SearchBar.module.css";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () =>
{
    return(
        <aside id={css.searchbarCont}>
            <button id={css.searchbarCont__button}> 
                <FontAwesomeIcon icon={ faSearch } /> 
            </button>
            
            <input id={css.searchbarCont__innput} type="text" />
        </aside>
    )
}

export default SearchBar;