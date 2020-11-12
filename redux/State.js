import React from 'react';
import {rerenderEntireTree} from "../Render";

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
            {id: 1, message: 'It`s my first post on React'},
            {id: 2, message: 'Eee boy!'}
        ]
    },

    sidebar: {
        friends: [
            {id: 'nastya', name: 'Nastya' },
            {id: 'katya', name: 'Katya' }
        ]
    }
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 3,
        message: postMessage
    }

    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}

export default state;
