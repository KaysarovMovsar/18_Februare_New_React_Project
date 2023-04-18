import React from "react";
import Settings from "./Settings";
import {ActCreatorSettingAddPostData, ActCreatorUpdateSetAddPost} from "../../redux/settings-reducer";
import StoreContext from "../../StoreContext";


const SettingsContainer = (props) => {
    return (
        <StoreContext.Consumer >
            {
                (store) => {
                    let state = store.getState()
                    const settingsAddPost = () => {
                        let action = ActCreatorSettingAddPostData()
                        store.dispatch(action)
                    }
                    const updateSetAddPost = (text) => {
                        let action = ActCreatorUpdateSetAddPost(text)
                        store.dispatch(action)
                    }
                    return <Settings settingsAddPost = {settingsAddPost}
                              updateSetAddPost = {updateSetAddPost}
                              settingPostData = {state.settingsPage.settingPostData}
                              onSettingPost = {state.settingsPage.onSettingPost}
                    />
                }
            }
        </StoreContext.Consumer>
)
}

export default SettingsContainer;