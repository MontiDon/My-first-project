import React from 'react';
import s from './Dialogs.module.css'
import {DialogItems} from "./DialogItems/DialogItems";
import {Messages} from "./Messages/Messages";


const Dialogs = (props) => {
    let dialogsElement = props.dialogsPage.dialogs.map(d =>
        <DialogItems name={d.name} id={d.id}/>);

    let messagesElements = props.dialogsPage.messages.map(m =>
        <Messages message={m.message}/>);

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.dispatch({ type: 'ADD-DIALOGS-MESSAGE'})
        newMessageElement.current.value = '';
    }

    let updateMessageElement = () => {
        let text = newMessageElement.current.value;
        let action = { type: 'UPDATE-DIALOGS-MESSAGE-TEXT', newText: text};
        props.dispatch(action)

    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <textarea ref={newMessageElement} onChange={updateMessageElement} value={props.dialogsPage.newMessage}></textarea>
                </div>
                <div>
                    <button onClick={addMessage}>Add message</button>
                </div>
            </div>
        </div>
    )
}



export default Dialogs;
