import s from "../Dialogs.module.css";
import React from "react";
type PropsType = {
    message: string
}
export const Messages: React.FC<PropsType> = (props) => {
    return (
        <div>
            <h3>
                <div className={s.message}>{props.message}</div>
            </h3>
        </div>
    )
}
