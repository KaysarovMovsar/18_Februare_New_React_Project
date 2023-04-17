import React from "react";
import Mypost from "./MyPost";
import {onPostChangedActionCreator, profilePageAddActionCreator} from "../../../redux/profile-reducer";

const MypostContainer = (props) => {
    let state = props.store.getState();

    let profilePageAdd = () => {
        props.store.dispatch(profilePageAddActionCreator());
    }

    let onPostChanged = (text) => {
        let action = onPostChangedActionCreator(text);
        props.store.dispatch(action);
    }

    return (
        < Mypost updateNewPostText={onPostChanged} addPost={profilePageAdd} postData={state.profilePage.postData}
                 onPostText={state.profilePage.onPostText}
        />
    );
}

export  default MypostContainer;