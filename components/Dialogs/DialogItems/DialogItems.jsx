import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

export const DialogItems = (props) => {

    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog}>
            <h3>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSeKZbcVtvtJKKvj5jnN11zgX82gll4TsnmFg&usqp=CAU" alt="My Awesome Image"/>
            <NavLink to={path} className={s.dialogsItem}>{props.name}</NavLink>
            </h3>
        </div>
    )
}
