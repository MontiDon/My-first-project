import React from 'react';

let store = {
    _state: {

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
        profilePage: {
            posts: [
                {id: 1, message: 'It`s my first post on React'},
                {id: 2, message: 'Eee boy!'}
            ],
            newPostText: ''
        },
        sidebar: {
            friends: [
                {id: 'nastya', name: 'Nastya' },
                {id: 'katya', name: 'Katya' }
            ]
        }
    },
    getState() {
        return this._state
    },
    _callSubscriber() {

    },
    addPost() {
        let newPost = {
            id: 3,
            message: this._state.profilePage.newPostText
        }

        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._state._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._state._callSubscriber(this._state);
    },

    addMessage() {
        let newMessage = {
            id: 4,
            message: this._state.postMessage
        }
        this._state.dialogsPage.messages.push(newMessage);
        this._state._callSubscriber(this._state);
    },
    updateMessageElement(newText) {
        this._state.dialogsPage.newMessage = newText;
        this._state._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._state._callSubscriber = observer;
    }

}

export default store;
