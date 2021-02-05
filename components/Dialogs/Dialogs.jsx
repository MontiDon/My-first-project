import React from 'react';
import s from './Dialogs.module.css'
import {DialogItems} from "./DialogItems/DialogItems";
import {Messages} from "./Messages/Messages";


const Dialogs = (props) => {

    let dialogsElement = props.dialogsPage.dialogs.map(d =>
        <DialogItems name={d.name} id={d.id} key={d.id}/>);

    let messagesElements = props.dialogsPage.messages.map(m =>
        <Messages message={m.message} key={m.id}/>);

    let addMessage = () => {
        props.addMessage();
    }

    let updateMessageElement = (e) => {
        props.updateMessageElement(e.target.value)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <textarea onChange={updateMessageElement} value={props.dialogsPage.newMessage} placeholder='Enter your message'></textarea>
                </div>
                <div>
                    <button onClick={addMessage}>Add message</button>
                </div>
            </div>
        </div>
    )
}



export default Dialogs;
