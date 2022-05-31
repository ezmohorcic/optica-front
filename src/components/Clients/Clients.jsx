import css from "./Clients.module.css"

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faEdit, faSave } from "@fortawesome/free-regular-svg-icons";
import { faEllipsisH, faPlusCircle, faTimes } from "@fortawesome/free-solid-svg-icons";
import { LOADING_0, SERVER_4xx, SERVER_5xx, STARTING_STATUS } from "../../ReduxToolkit/consts.js";
import { changeClientCall, deleteClientCall, getClientDetailedCall, getClientNextCall } from "../../ReduxToolkit/apiCalls/ClientCall.js";

const copy = (e) => navigator.clipboard.writeText(e).then(alert("Copied!"));


const ClientHistory = ({ticket}) =>
{

    const show_total = ticket.prices.reduce((total,element) => element ? total + parseFloat(element) : total,0)

    return(
        <div className={css.historyCard}>
                
             
            <section className={css.historyCard__section}>
                <strong>Lejos:</strong> 
                <p className={css.__p1}> {ticket.glasses[1] ? ticket.glasses[1] : "X"}</p>
                <p className={css.__p2}>$ {ticket.prices[1]}</p>
            </section>
            
            
            <section className={css.historyCard__section}>
                <strong>Cerca:</strong>
                <p className={css.__p1}> {ticket.glasses[0] ? ticket.glasses[0] : "X"}</p> 
                <p className={css.__p2}>$ {ticket.prices[0]}</p>
            </section>

            <section className={css.historyCard__sectionArm}>
                <strong className={css.__p3}>{"Precio de Armazon:"}</strong>
                <p className={css.__p4}>Ar Lejos : $ {ticket.prices[2]}</p>
                <p className={css.__p4}>Ar Cerca : $ {ticket.prices[3]}</p>
                <p className={css.__p4}>Total : $ {show_total}</p>
            </section>

            <section className={css.historyCard__sectionDet}>
                <strong>{"Detalles:"}</strong>
                <p id={css.historyCard__details}>{ticket.details}</p>
                <small>{ticket.date}</small>
            </section>


        </div>
    )
}
 

export const ClientDetailed = ({handle_show_new, handle_back}) =>
{
    //REDUX
    const {client,status} = useSelector( state => state.clientDetailed );
    const {lenguage,theme} = useSelector( state => state.customs );
    const dispatch = useDispatch();

    //STATE
    const [edit,setEdit] = useState({phoneNumber:client.phoneNumber,email:client.email})
    const [editShow,setEditShow] = useState(false)

    //HANDLERS
    const handle_copy_phone = () => copy(client.phoneNumber);
    const handle_copy_email = () => copy(client.email);
    const handle_change = ({target}) => setEdit({...edit, [target["name"]]:target.value});
    const handle_save = () =>
    {
        changeClientCall(dispatch,client._id,edit);
        setEditShow(!editShow);
    }
    const handle_discard = () => setEditShow(!editShow)


    //VARIABLES FOR SHOW
    const history_arr = client.history?.map( (ticket, i) => <ClientHistory key={"history_card_"+i} ticket={ticket} /> )
    const show_total = client.prices.reduce((total,element) => element ? total + parseFloat(element) : total,0)

    if(status === STARTING_STATUS) return(<div>Loading</div>)
    if(status === SERVER_5xx) return( <div> Error </div>) 
    return(
        <article className={css.detailedClient}>

            <section id={css.detailedClient__buts}>
                <button id={css.detailedClient__buts__addNew} onClick={handle_back} > 
                    <FontAwesomeIcon icon={ faTimes } /> | {lenguage === "english" ? "Back" : "Atras"} 
                </button>

                <button id={css.detailedClient__buts__addNew} onClick={handle_show_new} > 
                    <FontAwesomeIcon icon={ faPlusCircle } /> | Order 
                </button>
            </section>

            <h2 id={css.detailedClient__name}>{`${client.name} ${client.surname}`}</h2>
            
            <section id={css.detailedClient__section}>
                <h3>{lenguage === "english" ? "Glasses: " : "Anteojo: "}</h3>

                <strong>Lejos:</strong>  
                <section className={css.detailedClient__section__info}>
                    <p className={css.detailedClient__section__info__p1}> {client.actualGlasses[1] ? client.actualGlasses[1] : "X"}</p>
                    <p className={css.detailedClient__section__info__p2}>$ {client.prices[1]}</p>
                </section>
                

                <strong>Cerca:</strong>
                <section className={css.detailedClient__section__info}>
                    <p className={css.detailedClient__section__info__p1}> {client.actualGlasses[0] ? client.actualGlasses[0] : "X"}</p> 
                    <p className={css.detailedClient__section__info__p2}>$ {client.prices[0]}</p>
                </section>


                <strong>{"Precio de Armazones:"}</strong>
                <section className={css.detailedClient__section__info}>
                    <p>Ar Lejos: ${client.prices[3]}</p>
                    <p>Ar Cerca: ${client.prices[2]}</p>
                    <p>total: ${show_total}</p>    
                </section>  


            </section>

            <section id={css.detailedClient__section}>
                <h3>{"Detalles:"}</h3>
                <p id={css.detailedClient__details}>{client.details}</p>
                <small>{client.updatedAt.substring(0,10)}</small>
            </section>
            
            <section id={css.detailedClient__sectioncl}>
                <h3>
                    {lenguage === "english" ? "Contact: " : "Contacto: "} 
                    <FontAwesomeIcon id={css.editSvg} onClick={editShow ? handle_save : handle_discard} icon={ editShow ? faSave : faEdit} /> 
                    {editShow && <FontAwesomeIcon id={css.editSvg} onClick={handle_discard} icon={ faTimes } />}
                    </h3>

                    <div id={css.detailedClient__contactPiece}>
                        <strong>{lenguage === "english" ? "CellPhone: " : "Telefono: "}</strong>
                        { editShow ? <input className={css.contactPiece__modify} value={edit.phoneNumber} type="text" name="phoneNumber" onChange={handle_change}/> : <p>{client.phoneNumber}</p> }
                        {!editShow && <FontAwesomeIcon icon={ faCopy } onClick={handle_copy_phone}/>}
                    </div>


                    <div id={css.detailedClient__contactPiece}>
                        <strong>E-mail:</strong>
                        { editShow ? <input className={css.contactPiece__modify} value={edit.email} type="text" name="email" onChange={handle_change}/> : <p>{client.email}</p> }
                        {!editShow && <FontAwesomeIcon icon={ faCopy } onClick={handle_copy_email}/>}
                    </div>
            </section>

            <section id={css.detailedClient__sectionhs}>
                {history_arr}
            </section>
          
        </article>
    )
}

export const ClientCard = ({client,handle_show_detailed}) =>
{
    //STATE
    const [deleted,setDeleted] = useState(0);

    //EFFECT
    useEffect(() =>
    {
        if(deleted===1) alert("Estas por borrar un cliente! Click de nuevo para borrar")
        if(deleted===2) deleteClientCall(dispatch,client._id)
    },[deleted])

    //REDUX
    const dispatch = useDispatch()

    //HANDLERS
    const handleShow = () =>
    {
        getClientDetailedCall(dispatch,client._id)
        handle_show_detailed()
    }
    const handle_copy = ({target}) =>
    {
        copy(target.innerHTML)
    }
    const handle_delete = () =>
    {
        setDeleted(deleted+1);
    }

    return(
        <article className={css.clientCard}>
            <h2 className={css.clientCard__name}>{`${client.name} ${client.surname}`} <FontAwesomeIcon id={css[`deleted_${deleted}`]} onClick={handle_delete} icon={ faTimes } /></h2>

            <div className={css.clientCard__info}>
                <p onClick={handle_copy}>{client.email}</p>
                <p onClick={handle_copy}>{client.phoneNumber}</p>
                <button id={css.clientCard__button} onClick={handleShow} > <FontAwesomeIcon icon={ faEllipsisH } /> </button>
            </div>
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