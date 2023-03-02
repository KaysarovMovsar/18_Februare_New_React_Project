import React from 'react';
import s from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <ul>
                <li className={`${s.item} ${s.active}`}><a href='/profile'>Profile</a></li>
                <li className={s.item}><a href='/dialogs'>Messages</a></li>
                <li className={s.item}>News</li>
                <li className={s.stuff}>Settings</li>
            </ul>
        </nav>
    );
}

export default Navbar;