import React from 'react'
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    const path = "/dialogs/" + props.id
    return <div className={s.dialog}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props) =>{
    return <div className={s.message}>{props.message}</div>
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <Dialog name='Movsar' id='1'/>
                <Dialog name='Ahmad' id='2'/>
                <Dialog name='Iman' id='3'/>
                <Dialog name='Bilal' id='4'/>
                <Dialog name='Lilia' id='5'/>
            </div>
            <div className={s.messages}>
                <Message message='Hello'/>
                <Message message='How are you?'/>
                <Message message='Yep'/>
                <Message message='See you tomorrow'/>
            </div>
        </div>
    )
}

export default Dialogs