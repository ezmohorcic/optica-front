import css from "./SearchBar.module.css";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { getSearchCall } from "../../ReduxToolkit/apiCalls/ClientCall";
import { loadingClients } from "../../ReduxToolkit/reducers/clientSlice";

const SearchBar = () =>
{

    //STATE
    const [search,setSearch] = useState("")

    //REDUX
    const dispatch = useDispatch();
    const {user} = useSelector( state => state.user )

    //HANDLERS
    const handle_search = () =>
    {
        dispatch(loadingClients())
        getSearchCall(dispatch,search,user._id)
    }
    const handle_input = ({target}) => setSearch(target.value)


    return(
        <aside id={css.searchbarCont}>
            <button onClick={handle_search} id={css.searchbarCont__button}> 
                <FontAwesomeIcon icon={ faSearch } /> 
            </button>
            
            <input id={css.searchbarCont__innput} type="text" onChange={handle_input}/>
        </aside>
    )
}

export default SearchBar;