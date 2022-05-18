import css from "./Tickets.module.css"

import React from "react";
import { useDispatch, useSelector } from "react-redux";


export const TicketCard = ({ticket}) =>
{
    <article class={css.ticketCard}>
        <h2>{`${ticket.client.name} ${ticket.client.surname}`}</h2>

        <p>{ticket.glasses}</p>

        <p>{ticket.date}</p>

        <button>{ticket.done? "Done" : "On going"}</button>
    </article>
}


export const Tickets = () =>
{
    //REDUX 
    const dispatch = useDispatch();
    const tickets = useSelector( state => state.tickets)

    //VARIABLES FOR SHOW
    const tickets_arr = tickets.map( (ticket,i) => <TicketCard key={"ticket_"+i} ticket={ticket}/>)

    return(
        <main id={css.maintickets}>

        </main>
    )
}