import React from "react";
import Settings from "./Settings";
import {ActCreatorSettingAddPostData, ActCreatorUpdateSetAddPost} from "../../redux/settings-reducer";


const SettingsContainer = (props) => {

    let state = props.store.getState()

    const settingsAddPost = () => {
        let action = ActCreatorSettingAddPostData()
        props.store.dispatch(action)
    }

    const updateSetAddPost = (text) => {
        let action = ActCreatorUpdateSetAddPost(text)
        props.store.dispatch(action)
    }

    return (<Settings settingsAddPost = {settingsAddPost}
                      updateSetAddPost = {updateSetAddPost}
                      settingPostData = {state.settingsPage.settingPostData}
                      onSettingPost = {state.settingsPage.onSettingPost}
    />)
}

export default SettingsContainer;