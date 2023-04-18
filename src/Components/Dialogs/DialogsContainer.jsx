import React from 'react'
import {ActCreatorDialogsPostData, ActCreatorOnPostDialogsData} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer = (props) => {

    return (
        <StoreContext.Consumer >
            {
                (store) => {
                    let state = store.getState()

                    let dialogsAddPost = () => {
                        let action = ActCreatorDialogsPostData()
                        store.dispatch(action)
                    }

                    let onDialogsPost = (text) => {
                        let action = ActCreatorOnPostDialogsData(text)
                        store.dispatch(action)
                    }

                    return (
                        <Dialogs AddPost={dialogsAddPost}
                                 onPost={onDialogsPost}
                                 DialogsData={state.dialogPage.DialogsData}
                                 MessagesData={state.dialogPage.MessagesData}
                                 dialogPostData={state.dialogPage.dialogPostData}
                                 onDialogsPost={state.dialogPage.onDialogsPost}/>
                    )
                }
            }
        </StoreContext.Consumer>
    );
}

export default DialogsContainer