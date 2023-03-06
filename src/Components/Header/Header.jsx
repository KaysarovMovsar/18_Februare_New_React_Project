import React from 'react';
import s from './Header.module.css'

const Header = () => {
    return (
            <header className={s.header}>
                <img src="https://avatars.mds.yandex.net/i?id=0efdf3fdecbfb91aacd73a55dcd92eb005daddc2-7755770-images-thumbs&n=13" alt="bird"/>
            </header>
    );
}

export default Header;
