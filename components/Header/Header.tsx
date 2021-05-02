import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

export type MapPropsType = {
    isAuth: boolean
    login: string | null
}
export type DispatchPropsType = {
    logout: () => void
}

const Header: React.FC<MapPropsType & DispatchPropsType> = (props) => {
    return (
        <header className={s.header}>
            <div>
                <NavLink to={'/home'}>
                    <img
                        src='https://st3.depositphotos.com/4035913/14685/v/450/depositphotos_146856205-stock-illustration-rs-letter-logo-design-with.jpg'
                        alt={''}/>
                </NavLink>
            </div>
            <div className={s.headerHead}>
                <h1>
                    <NavLink to='/home' className={s.headerName}>It`s my first project on React</NavLink>
                </h1>
                <div className={s.loginBlock}>
                    {props.isAuth
                        ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                        : <NavLink to={'/login'}>Login</NavLink>}
                </div>
            </div>
        </header>

    )

}

export default Header;