import React from 'react';
import s from './Dialogs.module.css'
import {DialogItems} from "./DialogItems/DialogItems";
import {Messages} from "./Messages/Messages";


const Dialogs = (props) => {
    let dialogsElement = props.dialogsPage.dialogs.map(d =>
        <DialogItems name={d.name} id={d.id}/>);

    let messagesElements = props.dialogsPage.messages.map(m =>
        <Messages message={m.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}



export default Dialogs;
