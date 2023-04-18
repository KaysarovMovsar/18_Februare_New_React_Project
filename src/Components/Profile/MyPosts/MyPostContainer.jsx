import React from "react";
import Mypost from "./MyPost";
import {onPostChangedActionCreator, profilePageAddActionCreator} from "../../../redux/profile-reducer";
import StoreContext from "../../../StoreContext";

const MypostContainer = (props) => {
    return (
        <StoreContext.Consumer >
            {
            (store) => {
                let state = store.getState();
                let profilePageAdd = () => {
                    store.dispatch(profilePageAddActionCreator());
                }
                let onPostChanged = (text) => {
                    let action = onPostChangedActionCreator(text);
                    store.dispatch(action);
                }
                return (
                    < Mypost updateNewPostText={onPostChanged}
                             addPost={profilePageAdd}
                             postData={state.profilePage.postData}
                             onPostText={state.profilePage.onPostText}/>
                )
            }
        }
        </StoreContext.Consumer>
    );
}

export  default MypostContainer;