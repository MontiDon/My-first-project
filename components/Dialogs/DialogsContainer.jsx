import React from 'react';
import {addDialogsMessageActionCreator} from "../../redux/Dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (newMessageBody) => {
            dispatch(addDialogsMessageActionCreator(newMessageBody))
        }
    }
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(Dialogs);
