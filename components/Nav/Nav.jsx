import React from 'react';
import s from './Nav.module.css';
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={s.nav}>
            <h2>
                <div className={s.item}>
                    <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/dialogs" activeClassName={s.active}>Dialogs</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/news" activeClassName={s.active}>News</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/weather' activeClassName={s.active}>Weather</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/translate' activeClassName={s.active}>Google translate</NavLink>
                </div>
            </h2>
            <div className={s.item}>
                <h2><NavLink to='/settings' activeClassName={s.active}>Settings</NavLink></h2>
            </div>
            <div className={s.item}>
                <h2>
                    <NavLink to='/friends' activeClassName={s.active}>Friends</NavLink>
                </h2>
                <div className={s.friends}>
                    <div>
                        <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSeKZbcVtvtJKKvj5jnN11zgX82gll4TsnmFg&usqp=CAU" alt="My Awesome Image"/></div>
                        <div><NavLink to=''>Ilya</NavLink></div>
                    </div>
                    <div>
                        <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSeKZbcVtvtJKKvj5jnN11zgX82gll4TsnmFg&usqp=CAU" alt="My Awesome Image"/></div>
                        <NavLink to='' >Artem</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav;