import React from 'react'
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";



const Dialogs = (props) => {

    const dialogsElements = props.state.DialogsData.map(p => <DialogItem name={p.name} id={p.id}/>)
    const messagesElements = props.state.MessagesData.map(p => <Message message={p.message}/>)
    // {props.state.dialogPage}

    let dialogsPostElement = React.createRef()

    let dialogsAddPost = () => {
        let text = dialogsPostElement.current.value
        alert(text)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div className={s.container}>
                <div>
                    <textarea ref={dialogsPostElement}></textarea>
                </div>
                <div>
                    <button onClick={dialogsAddPost}>Add Post</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs