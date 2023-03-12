import React from 'react';
import s from './MyPost.module.css'
import Post from "./Post/Post";


const MyPost = (props) => {

    const postElements = props.PostsData.map(p =>  <Post message={p.message} LikesCount={p.LikesCount}/>)

    let newPost = React.createRef()
    let addPost = () => {
        let text = newPost.current.value
        props.addPost(text)
        newPost.current.value = ''
    }

    return (
        <div className={s.container}>
             <div className={s.sideBar}>
                 <div>My posts</div>
                 <textarea ref={newPost} className={s.input} placeholder='add'></textarea><br/>
                 <button onClick={addPost} className={s.add}>Add Post</button>
                <div className={s.posts}>
                    {postElements}
                </div>
            </div>
        </div>
    );
}

export default MyPost;