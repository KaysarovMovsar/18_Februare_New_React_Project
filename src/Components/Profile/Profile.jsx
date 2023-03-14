import React from 'react';
import s from './Profile.module.css'
import MyPost from "./MyPosts/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {addPostElement} from "../../redux/state";


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPost PostsData={props.state.PostsData} addPostElement={props.addPostElement}/>
            <MyPost PostsData={props.state.PostsData}
                    addPost={props.addPost}
                    newPostText={props.state.newPostText}
                    updateNewPostText={props.updateNewPostText}
            />
        </div>
    );
}

export default Profile;