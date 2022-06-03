import css from "./Tickets.module.css"

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LOADING_0, SERVER_4xx, SERVER_5xx, STARTING_STATUS } from "../../ReduxToolkit/consts";
import { changeOrderStatus } from "../../ReduxToolkit/reducers/orderSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { ClientHistory } from "../Clients/Clients";
import { getMonthHistory } from "../../ReduxToolkit/apiCalls/TicketCall";


export const TicketCard = ({ticket}) =>
{
    return (
        <article className={css.ticketCard}>
            <h3>{`${ticket.client.name} ${ticket.client.surname}`}</h3>

            <ClientHistory ticket={ticket}/>
        </article>
    )

}


export const Tickets = ({handle_show_tickets}) =>
{
    //REDUX 
    const dispatch = useDispatch();
    const {status,user} = useSelector( state => state.user)

    //USEEFFECT
    useEffect(()=>
    {
        if(!user.history.length && user._id) getMonthHistory(dispatch,user._id,user.accessToken)
    },[]);
    console.log(user.history)

    //VARIABLES FOR SHOW
    const tickets_arr = user.history?.map( (ticket,i) => <TicketCard key={"ticket_"+i} ticket={ticket}/>)

    if (status === STARTING_STATUS || status === LOADING_0) return (<div> loading</div>)
    if (status === SERVER_5xx || status === SERVER_4xx) return (<div> Error</div>)
    return(
        <main id={css.maintickets}>
            <button onClick={handle_show_tickets}> <FontAwesomeIcon icon={ faTimes } /> | Back </button>

            {tickets_arr}
        </main>
    )
}