import React from 'react';
import s from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <ul>
                <li className={`${s.item} ${s.active}`}>Messages</li>
                <li className={s.item}>News</li>
                <li className={s.item}>About me</li>
                <li className={s.stuff}>Other</li>
            </ul>
        </nav>
    );
}

export default Navbar;