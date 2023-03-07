import React from 'react';
import s from './Profile.module.css'
import MyPost from "./MyPosts/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import post from "./MyPosts/Post/Post";




const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPost PostsData={props.PostsData}/>
        </div>
    );
}

export default Profile;