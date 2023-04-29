import React from "react";
import s from "./MyPost.module.css";
import Post from "./Post/Post";




const Mypost = (props) => {
    debugger
    const postElements = props.postData.map(p => <Post message={p.message} LikesCount={p.LikesCount} />)

    let newPostElement = React.createRef()


    let profilePageAdd = () => {
        props.profilePageAdd();
    }

    let onPostChanged = () => {
        let what = newPostElement.current.value
        props.onPostChanged(what);
    }

    return (
        <div>
            My posts
            <div>
                <textarea onChange={onPostChanged} ref={newPostElement} className={s.textarea} placeholder='Destination' value={props.onPostText}></textarea> <br/>
                <button onClick={profilePageAdd}>Add post</button>
                <button>Remove post</button>
            </div>
            <div className={s.item}>
                { postElements }
            </div>
        </div>
    );
}

export  default Mypost;