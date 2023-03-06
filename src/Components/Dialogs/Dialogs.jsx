import React from 'react'
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";



const Dialogs = () => {

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

    const dialogsElements = DialogsData.map(p => <DialogItem name={p.name} id={p.id}/>)
    const messagesElements = MessagesData.map(p => <Message message={p.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs