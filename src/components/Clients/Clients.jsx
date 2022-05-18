import css from "./Clients.module.jsx"

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

const copy = (e) => navigator.clipboard.writeText(e).then(alert("Copied!"));

export const ClientDetailed = () =>
{

    //REDUX
    const detailed = useSelector( state => state.detailedClient );
    const {lenguage,theme} = useSelector( state => state.customs );
    const dispatch = useDispatch();

    //HANDLERS
    const handle_newTicket = () =>
    {
        dispatch(  )
    }

    return(
        <article id={css.detailedClient}>

            <h2 id={css.detailedClient__name}>{`${detailed.name} ${detailed.surname}`}</h2>
            <button id={detailedClient__addNew} onClick={handle_newTicket} > <FontAwesomeIcon icon={ faPlusCircle } /> | Order </button>

            <section className={css.detailedClient__section}>
                <h3>{lenguage === "english" ? "Glasses: " : "Anteojo: "}</h3>
                <p>{detailed.actualGlasses}</p> 
            </section>

            <section className={css.detailedClient__section}>
                <h3>{lenguage === "english" ? "Contact: " : "Contacto: "} </h3>

                    <div id={css.detailedClient__contactPiece}>
                        <strong>{lenguage === "english" ? "CellPhone: " : "Telefono: "}</strong>
                        <p>{detailed.phoneNumber}</p>
                        <FontAwesomeIcon icon={ faCopy } onClick={copy(detailed.phoneNumber)}/>
                    </div>


                    <div id={css.detailedClient__contactPiece}>
                        <strong>E-mail</strong>
                        <p>{detailed.email}</p>
                        <FontAwesomeIcon icon={ faCopy } onClick={copy(detailed.email)}/>
                    </div>
            </section>
        </article>
    )
}

export const ClientCard = ({client}) =>
{
    return(
        <article className={css.clientCard}>
            <h2>{`${client.name} ${client.surname}`}</h2>
            <p>{detailed.email}</p>
            <p>{detailed.phoneNumber}</p>
        </article>
    )
}

export const Clients = () =>
{
    //REDUX 
    const clients = useSelector( state => state.clients)

    //VARIABLES FOR SHOW
    const clients_show = clients.map( (client,i) => <ClientCard key={"client_card_"+i} client={client} /> )

    return(
        <main id={css.clientsMain}>
            {clients_show}
        </main>
    )
}