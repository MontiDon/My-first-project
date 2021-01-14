import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className={s.header}>
            <div>
                <NavLink to={'/home'}>
                    <img src='https://st3.depositphotos.com/4035913/14685/v/450/depositphotos_146856205-stock-illustration-rs-letter-logo-design-with.jpg' />
                </NavLink>
            </div>
            <div className={s.headerHead}>
                <h1>
                    <NavLink to='/home' className={s.headerName} >It`s my first project on React</NavLink>
                </h1>
            </div>
        </header>

    )

}
export default Header;