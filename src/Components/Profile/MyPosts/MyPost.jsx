import React from 'react';
import s from './MyPost.module.css'
import Post from "./Post/Post";

const MyPost = () => {
    return (
        <div className={s.container}>
             <div className={s.sideBar}>
                 <div>My posts</div>
                 <textarea className={s.input} placeholder='add'></textarea><br/>
                 <button className={s.add}>Add Post</button>
                <div className={s.posts}>
                    <Post />
                    <Post />
                </div>
            </div>
        </div>
    );
}

export default MyPost;