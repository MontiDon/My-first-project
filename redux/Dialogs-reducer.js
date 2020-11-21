const addDialogsMessage = 'ADD-DIALOGS-MESSAGE';
const updateDialogsMessageText = 'UPDATE-DIALOGS-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {

    switch (action.type) {
        case addDialogsMessage:
            let newMessage = {
                id: 4,
                message: state.newMessage
            }
            state.messages.push(newMessage);
            state.newMessage = '';
            break;
        case updateDialogsMessageText:
            state.newMessage = action.newText;
            break;
    }

    return state;
}

export default dialogsReducer;


export const addDialogsMessageActionCreator = () => {
    return {
        type: addDialogsMessage
    }
}

export const updateDialogsMessageTextActionCreator = (text) => ({type: updateDialogsMessageText, newText: text})
