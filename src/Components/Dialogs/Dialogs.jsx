import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import Post from "../Profile/MyPosts/Post/Post";
import {ActCreatorDialogsPostData, ActCreatorOnPostDialogsData} from "../../redux/dialogs-reducer";



const Dialogs = (props) => {

    const dialogsElements = props.DialogsData.map(p => <DialogItem name={p.name} id={p.id}/>)
    const messagesElements = props.MessagesData.map(p => <Message message={p.message}/>)
    const postElements = props.dialogPostData.map(p => <Post message={p.message} LikesCount={p.LikesCount}/>)
    // {props.state.dialogPage}


    let dialogsPostElement = React.createRef()

    let dialogsAddPost = () => {
        props.dialogsAddPost()
    }

    let onDialogsPost = () => {
        let text = dialogsPostElement.current.value
        props.onDialogsPosts(text)
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
                    <textarea ref={dialogsPostElement} onChange={onDialogsPost} value={props.onDialogsPost}/>
                </div>
                <div>
                    <button onClick={dialogsAddPost}>Dialogs Post</button>
                </div>
                {postElements}
            </div>
        </div>
    )
}

export default Dialogs