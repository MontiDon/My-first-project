import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <div><img
                src='https://st3.depositphotos.com/4035913/14685/v/450/depositphotos_146856205-stock-illustration-rs-letter-logo-design-with.jpg' />
            </div>
            <div className={s.headerHead}>
                <h1>It`s my first project on React</h1>
            </div>
        </header>

    )

}
export default Header;