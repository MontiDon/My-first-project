const addDialogsMessage = 'ADD-DIALOGS-MESSAGE';

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
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case addDialogsMessage:
            let body = action.newMessageBody
            return {
                ...state,
                messages: [...state.messages, {id: 4, message: body}],
            }
    }
    return state;
}

export const addDialogsMessageActionCreator = (newMessageBody) => ({type: addDialogsMessage, newMessageBody})

export default dialogsReducer;

