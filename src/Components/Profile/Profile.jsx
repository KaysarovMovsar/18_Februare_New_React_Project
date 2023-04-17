import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

import MypostContainer from "./MyPosts/MyPostContainer";


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MypostContainer store={props.store}/>
        </div>
    );
}

export default Profile;