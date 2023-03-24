import React from 'react'
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import Post from "../Profile/MyPosts/Post/Post";


const Dialogs = (props) => {

    const dialogsElements = props.state.DialogsData.map(p => <DialogItem name={p.name} id={p.id}/>)
    const messagesElements = props.state.MessagesData.map(p => <Message message={p.message}/>)
    const postElements = props.state.dialogPostData.map(p => <Post message={p.message} LikesCount={p.LikesCount}/>)
    // {props.state.dialogPage}


    let dialogsPostElement = React.createRef()

    let dialogsAddPost = () => {
        props.dialogsAddPost()
    }

    let onDialogsPost = () => {
        let text = dialogsPostElement.current.value
         props.updateOnpostDialog(text)
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
                    <textarea ref={dialogsPostElement} onChange={onDialogsPost} value={props.state.onDialogsPost}/>
                </div>
                <div>
                    <button onClick={dialogsAddPost}>Add Post</button>
                </div>
                {postElements}
            </div>
        </div>
    )
}

export default Dialogs