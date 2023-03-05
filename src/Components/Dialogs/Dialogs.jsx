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

const DialogsData = [
    {id: 1, name: 'Movsar'},
    {id: 2, name: 'Ahmad'},
    {id: 3, name: 'Iman'},
    {id: 4, name: 'Bilal'},
    {id: 5, name: 'Lilia'},
]

const MessagesData = [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Yep'},
    {id: 4, message: 'See you tomorrow'},
    {id: 5, message: 'Have a good meal!'},
]

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <Dialog name={DialogsData[0].name} id={DialogsData[0].id}/>
                <Dialog name={DialogsData[1].name} id={DialogsData[1].id}/>
                <Dialog name={DialogsData[2].name} id={DialogsData[2].id}/>
                <Dialog name={DialogsData[3].name} id={DialogsData[3].id}/>
                <Dialog name={DialogsData[4].name} id={DialogsData[4].id}/>
            </div>
            <div className={s.messages}>
                <Message message={MessagesData[0].message}/>
                <Message message={MessagesData[1].message}/>
                <Message message={MessagesData[2].message}/>
                <Message message={MessagesData[3].message}/>
                <Message message={MessagesData[4].message}/>
            </div>
        </div>
    )
}

export default Dialogs