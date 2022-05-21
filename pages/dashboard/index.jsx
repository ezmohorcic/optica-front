import css from "./dashboard.module.css";

import React, { Fragment, useState } from "react";
import AddClient from "../../src/components/AddClient/AddClient";
import AddTicket from "../../src/components/AddTicket/AddTicket";
import { ClientDetailed, Clients } from "../../src/components/Clients/Clients";
import HeaderLog from "../../src/components/Header/Header";
import SearchBar from "../../src/components/SearchBar/SearchBar";
import { Tickets } from "../../src/components/Tickets/Tickets";
import { useSelector } from "react-redux";



export default function Dashboard()
{

    //STATES
    const [show_addTicket, setAddTicket] = useState(false);
    const [show_addClient, setAddClient] = useState(false);
    const [show_detailed,setDetailed] = useState(false);
    const [show_tickets,setTickets] = useState(false);

    //REDUX
    const {lenguage,theme} = useSelector( state => state.customs );

    //HANDLE 
    const handle_show_client = () => setAddClient(!show_addClient);
    const handle_show_detailed = () => setDetailed(!show_detailed);
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
    else if(show_detailed) middle_show = <ClientDetailed handle_show_new={handle_show_newTicket} handle_back={handle_show_detailed}/>;
    else middle_show = <Clients handle_show_detailed={handle_show_detailed}/>
    return(
        <Fragment>
            <HeaderLog/>
            <main id={css.dashboardCont}>
                
                <section id={css.dashboardCont__section}>
                    <SearchBar/>

                    <div id={css.dashboardCont__section__middle}> 
                        {middle_show} 
                    </div>

                    <aside id={css.dashboardCont__section__left}>
                        <button id={css.dashboardCont__section__left__clientBut} onClick={handle_show_client}>
                           {lenguage === "english" ? "New Client!" : "Nuevo Cliente!"}
                        </button>

                        <button id={css.dashboardCont__section__left__ticketsBut} onClick={handle_show_tickets}>
                            {show_tickets? "Tickets!" : "Clients!"} 
                        </button>
                    </aside>
                </section>

                {show_addClient && <div onClick={handle_show_client}  id={css.dashboardCont__back1}><AddClient handle_show={handle_show_client}/></div>}
                {show_addTicket && <div onClick={handle_show_newTicket} id={css.dashboardCont__back1}><AddTicket handle_show={handle_show_newTicket}/></div>}
                
            </main>
        </Fragment>
    )
}