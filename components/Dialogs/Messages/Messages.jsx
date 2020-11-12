import s from "../Dialogs.module.css";
import React from "react";

export const Messages = (props) => {

    return (
        <div>
            <h3>
                <div className={s.message}>{props.message}</div>
            </h3>
        </div>
    )
}
