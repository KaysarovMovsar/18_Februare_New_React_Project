import React from 'react'
import {ActCreatorDialogsPostData, ActCreatorOnPostDialogsData} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";



const DialogsContainer = (props) => {

    let state = props.store.getState()

    let dialogsAddPost = () => {
        let action = ActCreatorDialogsPostData()
        props.store.dispatch(action)
    }

    let onDialogsPost = (text) => {
        let action = ActCreatorOnPostDialogsData(text)
        props.store.dispatch(action)
    }

    return ( <Dialogs AddPost = {dialogsAddPost}
                      onPost = {onDialogsPost}
                      DialogsData = {state.dialogPage.DialogsData}
                      MessagesData = {state.dialogPage.MessagesData}
                      dialogPostData = {state.dialogPage.dialogPostData}
                      onDialogsPost = {state.dialogPage.onDialogsPost}



    />)
}

export default DialogsContainer