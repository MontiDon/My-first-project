import React from 'react';
import style from './Dialogs.module.css'
import {DialogItems} from "./DialogItems/DialogItems";
import {Messages} from "./Messages/Messages";
import {AddDialogsFormRedux} from "./AddDialogsForm/AddDialogsForm";
import {InitialStateType} from "../../redux/Dialogs-reducer";

type PropsType = {
    dialogsPage: InitialStateType
    sendMessage: (messageText: string) => void
}
export type NewMessageFormType = {
    newMessageBody: string
}

const Dialogs: React.FC<PropsType> = (props) => {

    const dialogsElement = props.dialogsPage.dialogs.map(d =>
        <DialogItems name={d.name} id={d.id} key={d.id}/>);

    const messagesElements = props.dialogsPage.messages.map(m =>
        <Messages message={m.message} key={m.id}/>);

    const addNewMessage = (text: NewMessageFormType) => {
        props.sendMessage(text.newMessageBody)
    }


    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={style.messages}>
                {messagesElements}
                <AddDialogsFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

export default Dialogs;


