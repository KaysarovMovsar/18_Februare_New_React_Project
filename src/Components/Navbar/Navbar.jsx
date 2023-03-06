import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <ul>
                <li className={s.item}>
                    <NavLink to='/profile' className={navData => navData.isActive ? s.activeLink : s.item}>
                        Profile
                    </NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to='/dialogs'
                             className={navData => navData.isActive ? s.activeLink : s.item}>
                        Messages
                    </NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to='/news' className={navData => navData.isActive ? s.activeLink : s.item}>
                        News
                    </NavLink>
                </li>
                <li className={`${s.item} ${s.stuff}`}>
                    <NavLink to='/settings' className={navData => navData.isActive ? s.activeLink : s.item}>
                        Settings
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;