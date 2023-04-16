import React from 'react';

import MyPost from "../MyPost";
import {ActCreatorAddPostElement, UpdateOnPostChangeActCreator} from "../../../../redux/profile-reducer";


const MyPostContainer = (props) => {

    let state = props.store.getState()

    let addPostElement = () => {
        let action = ActCreatorAddPostElement()
        props.store.dispatch(action)
    }

    let onAddPostChange = (text) => {
        let action = UpdateOnPostChangeActCreator(text)
        props.store.dispatch(action)
    }

    return (
            <MyPost AddPost = {addPostElement}
                    onAddPost = {onAddPostChange}
                    PostsData = {state.profilePage.PostsData}
                    onChangeData = {state.profilePage.onChangeData}
            />

    );
}

export default MyPostContainer;