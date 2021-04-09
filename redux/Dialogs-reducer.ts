const addDialogsMessage = 'ADD-DIALOGS-MESSAGE';

export type initialStateType = typeof initialState
let initialState = {
    dialogs: [
        {id: 'dmitry', name: 'Dmitry'},
        {id: 'ilya', name: 'Ilya'},
        {id: 'artem', name: 'Artem'},
        {id: 'katya', name: 'Katya'},
        {id: 'nastya', name: 'Nastya'}
    ] as Array<{id: string, name: string}>,

    messages: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'I`m fine'}
    ] as Array<{id: number, message: string}>
}

const dialogsReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case addDialogsMessage:
            let body = action.newMessageBody
            return {
                ...state,
                messages: [...state.messages, {id: 4, message: body}]
            }
    }
    return state;
}

type addDialogsMessageActionCreatorType = {type: typeof addDialogsMessage, newMessageBody: string}
export const addDialogsMessageActionCreator = (newMessageBody: string): addDialogsMessageActionCreatorType => ({type: addDialogsMessage, newMessageBody})

export default dialogsReducer;

