import css from "./Tickets.module.css"

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { LOADING_0, SERVER_4xx, SERVER_5xx, STARTING_STATUS } from "../../ReduxToolkit/consts";
import { changeOrderStatus } from "../../ReduxToolkit/reducers/orderSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";


export const TicketCard = ({ticket}) =>
{

    //REDUX
    const dispatch = useDispatch()

    //HANDLES
    const handle_change = ( ) =>    
    {
        dispatch(changeOrderStatus(ticket._id))
    }

    return (
        <article className={css.ticketCard}>
            <h2>{`${ticket.client.name} ${ticket.client.surname}`}</h2>

            <p>{ticket.glasses}</p>

            <p>{ticket.date}</p>

            <button onClick={handle_change}>{ticket.done? "Done" : "On going"}</button>
        </article>
    )

}


export const Tickets = ({handle_show_tickets}) =>
{
    //REDUX 
    const dispatch = useDispatch();
    const {status,orders} = useSelector( state => state.orders)

    //VARIABLES FOR SHOW
    const tickets_arr = orders.map( (ticket,i) => <TicketCard key={"ticket_"+i} ticket={ticket}/>)

    if (status === STARTING_STATUS || status === LOADING_0) return (<div> loading</div>)
    if (status === SERVER_5xx || status === SERVER_4xx) return (<div> Error</div>)
    return(
        <main id={css.maintickets}>
            {tickets_arr}

            <button onClick={handle_show_tickets}> <FontAwesomeIcon icon={ faTimes } /> | Back </button>
        </main>
    )
}