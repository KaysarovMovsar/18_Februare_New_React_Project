import React from 'react';
import s from './Profile.module.css'

const Profile = () => {
    return (
        <div className={s.container}>
            <img src="https://avatars.mds.yandex.net/i?id=e13ea30af0fcf6bd906a81b472817952961f9e6e-7947495-images-thumbs&n=13" alt="It-Kamasutra"/>
            <div className={s.sideBar}>
                My posts
                <div>New post</div>
                <div className={s.posts}>
                    <div className={s.item}>First post</div>
                    <div className={s.item}>Second post</div>
                </div>
            </div>
        </div>
    );
}

export default Profile;