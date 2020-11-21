import profileReducer from "./Profile-reducer";
import dialogsReducer from "./Dialogs-reducer";
import sidebarReducer from "./Sidebar-reducer";


let store = {

    _state: { // Скрытые данные начинаются с _

        profilePage: {
            posts: [
                {id: 1, message: 'It`s my first post on React'},
                {id: 2, message: 'Eee boy!'}
            ],
            newPostText: ''
        },

        dialogsPage: {
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
        },

        sidebar: {
            friends: [
                {id: 'nastya', name: 'Nastya'},
                {id: 'katya', name: 'Katya'}
            ]
        }
    },
    _callSubscriber() {   // Скрытая функция. обновляет страничку
        console.log('State changed');
    },

    getState() {   // Скрытая функция. Возвращает данные
        return this._state
    },
    subscribe(observer) { // обновляет страничку
        this._callSubscriber = observer;
    },

    dispatch(action) { // Наши команды

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }
}


export default store;