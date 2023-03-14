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
        </div>
    );
}

export default Profile;