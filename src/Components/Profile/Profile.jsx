import React from 'react';
import s from './Profile.module.css'
import MyPost from "./MyPosts/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";




const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPost PostsData={props.state.PostsData}/>
        </div>
    );
}

export default Profile;