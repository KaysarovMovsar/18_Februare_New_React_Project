import React from 'react';
import s from './MyPost.module.css'
import Post from "./Post/Post";


const MyPost = (props) => {

    const postElements = props.PostsData.map(p =>  <Post message={p.message} LikesCount={p.LikesCount}/>)

    let newPost = React.createRef()
    let addPostElement = () => {
        props.addPostElement()
    }

    let onAddPostChange = () => {
        let text = newPost.current.value
        props.updateOnPostChange(text)
        newPost.current.value = ''
        props.addPost(text)
    }

    let onChangePost = () => {
        let text = newPost.current.value
        props.updateNewPostText(text)
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
                 <textarea onChange={onChangePost} ref={newPost} className={s.input} value={props.newPostText} /><br/>
                 <button onClick={addPost} className={s.add}>Add Post</button>
                <div className={s.posts}>
                    {postElements}
                </div>
            </div>
        </div>
    );
}

export default MyPost;