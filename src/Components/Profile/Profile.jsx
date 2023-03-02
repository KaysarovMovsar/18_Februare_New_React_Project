import React from 'react';
import s from './Profile.module.css'
import MyPost from "./MyPosts/MyPost";

const Profile = () => {
    return (
        <div>
            <img src="https://avatars.mds.yandex.net/i?id=e13ea30af0fcf6bd906a81b472817952961f9e6e-7947495-images-thumbs&n=13" alt="It-Kamasutra"/>
            <MyPost />
        </div>
    );
}

export default Profile;