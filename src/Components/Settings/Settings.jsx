import React from "react";
import s from "./Settings.module.css"
import Post from "../Profile/MyPosts/Post/Post";
import {settingsAddPost} from "../../redux/state";

const Settings = (props) => {

    const setElements = props.state.settingPostData.map(s => <Post message={s.message} LikesCount={s.LikesCount} />)

    const setPostElement = React.createRef()

    const settingsAddPost = () => {
        props.settingsAddPost()
    }

    const updateSetAddPost = () => {
        let text = setPostElement.current.value
        props.updateSetAddPost(text)
    }

    return (
        <div>
            <div>
                Settings
                <div className={s.container}>
                    <textarea ref={setPostElement} onChange={updateSetAddPost} value={props.state.onSettingPost}></textarea>
                </div>
                <div>
                    <button onClick={settingsAddPost}>Add Post</button>
                </div>
            </div>
            {setElements}
        </div>
    )
}

export default Settings;