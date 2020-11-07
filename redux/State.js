import React from 'react';

let state = {

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
        ]
    },
    profilePage: {
        posts: [
            {id: 1, message: 'It`s my first post on react'},
            {id: 2, message: 'Eee boy!'}
        ]
    },

    sidebar: {
        friends: [
            {id: 'ilya', name: 'Ilya' },
            {id: 'artem', name: 'Artem' }
        ]
    }
}
export default state;
