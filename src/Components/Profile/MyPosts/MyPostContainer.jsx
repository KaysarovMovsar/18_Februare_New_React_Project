import React from "react";
import Myposts from "./Myposts";
import {onPostChangedActionCreator, profilePageAddActionCreator} from "../../../redux/profile-reducer";

const mypostsContainer = (props) => {
    let state = props.store.getState();

    let profilePageAdd = () => {
        props.store.dispatch(profilePageAddActionCreator());
    }

    let onPostChanged = (text) => {
        let action = onPostChangedActionCreator(text);
        props.store.dispatch(action);
    }

    return (
        <Myposts updateNewPostText={onPostChanged} addPost={profilePageAdd} postData={state.profilePage.postData}
                 onPostText={state.profilePage.onPostText}
        />
    );
}

export  default mypostsContainer;