import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPosts/Post/MyPostContainer";
import {addPostElement} from "../../redux/state";


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPostContainer store={props.store}/>
        </div>
    );
}

export default Profile;