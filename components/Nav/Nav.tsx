import React from 'react';
import s from './Nav.module.css';
import {NavLink} from "react-router-dom";

const Nav: React.FC = () => {
    return (
        <nav className={s.nav}>
            <h2>
                <div className={s.item}>
                    <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/developers" activeClassName={s.active}>Developers</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/dialogs" activeClassName={s.active}>Dialogs</NavLink>
                </div>
            </h2>
        </nav>
    )
}

export default Nav;