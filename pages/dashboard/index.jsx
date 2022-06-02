import css from "./dashboard.module.css";

import React, { Fragment, useEffect, useState } from "react";
import Router from 'next/router';
import AddClient from "../../src/components/AddClient/AddClient";
import AddTicket from "../../src/components/AddTicket/AddTicket";
import { ClientDetailed, Clients } from "../../src/components/Clients/Clients";
import HeaderLog from "../../src/components/Header/Header";
import SearchBar from "../../src/components/SearchBar/SearchBar";
import { Tickets } from "../../src/components/Tickets/Tickets";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useLoginRedirect } from "../../src/components/helpers/useHooks";
import { TO_LOGIN } from "../../src/ReduxToolkit/consts";
import { cleanClientDetailed } from "../../src/ReduxToolkit/reducers/clientSlice";

export default function Dashboard()
{

    //STATES
    const [show_addTicket, setAddTicket] = useState(false);
    const [show_addClient, setAddClient] = useState(false);
    const [show_detailed,setDetailed] = useState(false);
    const [show_tickets,setTickets] = useState(false);

    //REDUX
    const {lenguage,theme} = useSelector( state => state.customs );
    const {user,status} = useSelector( state => state.user);
    const dispatch = useDispatch()
    
    //EFFECTS
    useEffect(() => { if(!Object.keys(user).length) Router.push('/') },[user])

    //HANDLE 
    const handle_show_client = () => setAddClient(!show_addClient);
    const handle_show_detailed = () => 
    {
        setDetailed(!show_detailed)
        dispatch( cleanClientDetailed() )
    };
    const handle_show_tickets = () => setTickets(!show_tickets)

    const handle_show_newTicket = () =>
    {
        setDetailed(!show_detailed);
        setAddTicket(!show_addTicket);
    } 
    const handle_back_detailed = () =>
    {
        setAddTicket(false);
        setDetailed(true);
    }

    //VARIABLE FOR SHOW

    let middle_show = "";
    if(show_tickets) middle_show = <Tickets handle_show_tickets={handle_show_tickets}/>;
    else if(show_detailed) middle_show = <ClientDetailed token={user.accessToken} handle_show_new={handle_show_newTicket} handle_back={handle_show_detailed}/>;
    else middle_show = <Clients handle_show_detailed={handle_show_detailed}/>

    const show_add = (
        <div id={css.dashboardCont__back1}>
            <div id={css.backCancel} onClick={ show_addClient ? handle_show_client : handle_show_newTicket} > <FontAwesomeIcon icon={ faTimes } /> </div>
            {show_addClient ? <AddClient handle_show={handle_show_client}/> : <AddTicket handle_show={handle_show_newTicket}/> }
        </div>
    )

    return(
        <Fragment>
            <HeaderLog/>
            <main id={css.dashboardCont}>
                
                <section id={css.dashboardCont__section}>
                    <SearchBar/>

                    <aside id={css.dashboardCont__section__left}>
                        <button id={css.dashboardCont__section__left__clientBut} onClick={handle_show_client}>
                           {lenguage === "english" ? "New Client!" : "Nuevo Cliente!"}
                        </button>

                        <button id={css.dashboardCont__section__left__ticketsBut} onClick={handle_show_tickets}>
                            {show_tickets? "Tickets!" : "Clients!"} 
                        </button>
                    </aside>

                    <div id={css.dashboardCont__section__middle}> 
                        {middle_show} 
                    </div>
                </section>

                { (show_addClient || show_addTicket) && show_add }
                
            </main>
        </Fragment>
    )
}