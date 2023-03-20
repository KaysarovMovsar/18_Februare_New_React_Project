import React from 'react';
import s from './MyPost.module.css'
import Post from "./Post/Post";


const MyPost = (props) => {

    const postElements = props.PostsData.map(p =>  <Post message={p.message} LikesCount={p.LikesCount}/>)

    let newPost = React.createRef()
    let addPostElement = () => {
        props.dispatch({type: "ADD-POST-ELEMENT"})
    }

    let onAddPostChange = () => {
        let text = newPost.current.value
        props.dispatch({ type: "UPDATE-ON-POST-CHANGE", postMessage: text} )
    }

    return (
        <div className={s.container}>
             <div className={s.sideBar}>
                 <div>My posts</div>
                 <textarea ref={newPost}
                           className={s.input}
                           placeholder='add'
                           value={props.onChangeData}
                           onChange={onAddPostChange}/><br/>
                 <button onClick={addPostElement} className={s.add}>Add Post</button>
                <div className={s.posts}>
                    {postElements}
                </div>
            </div>
        </div>
    );
}

export default MyPost;