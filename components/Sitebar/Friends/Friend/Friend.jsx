import React from 'react';
import s from '../Friends.module.css'
import {NavLink} from "react-router-dom";

const Friend = (props) => {

    let path = '/friends/' + props.id;
    return (
        <div className={s.friend}>
            <h3>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSeKZbcVtvtJKKvj5jnN11zgX82gll4TsnmFg&usqp=CAU" alt=""/>
            <NavLink to={path} className={s.friendsItems} >{props.name}</NavLink>
            </h3>
        </div>
    )
}

export default Friend;