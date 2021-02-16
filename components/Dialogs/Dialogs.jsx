import React from 'react';
import s from './Dialogs.module.css'
import {DialogItems} from "./DialogItems/DialogItems";
import {Messages} from "./Messages/Messages";
import {AddDialogsFormRedux} from "./AddDialogsForm/AddDialogsForm";

const Dialogs = (props) => {

    let dialogsElement = props.dialogsPage.dialogs.map(d =>
        <DialogItems name={d.name} id={d.id} key={d.id}/>);

    let messagesElements = props.dialogsPage.messages.map(m =>
        <Messages message={m.message} key={m.id}/>);

    const addNewMessage = (text) => {
        props.addMessage(text.newMessageBody)
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <AddDialogsFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

export default Dialogs;
