import css from "./Clients.module.css"

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { faPlusCircle, faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { LOADING_0, SERVER_4xx, SERVER_5xx, STARTING_STATUS } from "../../ReduxToolkit/consts.js";
import { getClientDetailedCall, getClientNextCall } from "../../ReduxToolkit/apiCalls/ClientCall.js";

const copy = (e) => navigator.clipboard.writeText(e).then(alert("Copied!"));

export const ClientDetailed = ({handle_show_new, handle_back}) =>
{

    //REDUX
    const {client,status} = useSelector( state => state.clientDetailed );
    console.log(client)
    const {lenguage,theme} = useSelector( state => state.customs );
    const dispatch = useDispatch();

    //HANDLERS
    const handle_copy_phone = () => copy(client.phoneNumber);
    const handle_copy_email = () => copy(client.email)


    if(status === STARTING_STATUS) return(<div>Loading</div>)
    if(status === SERVER_5xx) return( <div> Error </div>) 
    return(
        <article id={css.detailedClient}>

            <h2 id={css.detailedClient__name}>{`${client.name} ${client.surname}`}</h2>

            <button id={css.detailedClient__addNew} onClick={handle_back} > 
                <FontAwesomeIcon icon={ faTimes } /> | {lenguage === "english" ? "Back" : "Atras"} 
            </button>
            <button id={css.detailedClient__addNew} onClick={handle_show_new} > 
                <FontAwesomeIcon icon={ faPlusCircle } /> | Order 
            </button>
            

            <section className={css.detailedClient__section}>
                <h3>{lenguage === "english" ? "Glasses: " : "Graduacion: "}</h3>
                <p>Cerca: {client.actualGlasses[0] ? client.actualGlasses[0] : "X"}</p> 

                <p>Lejos: {client.actualGlasses[1] ? client.actualGlasses[1] : "X"}</p> 
            </section>

            <section className={css.detailedClient__section}>
                <h3>{lenguage === "english" ? "Contact: " : "Contacto: "} </h3>

                    <div id={css.detailedClient__contactPiece}>
                        <strong>{lenguage === "english" ? "CellPhone: " : "Telefono: "}</strong>
                        <p>{client.phoneNumber}</p>
                        <FontAwesomeIcon icon={ faCopy } onClick={handle_copy_phone}/>
                    </div>


                    <div id={css.detailedClient__contactPiece}>
                        <strong>E-mail</strong>
                        <p>{client.email}</p>
                        <FontAwesomeIcon icon={ faCopy } onClick={handle_copy_email}/>
                    </div>
            </section>
        </article>
    )
}

export const ClientCard = ({client,handle_show_detailed}) =>
{
    //REDUX
    const dispatch = useDispatch()

    //HANDLERS
    const handleShow = () =>
    {
        getClientDetailedCall(dispatch,client._id)
        handle_show_detailed()
    }

    return(
        <article className={css.clientCard}>
            <h2>{`${client.name} ${client.surname}`}</h2>
            <p>{client.email}</p>
            <p>{client.phoneNumber}</p>
            <button id={css.clientCard__button} onClick={handleShow} > <FontAwesomeIcon icon={ faSearch } /> </button>
        </article>
    )
}

export const Clients = ({handle_show_detailed}) =>
{
    //REDUX 
    const dispatch = useDispatch()
    const {clients,status,page} = useSelector( state => state.clients);
    const user = useSelector( state => state.user )
    //ONMOUNT
    useEffect( () =>
    {
        if(!clients.length && user.user._id) getClientNextCall(dispatch,page,user.user._id)
    },[user]);

    //VARIABLES FOR SHOW
    const clients_show = clients.map( (client,i) => <ClientCard key={"client_card_"+i} handle_show_detailed={handle_show_detailed} client={client} /> )

    if(status===LOADING_0 || status===STARTING_STATUS) return (<main>Loading</main>)
    if(status===SERVER_4xx || status===SERVER_5xx) return (<main>Error</main>)
    return(
        <main id={css.clientsMain}>
            {clients_show}
        </main>
    )
}