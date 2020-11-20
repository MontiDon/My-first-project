import React from 'react';

let store = {

    _state: {

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
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === 'ADD-PROFILE-POST') {
            let newPost = {
                id: 3,
                message: this._state.profilePage.newPostText
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-PROFILE-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);


        } else if (action.type === 'ADD-DIALOGS-MESSAGE') {
            let newMessage = {
                id: 4,
                message: this._state.dialogsPage.newMessage
            }
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessage = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-DIALOGS-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessage = action.newText;
            this._callSubscriber(this._state);
        }

    }

}

export default store;