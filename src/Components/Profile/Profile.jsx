import React from 'react';
import MyPost from "./MyPosts/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPost PostsData={props.state.PostsData}
                    onChangeData={props.state.onChangeData}
                    addPostElement={props.addPostElement}
                    updateOnPostChange={props.updateOnPostChange}
            />
        </div>
    );
}

export default Profile;