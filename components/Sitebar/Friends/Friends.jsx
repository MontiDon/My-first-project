import React from 'react';
import s from './Friends.module.css'
import Friend from "./Friend/Friend";

const Friends = (props) => {

    let friends = props.sidebar.friends.map( f =>
        <Friend id={f.id} name={f.name}/>);
    return (
        <div className={s.friends}>
            {friends}
        </div>
    )
}

export default Friends;