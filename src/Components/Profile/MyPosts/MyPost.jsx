import React from 'react';
import s from './MyPost.module.css'
import Post from "./Post/Post";

let PostsData = [
    {id: 1, message: 'Hello, what is your number', LikesCount: 'Like ' + 12},
    {id: 2, message: 'Hello, I am not sure about that', LikesCount: 'Like ' + 11},

]

const MyPost = () => {
    return (
        <div className={s.container}>
             <div className={s.sideBar}>
                 <div>My posts</div>
                 <textarea className={s.input} placeholder='add'></textarea><br/>
                 <button className={s.add}>Add Post</button>
                <div className={s.posts}>
                    <Post message={PostsData[0].message} LikesCount={PostsData[0].LikesCount}/>
                    <Post message={PostsData[1].message} LikesCount={PostsData[0].LikesCount}/>
                </div>
            </div>
        </div>
    );
}

export default MyPost;