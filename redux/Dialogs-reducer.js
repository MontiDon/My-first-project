const addDialogsMessage = 'ADD-DIALOGS-MESSAGE';
const updateDialogsMessageText = 'UPDATE-DIALOGS-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        {id: 'dmitry', name: 'Dmitry'},
        {id: 'ilya', name: 'Ilya'},
        {id: 'artem', name: 'Artem'},
        {id: 'katya', name: 'Katya'},
        {id: 'nastya', name: 'Nastya'}
    ],

    messages: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'I`m fine'}
    ],
    newMessage: ''
}

const dialogsReducer = (state = initialState, action) => {

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
