import React from "react";
import s from "./MyPost.module.css";
import Post from "./Post/Post";




const Mypost = (props) => {
    const postElements = props.postData.map(p => <Post message={p.message} likesCount={p.likesCount} />)

    let newPostElement = React.createRef()


    let profilePageAdd = () => {
        props.addPost();
    }

    let onPostChanged = () => {
        let what = newPostElement.current.value
        props.updateNewPostText(what);
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