import React from 'react';
import MyPost from "./MyPosts/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPost PostsData={props.state.PostsData}
                    onChangeData={props.state.onChangeData}
                    dispatch={props.dispatch}
            />
        </div>
    );
}

export default Profile;