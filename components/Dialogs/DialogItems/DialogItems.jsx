import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

export const DialogItems = (props) => {

    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog}>
            <NavLink to={path} className={s.dialogsItem}>{props.name}</NavLink>
        </div>
    )
}