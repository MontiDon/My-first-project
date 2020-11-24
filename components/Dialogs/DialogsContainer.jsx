import React from 'react';
import {addDialogsMessageActionCreator, updateDialogsMessageTextActionCreator} from "../../redux/Dialogs-reducer";
import Dialogs from "./Dialogs";



const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    let addMessage = () => {
        props.store.dispatch(addDialogsMessageActionCreator())
    }

    let updateMessageElement = (text) => {
        let action = updateDialogsMessageTextActionCreator(text)
        props.store.dispatch(action)
    }

    return (
        <Dialogs addDialogsMessage={addMessage}
                 updateDialogsMessageText={updateMessageElement}
                 dialogsPage={state}
                 />
    )
}



export default DialogsContainer;
