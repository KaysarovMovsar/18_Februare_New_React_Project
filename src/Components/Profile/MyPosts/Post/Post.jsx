import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://www.kindpng.com/picc/m/260-2604936_jim-carrey-transparent-background-hd-png-download.png' alt='##'/>
            {props.message}
            <div><span>{props.LikesCount}</span></div>
        </div>
    );
}

export default Post;