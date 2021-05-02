import {InferActionsTypes} from "./Redux-store";

type DialogType = {
    id: number
    name: string
}
type MessageType = {
    id: number
    message: string
}
let initialState = {
    dialogs: [
        {id: 1, name: 'Dmitry'},
        {id: 2, name: 'Ilya'},
        {id: 3, name: 'Artem'},
        {id: 4, name: 'Katya'},
        {id: 5, name: 'Nastya'}
    ] as Array<DialogType>,

    messages: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'I`m fine'}
    ] as Array<MessageType>
}

const dialogsReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'ADD-DIALOGS-MESSAGE':
            let body = action.newMessageBody
            return {
                ...state,
                messages: [...state.messages, {id: 4, message: body}]
            }
    }
    return state;
}

export const actions = {
    sendMessage: (newMessageBody: string) => ({type: 'ADD-DIALOGS-MESSAGE', newMessageBody} as const)
}

export default dialogsReducer;

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>

